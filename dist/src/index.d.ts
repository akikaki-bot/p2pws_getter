/// <reference types="node" />
import { EventEmitter } from "events";
import { InfomationResolve, InfomationResolveType } from './types';
import { EEWInfomation, Areapeers, EEW, Tsunami, DetailEEW, DataManager } from "./components";
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
export declare class Client extends EventEmitter {
    /**
     * ## Cache
     *
     * データマネージャークラス。IDを参照してキャッシュもしくはAPIから取得します。
     */
    cache: DataManager<InfomationResolveType>;
    private wsUri;
    constructor(options?: ClientOptions);
    run(): Promise<void>;
}
export interface ClientOptions {
    sandboxUri?: "wss://api-realtime-sandbox.p2pquake.net/v2/ws";
}
export declare class ReadyMessage {
    wsurl: string;
    connection: number;
    constructor(data: ReadyMessage);
}
export declare interface Client {
    on(event: 'earthquake', listener: (data: EEWInfomation) => void): this;
    on(event: 'areapeers', listener: (data: Areapeers) => void): this;
    on(event: 'eewdetection', listener: (data: EEW) => void): this;
    on(event: 'tsunamiwarning', listener: (data: Tsunami) => void): this;
    on(event: 'eew', listener: (data: DetailEEW) => void): this;
    on(event: 'infomations', listener: (data: InfomationResolve) => void): this;
    on(event: 'ready', listener: (message: ReadyMessage) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
}
/**
 * index.ts - Endpoints
 */
export { EEWInfomation, Areapeers, EEW, Tsunami, DetailEEW };
