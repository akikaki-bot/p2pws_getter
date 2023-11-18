import { Areapeers } from "../components/areapeers";
import { DetailEEW } from "../components/detaileew";
import { EEW } from "../components/eew";
import { EEWInfomation } from "../components/eewInfomation";
import { Tsunami } from "../components/tsunami";

export type ResolveP2PObject = ResolveJSONData & ResolveObject

export interface ResolveJSONData {
    code: number
}

export type ResolveObject = { [key: string]: string | number | object }

/** 津波予報 */
export interface TsunamiWarning {
    /** 情報を一意に識別するID */
    _id: string;
    /**情報コード。常に552です。 */
    code: 552
    /**受信日時。形式は 2006/01/02 15:04:05.999 です。 */
    time: string;
    /**津波予報が解除されたかどうか。trueの場合、areasは空配列です。 */
    cancelled: boolean;
    /**発表元の情報 */
    issue: TsunamiIssues
    /**津波予報の詳細 */
    areas: TsunamiAreas[]
}

/**
 * 発表元の情報
 */
export type TsunamiIssues = {
    /**発表元 */
    source: string;
    /**発表日時 */
    time: string;
    /** 発表種類。現在は Focus (津波予報) のみです。 */
    type: string;
}

/**
 * 津波予報の詳細
 */
export type TsunamiAreas = {
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

/**
 * @type Data {object} 
 * 
 * 地震情報の際に送られてくるJSONの型。
 * いろいろと複雑。
 * 
 * 
 * typeとかcorrectとかdomesticTsunamiにある"ScalePrompt"とかの謎の英語の解説は別紙の
 * example/lang.mdにないよ。
 */
export interface Data {
    _id: string
    code: 551
    time: string
    issue: {
        source: string
        time: string
        type: Typeofinfo
        correct: Infoonly
    }
    earthquake: {
        time: string
        hypocenter: HypocenterFormat
        maxScale: Scale
        domesticTsunami: Tsunamitype
        forginTsunami: Forgintsunami
    }
    points: Array<PointFormat>
}


export type PointFormat =
    {
        pref: string
        addr: string
        isArea: boolean
        scale: Scale
    }

export type Issue = {
    time: string,
    eventId: string,
    serial: string,
}

export type EEW_Earthquake = {
    originTime: string,
    arrivalTime: string,
    condition: string,
    hypocenter: EEW_Hypocenter
}

export type EEW_Hypocenter = {
    name: string,
    reduceName: string,
    latitude: number | -200
    longitude: number | -200
    depth: number | -1
    magunitude: number | -1
}

/**
 * ・Typeofinfo
 * 
 * @description
 * type of information
 * 
 * 流れてくる情報の種類。
 */
export type Typeofinfo = "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale" | "Foreign" | "Other"
/**
 * ・Infoonly
 * 
 * @description
 * 
 * 情報に入っている情報（？）
 */
export type Infoonly = "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination"
/**
 * Forgintsunami
 * 
 * @description
 * 
 * 海外の津波情報
 */
export type Forgintsunami = "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential"
/**
 * Tsunamitype
 * 
 * @description
 * 
 * 津波警報の種類 / 有無
 */
export type Tsunamitype = "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning" | "MajorWarning"
/**
 * Scale
 */
export type Scale = "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70"

export type HypocenterFormat = {
    name: string
    latitude: number | -200
    longitude: number | -200
    depth: number | 0 | -1
    magnitude: number | -1
}

export type UserQuakeArray = { id: number, peer: number }

export type InfomationResolveType = EEWInfomation | Areapeers | DetailEEW | EEW | Tsunami

export class InfomationResolve {
    code: number

    constructor(data: InfomationResolveType) {
        this.code = data.code
    }

    isEEWInfomation(): this is EEWInfomation {
        return this.code === 551
    }

    isAreapeers(): this is Areapeers {
        return this.code === 555
    }

    isDetailEEW(): this is DetailEEW {
        return this.code === 556
    }

    isEEW(): this is EEW {
        return this.code === 554
    }

    isTsunami(): this is Tsunami {
        return this.code === 552
    }
}


