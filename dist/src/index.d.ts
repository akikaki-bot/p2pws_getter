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
 * 〉型名・型・説明参考
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
    /**
     * 地震情報
     */
    on(event: 'earthquake', listener: (data: EEWInfomation) => void): this;
    on(event: 'areapeers', listener: (data: Areapeers) => void): this;
    on(event: 'eewdetection', listener: (data: EEW) => void): this;
    /**
     * 津波予報
     */
    on(event: 'tsunamiwarning', listener: (data: Tsunami) => void): this;
    /**
     *
        緊急地震速報（警報）の内容です。ただし、以下の点に留意してください。

        内容や配信品質は無保証です。緊急地震速報（警報）としての利活用は非推奨です。
        - 多くの項目は[気象庁防災情報XMLフォーマット ｜ 技術資料の定義](https://xml.kishou.go.jp/tec_material.html)そのままです。
        - 地震の規模や予測震度なども提供しますが、緊急地震速報（警報）では発表されない内容です（参考：[気象庁｜緊急地震速報｜緊急地震速報（警報）及び（予報）について](https://www.data.jma.go.jp/svd/eew/data/nc/shikumi/shousai.html)）。
        - スキーマは今後拡張する可能性があります。

        遅延や欠落のリスクは以下の通りです。
        - 処理遅延: WebSocket API は約 70ms 、 JSON API は約 1000 ms （高負荷時はさらに遅延します）
        - サーバ所在地: 東京 (Linode Tokyo 2)
        - 欠落リスク: サーバや受信プログラムは冗長化しておらず、障害時は配信できず、復旧時の再配信もありません
    */
    on(event: 'eew', listener: (data: DetailEEW) => void): this;
    on(event: 'infomations', listener: (data: InfomationResolve) => void): this;
    on(event: 'ready', listener: (message: ReadyMessage) => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
}
/**
 * index.ts - Endpoints
 */
export { EEWInfomation, Areapeers, EEW, Tsunami, DetailEEW };
