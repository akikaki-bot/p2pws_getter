import { TsunamiAreas, TsunamiIssues, TsunamiWarning } from "../types";
export declare class Tsunami {
    _id: string;
    code: 552;
    time: string;
    cancelled: boolean;
    issue: TsunamiIssues;
    areas: TsunamiAreas[];
    constructor(data: TsunamiWarning);
}
