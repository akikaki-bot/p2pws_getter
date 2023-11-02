export const enum EEWKindCode {
    /** 主要動未到達 */
     SecondaryUnReached = "10",
     /** 主要動到達済 */
     SecondaryReached = "11",
     /**主要動の到達予想なし（PLUM法による予想）*/
     SecondaryReachedNoForecastinPLUM = "19"
}

export interface IEEWArea {
    pref: string,
    name: string,
    scaleFrom: number,
    scaleTo: number
    kindCode: EEWKindCode
    arrivalTime: string
}

export class DetailEEW {
    _id: string
    code: 556
    time: string
    test: boolean
    earthquake: {
        originTime: string
        arrivalTime: string
        condition: string
        hypocenter: {
            name: string
            reduceName: string
            latitude: number | -200
            longitude: number | -200
            depth: number | -1
            magunitude: number | -1
        }
    }
    issue: {
        time: string
        eventId: string
        serial: string
    }
    cancelled: boolean
    areas: Array<IEEWArea>

    constructor(data: DetailEEW) {
        this._id = data._id
        this.time = data.time
        this.test = data.test
        this.earthquake = data.earthquake
        this.issue = data.issue
        this.cancelled = data.cancelled
        this.areas = data.areas
    }
}