import { TsunamiAreas, TsunamiIssues, TsunamiWarning } from "../types";

export class Tsunami {
    _id: string
    code: 552
    time: string;
    cancelled: boolean
    issue: TsunamiIssues
    areas: TsunamiAreas[];
    constructor(data: TsunamiWarning) {
        this._id = data._id
        this.areas = data.areas
        this.code = data.code
        this.cancelled = data.cancelled
        this.issue = data.issue
        this.areas = data.areas
    }
}