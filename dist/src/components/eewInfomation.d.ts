import { Forgintsunami, HypocenterFormat, Infoonly, PointFormat, Scale, Tsunamitype, Typeofinfo } from "../types";
export declare class EEWInfomation {
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
    constructor(data: EEWInfomation);
    isEEWInfomation(): this is EEWInfomation;
}
