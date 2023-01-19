import { EventEmitter } from "events";
import { WebSocket } from "ws"
import {
    P2PClientClasses,
    Data,
    Areapeers,
    EEWDetection,
    TsunamiWarning
 } from './types'

 /**
  * P2PQuake 非公式 WebsocketClient
  * 
  * @author あきかき
  * 
  * 〉注意
  * 
  *   !!!! このクラスのrunメゾットを必ず実行してください !!!!
  * 
  * 　今対応している情報は以下の通りです。
  *   
  *　・551(通常地震情報)
  * 
  * 　・552(津波情報)
  * 
  * 　・554(緊急地震速報)
  * 
  * 　・555(ペア情報)
  * 
  *  型宣言フォルダはtypesです。
  * 
  * 間違えないようにはしていますが、手作業なのでミスが発生している可能性があります。
  * 
  * その場合は書き換えをお願いいたします....
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

export class P2PWSClient extends EventEmitter {
     constructor(){ super() }
     async run(){
       const ws = new WebSocket("wss://api.p2pquake.net/v2/ws")

       /**
        * 
        * Readyされたときに発火するやつ
        */
        ws.onopen = async () => {
           this.emit('ready')
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
        ws.onmessage = async (data : any) => {
            const datas = JSON.parse(data.data.toString()) as Data | Areapeers | EEWDetection | TsunamiWarning

           if(datas.code === 551){
           this.emit('earthquake', new P2PClientClasses.Data_OLD(datas))
           }

           if(datas.code === 555){
           this.emit('areapeers', new P2PClientClasses.Areapeers_OLD(datas))
           }


           if(datas.code === 554){
           this.emit('eewdetection', new P2PClientClasses.EEW(datas))
           }

           if(datas.code === 552){
            this.emit('tsunamiwarning', new P2PClientClasses.Tsunami(datas))
           }
        }
     }
}

export declare interface P2PWSClient {
    on(event :'earthquake', listener:(data: Data) => void): this
    on(event :'ready', listener: () => void): this
    on(event :'error', listener: (error: Error) => void): this
    on(event :'areapeers', listener: (data: Areapeers) => void): this
    on(event :'eewdetection', listener: (data: EEWDetection) => void): this
    on(event :'tsunamiwarning', listener: (data: TsunamiWarning) => void): this
}


