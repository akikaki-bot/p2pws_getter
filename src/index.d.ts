/// <reference types="node" />
import { EventEmitter } from "events";
import { Data, Areapeers, EEWDetection, TsunamiWarning } from './types';
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
export declare class P2PWSClient extends EventEmitter {
    constructor();
    run(): Promise<void>;
}
export declare interface P2PWSClient {
    on(event: 'earthquake', listener: (data: Data) => void): this;
    on(event: 'ready', listener: () => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'areapeers', listener: (data: Areapeers) => void): this;
    on(event: 'eewdetection', listener: (data: EEWDetection) => void): this;
    on(event: 'tsunamiwarning', listener: (data: TsunamiWarning) => void): this;
}
