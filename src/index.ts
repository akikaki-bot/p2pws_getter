import { EventEmitter } from "events";
import { WebSocket } from "ws"

export class P2PWSClient extends EventEmitter {
     constructor(){ super() }
     async run(){
       const ws = new WebSocket("wss://api.p2pquake.net/v2/ws")

        if(ws.readyState === 0){
            this.emit('ready')
        }

        ws.onerror = async (error) => {
           this.emit('error', new Error(error))
        }
       
        ws.onmessage = async (data) => {
            const datas = JSON.parse(data.data.toString()) as Data | Areapeers | EEWDetection

           if(
            datas.code === 551
            ){

           this.emit('earthquake', new Data_OLD(datas))

           }

           if(
            datas.code === 555
            ){

           this.emit('areapeers', new Areapeers_OLD(datas))

           }


           if(
            datas.code === 554
           ){

           this.emit('eewdetection', new EEW(datas))

           }


        }
     }
}

export declare interface P2PWSClient {
    on(event :'earthquake', listener:(data: Data) => void): this
    on(event :'ready', listener: () => void): this
    on(event :'error', listener: (error: Error) => void): this
    on(event :'areapeers', listener: (data: Areapeers) => void): this
    on(event :'eewdetection', listener: (data: EEWDetection) => void): void
}

export type EEWDetection = { 
    _id: string
    code: 554
    time: string
    type: string[]
}

export class EEW {
    _id: string
    code: 554
    time: string
    type: string[]

    constructor(data: EEWDetection){
        this._id = data._id
        this.code = data.code
        this.time = data.time
        this.type = data.type
    }
}

export type Data = {
    _id:string
    code: 551
    time: string
    issue:{
        source: string
        time :string
        type : "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale " | " Foreign " | "Other" 
        correct: "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination"
    }
    earthquake:{
        time: string
        hypocenter: HypocenterFormat
        maxScale: "-1" | "10" | "20" | "30" | "40" | "45" | "50" | "55" | "60" | "70"
        domesticTsunami: "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning"
        forginTsunami: "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential"
    }
    points: Array<PointFormat>
}

export class Data_OLD {
    _id:string
    code: number
    time: string
    issue:{
        source: string
        time :string
        type : "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale " | " Foreign " | "Other" 
        correct: "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination"
    }
    earthquake:{
        time: string
        hypocenter: HypocenterFormat
        maxScale: "-1" | "10" | "20" | "30" | "40" | "45" | "50" | "55" | "60" | "70"
        domesticTsunami: "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning"
        forginTsunami: "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential"
    }
    points: Array<PointFormat>

    constructor (data: Data) {
       this._id = data._id
       this.code = data.code
       this.issue = data.issue
       this.earthquake = data.earthquake
       this.points = data.points
    }
}

export class Areapeers_OLD {
    _id : string
    areas: Array<UserQuakeArray>

    code: 555
    create_at: string
    expire: string
    hop: number
    time: string
    uid: string
    ver : string
    constructor(data: Areapeers){
        this._id = data._id
        this.areas = data.areas
        this.code = data.code
        this.create_at = data.create_at
        this.expire = data.expire
        this.hop = data.hop
        this.time = data.time
        this.uid = data.uid
        this.ver = data.ver
    }
}

type Userquake = {
    _id: string
    areas: Array<UserQuakeArray>
    code: number
    time: string;
}

 

export type PointFormat = 
    {
        pref: string
        addr: string
        isArea: boolean
        scale: "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70" 
    }

export type HypocenterFormat = {
    name: string
    latitude:number | -200
    longitude: number | -200
    depth:number | 0 | -1
    magnitude:number | -1
}

export type UserQuakeArray = { id: number, peer: number}

export type Areapeers = {
    _id : string
    areas: Array<UserQuakeArray>

    code: 555
    create_at: string
    expire: string
    hop: number
    time: string
    uid: string
    ver : string
    
}




