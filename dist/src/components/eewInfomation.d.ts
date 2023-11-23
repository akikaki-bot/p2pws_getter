import { JMAQuake, Points, QuakeDetail, QuakeIssues } from "../types/jmaquake";
export declare class EEWInfomation implements JMAQuake {
    _id: string;
    code: 551;
    time: string;
    issue: QuakeIssues;
    earthquake: QuakeDetail;
    points: Points[];
    constructor(data: EEWInfomation);
}
