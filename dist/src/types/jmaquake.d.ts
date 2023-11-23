import { BasicData } from "./basic";
/**
 * 地震情報
 */
export interface JMAQuake extends BasicData {
    code: 551;
    /**
     * 発表元の情報
     */
    issue: QuakeIssues;
    /**
     * 地震についての詳細情報
     */
    earthquake: QuakeDetail;
    /** 震度観測点の情報  */
    points: Points[];
}
/**
 * 発表元の情報
 */
export interface QuakeIssues {
    source?: string;
    time: string;
    type: InfomationType;
    correct?: CorrectType;
}
/**
 * 地震についての詳細情報
 */
export interface QuakeDetail {
    /** 発生日時  */
    time: string;
    /** 震源情報 */
    hypocenter: Hypocenter;
    /**
     * 最大震度。
     *
     * 震度情報が存在しない場合は-1となります。
     */
    maxScale: Scale | -1;
    /**
     * 国内への津波の有無
     */
    domesticTsunami: DomesticTsunamiType;
    /**
     * 海外での津波の有無
     */
    foreignTsunami: ForginTsunamiType;
}
/**
 * 震源情報
 */
export interface Hypocenter {
    /**
     * 震源の名称
     */
    name: string;
    /**
     * 緯度。
     *
     * 震源情報が存在しない場合は-200となります。
     */
    latitude: number | -200;
    /**
     * 経度。
     *
     * 震源情報が存在しない場合は-200となります。
     */
    longitude: number | -200;
    /**
     * 深さ(km)。
     *
     * 「ごく浅い」は0、
     *
     * 震源情報が存在しない場合は-1となります。
     */
    depth: number | 0 | -1;
    /**
     * マグニチュード。
     *
     * 震源情報が存在しない場合は-1となります。
     */
    magnitude: number | -1;
}
export interface Points {
    /** 都道府県  */
    pref: string;
    /**
     * 震度観測点名称
     *
     * （震度速報の場合は [気象庁 | 緊急地震速報や震度情報で用いる区域の名称](https://www.data.jma.go.jp/svd/eqev/data/joho/shindo-name.html) に記載のある区域名）
     */
    addr: string;
    /**
     * 区域名かどうか
     */
    isArea: boolean;
    /**
     * その区域・または観測点の震度
     *
     * enum : Scale (number)
     */
    scale: Scale;
}
/**
 * 震度
 */
export type Scale = 10 | 20 | 30 | 40 | 45 | 50 | 55 | 60 | 70;
/**
 * 発表種類
 */
export type InfomationType = "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale" | "Foreign" | "Other";
/**
 * 訂正種別
 */
export type CorrectType = "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination";
/**
 * 津波の種類 (大津波警報なし)
 */
export type DomesticTsunamiType = "None" | "Unknown" | "NonEffective" | "Watch" | "Warning";
/**
 * 海外での津波の有無
 */
export type ForginTsunamiType = "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential";
