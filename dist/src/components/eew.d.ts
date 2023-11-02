export interface IEEWDetection {
    _id: string;
    code: 554;
    time: string;
    type: string[];
}
export declare class EEW implements IEEWDetection {
    _id: string;
    code: 554;
    time: string;
    type: string[];
    constructor(data: IEEWDetection);
}
