import { UserQuakeArray } from "../types"

export class Areapeers {
    code: 555
    _id: string
    areas: Array<UserQuakeArray>
    create_at: string
    expire: string
    hop: number
    time: string
    uid: string
    ver: string
    constructor(data: Areapeers) {
        this._id = data._id
        this.areas = data.areas
        this.create_at = data.create_at
        this.expire = data.expire
        this.hop = data.hop
        this.time = data.time
        this.uid = data.uid
        this.ver = data.ver
    }
}