/// <reference types="node" />
import { EventEmitter } from "events";
export declare class P2PWSClient extends EventEmitter {
    constructor();
    run(): Promise<void>;
}
export declare interface P2PWSClient {
    on(event: 'earthquake', listener: (data: Data) => void): this;
    on(event: 'ready', listener: () => void): this;
    on(event: 'error', listener: (error: Error) => void): this;
    on(event: 'areapeers', listener: (data: Areapeers) => void): this;
    on(event: 'eewdetection', listener: (data: EEWDetection) => void): void;
}
export declare type EEWDetection = {
    _id: string;
    code: 554;
    time: string;
    type: string[];
};
export declare class EEW {
    _id: string;
    code: 554;
    time: string;
    type: string[];
    constructor(data: EEWDetection);
}
export declare type Data = {
    _id: string;
    code: 551;
    time: string;
    issue: {
        source: string;
        time: string;
        type: "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale " | " Foreign " | "Other";
        correct: "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination";
    };
    earthquake: {
        time: string;
        hypocenter: HypocenterFormat;
        maxScale: "-1" | "10" | "20" | "30" | "40" | "45" | "50" | "55" | "60" | "70";
        domesticTsunami: "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning";
        forginTsunami: "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential";
    };
    points: Array<PointFormat>;
};
export declare class Data_OLD {
    _id: string;
    code: number;
    time: string;
    issue: {
        source: string;
        time: string;
        type: "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale " | " Foreign " | "Other";
        correct: "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination";
    };
    earthquake: {
        time: string;
        hypocenter: HypocenterFormat;
        maxScale: "-1" | "10" | "20" | "30" | "40" | "45" | "50" | "55" | "60" | "70";
        domesticTsunami: "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning";
        forginTsunami: "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential";
    };
    points: Array<PointFormat>;
    constructor(data: Data);
}
export declare class Areapeers_OLD {
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
export declare type PointFormat = {
    pref: string;
    addr: string;
    isArea: boolean;
    scale: "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70";
};
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
