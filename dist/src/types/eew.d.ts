import { EEWKindCode } from "../components/detaileew";
import { BasicData } from "./basic";
import { Hypocenter, Scale } from "./jmaquake";
export interface EEW extends BasicData {
    code: 556;
    /**
     * テストかどうか。
     */
    test: boolean;
    /**
     * 地震の情報。ただし、取消の場合は値は設定されません。
     */
    earthquake: EEWDetail;
    /**
     *
     */
    issue: EEWIssue;
    /**
     * 取り消しかどうか
     */
    cancelled: boolean;
    /**
     * 細分区域
     */
    areas: EEWArea[];
}
/**
 * 細分区域
 */
export interface EEWArea {
    /**
     * 府県予報区
     */
    pref: string;
    /**
     * 地域名（細分区域名）
     */
    name: string;
    /**
     * 最大予測震度の下限
     *
     * システムの都合で小数点が付きますが整数部のみ有効です。
     */
    scaleFrom: Scale;
    /**
     * 最大予測震度の上限
     *
     * システムの都合で小数点が付きますが整数部のみ有効です。
     */
    scaleTo: -1 | 0 | 99 | Scale;
    /**
     * 警報コード
     */
    kindCode: EEWKindCode;
    /**
     * 主要動の到達予測時刻
     */
    arrivalTime: string;
}
export interface EEWIssue {
    /**
     * 発表時刻
     */
    time: string;
    /**
     * 識別情報
     */
    eventId: string;
    /**
     * 情報番号
     */
    serial: string;
}
export interface EEWDetail {
    /**
     * 地震発生時刻
     */
    originTime: string;
    /**
     * 地震発現時刻
     */
    arrivalTime: string;
    /**
     * 仮定震源要素の場合、値は "仮定震源要素" となります。
     */
    condition: string;
    /**
     * 震源要素の詳細
     */
    hypocenter: Hypocenter & {
        /** 短縮用震央地名 */
        reduceName: string;
    };
}
