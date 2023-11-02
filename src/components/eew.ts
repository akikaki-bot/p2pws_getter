
export interface IEEWDetection {
    _id: string
    code: 554
    time: string
    type: string[]
}

export class EEW implements IEEWDetection {
    _id: string
    code: 554
    time: string
    type: string[]
    constructor(data: IEEWDetection) {
        this._id = data._id
        this.time = data.time
        this.type = data.type
    }
}