/**
 * 受信日時。形式は `2006/01/02 15:04:05.999` です。
 */
export type Time = string;
/**
 * BasicData
 * ---
 *
 * ベースとなる形です。
 */
export interface BasicData {
    /** 情報を一意に識別するID  */
    _id: string;
    /** 情報種別のコード */
    code: number;
    /** 受信日時。形式は `2006/01/02 15:04:05.999` です。  */
    time: Time;
}
