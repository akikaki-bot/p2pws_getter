import { Areapeers } from "../components/areapeers";
import { DetailEEW } from "../components/detaileew";
import { EEW } from "../components/eew";
import { EEWInfomation } from "../components/eewInfomation";
import { Tsunami } from "../components/tsunami";
export type ResolveP2PObject = ResolveJSONData & ResolveObject;
export interface ResolveJSONData {
    code: number;
}
export type ResolveObject = {
    [key: string]: string | number | object;
};
export type TsunamiWarning = {
    _id: string;
    code: 552;
    time: string;
    cancelled: boolean;
    issue: TsunamiIssues;
    areas: TsunamiAreas[];
};
export type TsunamiIssues = {
    source: string;
    time: string;
    /** Tip: 予報のみ */
    type: string;
};
export type TsunamiAreas = {
    grade: TsunamiTypes;
    immediate: boolean;
    name: string;
};
export type TsunamiTypes = "MajorWarning" | "Warning" | "Watch" | "Unknown";
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
    _id: string;
    code: 551;
    time: string;
    issue: {
        source: string;
        time: string;
        type: Typeofinfo;
        correct: Infoonly;
    };
    earthquake: {
        time: string;
        hypocenter: HypocenterFormat;
        maxScale: Scale;
        domesticTsunami: Tsunamitype;
        forginTsunami: Forgintsunami;
    };
    points: Array<PointFormat>;
}
export type PointFormat = {
    pref: string;
    addr: string;
    isArea: boolean;
    scale: Scale;
};
export type Issue = {
    time: string;
    eventId: string;
    serial: string;
};
export type EEW_Earthquake = {
    originTime: string;
    arrivalTime: string;
    condition: string;
    hypocenter: EEW_Hypocenter;
};
export type EEW_Hypocenter = {
    name: string;
    reduceName: string;
    latitude: number | -200;
    longitude: number | -200;
    depth: number | -1;
    magunitude: number | -1;
};
/**
 * ・Typeofinfo
 *
 * @description
 * type of information
 *
 * 流れてくる情報の種類。
 */
export type Typeofinfo = "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale" | "Foreign" | "Other";
/**
 * ・Infoonly
 *
 * @description
 *
 * 情報に入っている情報（？）
 */
export type Infoonly = "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination";
/**
 * Forgintsunami
 *
 * @description
 *
 * 海外の津波情報
 */
export type Forgintsunami = "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential";
/**
 * Tsunamitype
 *
 * @description
 *
 * 津波警報の種類 / 有無
 */
export type Tsunamitype = "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning" | "MajorWarning";
/**
 * Scale
 */
export type Scale = "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70";
export type HypocenterFormat = {
    name: string;
    latitude: number | -200;
    longitude: number | -200;
    depth: number | 0 | -1;
    magnitude: number | -1;
};
export type UserQuakeArray = {
    id: number;
    peer: number;
};
export type InfomationResolveType = EEWInfomation | Areapeers | DetailEEW | EEW | Tsunami;
