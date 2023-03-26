/**
 *
 * libで使うClassたち。
 *
 *
 *
 */
export declare namespace P2PClientClasses {
    /**
     * @class
     * EEWDetectionに肉付けをするのクラス。
     */
    class EEW {
        _id: string;
        code: 554;
        time: string;
        type: string[];
        constructor(data: EEWDetection);
    }
    class DetailEEW {
        _id: string;
        code: 556;
        time: string;
        test: boolean;
        earthquake: {
            originTime: string;
            arrivalTime: string;
            condition: string;
            hypocenter: {
                name: string;
                reduceName: string;
                latitude: number | -200;
                longitude: number | -200;
                depth: number | -1;
                magunitude: number | -1;
            };
        };
        issue: {
            time: string;
            eventId: string;
            serial: string;
        };
        cancelled: boolean;
        areas: Array<EEWArea>;
        constructor(data: DetailEEW);
    }
    class Data_OLD {
        _id: string;
        code: number;
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
        constructor(data: Data);
    }
    class Areapeers_OLD {
        _id: string;
        areas: Array<UserQuakeArray>;
        code: 555;
        create_at: string;
        expire: string;
        hop: number;
        time: string;
        uid: string;
        ver: string;
        constructor(data: Areapeers);
    }
    class Tsunami {
        _id: string;
        code: 552;
        time: string;
        cancelled: boolean;
        issue: TsunamiIssues;
        areas: TsunamiAreas[];
        constructor(data: TsunamiWarning);
    }
}
export declare type TsunamiWarning = {
    _id: string;
    code: 552;
    time: string;
    cancelled: boolean;
    issue: TsunamiIssues;
    areas: TsunamiAreas[];
};
export declare type TsunamiIssues = {
    source: string;
    time: string;
    /** Tip: 予報のみ */
    type: string;
};
export declare type TsunamiAreas = {
    grade: TsunamiTypes;
    immediate: boolean;
    name: string;
};
export declare type TsunamiTypes = "MajorWarning" | "Warning" | "Watch" | "Unknown";
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
export declare type Data = {
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
};
/**
 * @type EEWDetection
 *
 * EEWの生データ。
 *
 */
export declare type EEWDetection = {
    _id: string;
    code: 554;
    time: string;
    type: string[];
};
export declare type PointFormat = {
    pref: string;
    addr: string;
    isArea: boolean;
    scale: Scale;
};
/**
 * 詳細な緊急地震速報
 */
export declare type DetailEEW = {
    _id: string;
    code: 556;
    time: string;
    test: boolean;
    earthquake: EEW_Earthquake;
    issue: Issue;
    cancelled: boolean;
    areas: Array<EEWArea>;
};
export declare type EEWArea = {
    pref: string;
    name: string;
    scaleFrom: number;
    scaleTo: number;
    kindCode: EEWKindCode;
    arrivalTime: string;
};
export declare const enum EEWKindCode {
    /** 主要動未到達 */
    SecondaryUnReached = "10",
    /** 主要動到達済 */
    SecondaryReached = "11",
    /**主要動の到達予想なし（PLUM法による予想）*/
    SecondaryReachedNoForecastinPLUM = "19"
}
export declare type Issue = {
    time: string;
    eventId: string;
    serial: string;
};
export declare type EEW_Earthquake = {
    originTime: string;
    arrivalTime: string;
    condition: string;
    hypocenter: EEW_Hypocenter;
};
export declare type EEW_Hypocenter = {
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
export declare type Typeofinfo = "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale" | "Foreign" | "Other";
/**
 * ・Infoonly
 *
 * @description
 *
 * 情報に入っている情報（？）
 */
export declare type Infoonly = "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination";
/**
 * Forgintsunami
 *
 * @description
 *
 * 海外の津波情報
 */
export declare type Forgintsunami = "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential";
/**
 * Tsunamitype
 *
 * @description
 *
 * 津波警報の種類 / 有無
 */
export declare type Tsunamitype = "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning" | "MajorWarning";
/**
 * Scale
 */
export declare type Scale = "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70";
export declare type HypocenterFormat = {
    name: string;
    latitude: number | -200;
    longitude: number | -200;
    depth: number | 0 | -1;
    magnitude: number | -1;
};
export declare type UserQuakeArray = {
    id: number;
    peer: number;
};
export declare type Areapeers = {
    _id: string;
    areas: Array<UserQuakeArray>;
    code: 555;
    create_at: string;
    expire: string;
    hop: number;
    time: string;
    uid: string;
    ver: string;
};
