import { EventEmitter } from "events";
import { WebSocket } from "ws"

import {
	InfomationResolveType,
} from './types'

import {
	EEWInfomation,
	Areapeers,
	EEW,
	Tsunami,
	DetailEEW,
	DataManager
} from "./components";

/**
 * ## Client
 * 
 * P2P地震情報 非公式データマネージャー＆ウェブソケットパッケージ
 * 
 * @example
 * 
 * const client = new Client();
 * 
 * client.on('ready' , () => {
 * 	  console.log('Manager ready!')
 * })
 * 
 * client.cache.resolve('id') // -> return something code data or null
 * 
 * @author あきかき
 * 
 * 　今対応している情報は以下の通りです。
 *   
 *　 ・551(通常地震情報)
 * 
 * 　・552(津波情報)
 * 
 * 　・554(緊急地震速報 - 情報のみ)
 * 
 * 　・556(緊急地震速報 - 詳細)
 * 
 * 　・555(ペア情報)
 * 
 * 〉型参考元
 * 
 * [p2pquake.net/jsonapi_v2](https://www.p2pquake.net/json_api_v2/#/)
 * 
 * 〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉
 * 
 * このクラスは EventEmitter を継承しています。
 * 
 * 〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉
 *  
 */

export class Client extends EventEmitter {

	/**
	 * ## Cache
	 * 
	 * データマネージャークラス。IDを参照してキャッシュもしくはAPIから取得します。
	 */
	public cache : DataManager<InfomationResolveType>;


	constructor() {
		super()
		this.cache = new DataManager();
		this.run()
	}
	async run() {
		const ws = new WebSocket("wss://api.p2pquake.net/v2/ws")

		/**
		 * 
		 * Readyされたときに発火するやつ
		 */
		ws.onopen = async () => {
			this.emit('ready', () => {})
		}

		/**
		 * 
		 * @param {ErrorEvent} error 
		 * エラーが起きたときに発火するイベント。このウェブソケット安定しすぎてエラー出ない。 
		 */
		ws.onerror = async (error) => {
			this.emit('error', new Error(error.message ? error.message : "不明なエラー"))
		}

		/**
		 * p2pサーバーからなにかきたら発火する関数。
		 * 
		 * @param {MessageEvent} data どれかの型のデータが入ってる生データ なかみはjson。
		 * 
		 */
		ws.onmessage = async (data: any) => {
			const datas = JSON.parse(data.data.toString()) as InfomationResolveType

			if (datas.code === 551) {
				this.emit('earthquake', new EEWInfomation(datas))
				this.cache.set( datas._id, new EEWInfomation(datas) )
			}

			if (datas.code === 555) {
				this.emit('areapeers', new Areapeers(datas))
				this.cache.set( datas._id, new Areapeers(datas) )
			}

			if (datas.code === 556) {
				this.emit('eew', new DetailEEW(data))
				this.cache.set( datas._id, new DetailEEW(datas) )
			}

			if (datas.code === 554) {
				this.emit('eewdetection', new EEW(datas))
				this.cache.set( datas._id, new EEW(datas) )
			}

			if (datas.code === 552) {
				this.emit('tsunamiwarning', new Tsunami(datas))
				this.cache.set( datas._id, new Tsunami(datas) )
			}
		}
	}
}

export declare interface P2PWSClient {
	on(event: 'earthquake', listener: (data: EEWInfomation) => void): this
	on(event: 'areapeers', listener: (data: Areapeers) => void): this
	on(event: 'eewdetection', listener: (data: EEW) => void): this
	on(event: 'tsunamiwarning', listener: (data: Tsunami) => void): this
	on(event: 'eew', listener: (data: DetailEEW) => void): this

	on(event: 'ready', listener: () => void): this
	on(event: 'error', listener: (error: Error) => void): this
}
/**
 * index.ts - Endpoints
 */
export {
	EEWInfomation,
	Areapeers,
	EEW,
	Tsunami,
	DetailEEW
}
