import { BasicData } from "./basic";


/**
 * 津波予報
 */
export interface JMATsunami extends BasicData {
    code: 552
    /**
     * 津波予報が解除されたかどうか。
     * 
     * trueの場合、areasは空配列です。
     */
    cancelled: boolean
    /**
     * 発表元の情報
     */
    issue: TsunamiIssue
    /**
     * 津波予報の詳細
     */
    areas: TsunamiAreas[]
}

export interface TsunamiIssue {
    /** 発表元  */
    source: string
    /** 発表日時 */
    time: string
    /**
     * 発表種類。
     * 
     * 現在は Focus (津波予報) のみです。
     */
    type: string | "Focus"
}


/**
 * 津波予報の詳細
 */
export interface TsunamiAreas {
    /**津波予報の種類 */
    grade: TsunamiTypes;
    /** 直ちに津波が来襲すると予想されているかどうか */
    immediate: boolean;
    /** 津波予報区名。[気象庁｜津波予報区について](https://www.data.jma.go.jp/svd/eqev/data/joho/t-yohokuinfo.html) を参照。 */
    name: string
    /**
     * 津波の到達予想時刻（2023年11月01日から提供予定）
     */
    firstHeight: FirstHeight;
    /**
     * 予想される津波の高さ（2023年11月01日から提供予定）
     */
    maxHeight: MaxHeight;
}

/**
 * 津波の到達予想時刻（2023年11月01日から提供予定）
 */
export interface FirstHeight {
    /** 第一波の到達予想時刻 */
    arrivalTime: string
    /** Enum : TsunamiCondition */
    condition: TsunamiCondition
}

/**
 * 予想される津波の高さ（2023年11月01日から提供予定）
 */
export interface MaxHeight {
    /** 
     * 高さの文字列表現
     * 
     * @see https://www.p2pquake.net/develop/json_api_v2/#/
     * */
    description: Description_TsunamiHeight
    /**
     * 数値表現。
     * 
     * 文字列表現が「巨大」「高い」の場合は設定されません。
     * 
     * また、「０．２ｍ未満」は「0.2」となります。
     */
    value: number
}

export type Description_TsunamiHeight =
    | "巨大"
    | "高い"
    | "１０ｍ超"
    | "１０ｍ"
    | "５ｍ"
    | "３ｍ"
    | "１ｍ"
    | "０．２ｍ未満"
    | string

export type TsunamiCondition =
    | "ただちに津波来襲と予測"
    | "津波到達中と推測"
    | "第１波の到達を確認"

export type TsunamiTypes =
    | "MajorWarning"
    | "Warning"
    | "Watch"
    | "Unknown"