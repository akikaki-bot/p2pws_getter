/**
 * 
 * libで使うClassたち。
 * 
 * 
 * 
 */
export namespace P2PClientClasses {
    /**
     * @class
     * EEWDetectionに肉付けをするのクラス。
     */
    export class EEW {
      _id: string
      code: 554
      time: string
      type: string[]
      constructor(data: EEWDetection) {
        this._id = data._id
        this.code = data.code
        this.time = data.time
        this.type = data.type
      }
    }
    //Todo JSDocを書く
    export class Data_OLD {
      _id: string
      code: number
      time: string
      issue: {
        source: string
        time: string
        type: Typeofinfo
        correct: Infoonly
      }
      earthquake: {
        time: string
        hypocenter: HypocenterFormat
        maxScale: Scale
        domesticTsunami: Tsunamitype
        forginTsunami: Forgintsunami
      }
      points: Array <PointFormat> 
      constructor(data: Data) {
        this._id = data._id
        this.code = data.code
        this.issue = data.issue
        this.earthquake = data.earthquake
        this.points = data.points
      }
    }
    export class Areapeers_OLD {
      _id: string
      areas: Array <UserQuakeArray>
      code: 555
      create_at: string
      expire: string
      hop: number
      time: string
      uid: string
      ver: string
      constructor(data: Areapeers) {
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

    export class Tsunami {
      _id: string
      code : 552
      time: string;
      cancelled: boolean
      issue : TsunamiIssues
      areas : TsunamiAreas[];
      constructor(data : TsunamiWarning) {
        this._id = data._id
        this.areas = data.areas
        this.code = data.code
        this.cancelled = data.cancelled
        this.issue = data.issue
        this.areas = data.areas
      }
    }
  }

export type TsunamiWarning = {
   _id: string;
   code : 552
   time: string;
   cancelled: boolean;
   issue : TsunamiIssues
   areas : TsunamiAreas[]
}

export type TsunamiIssues = {
   source: string;
   time : string;
   /** Tip: 予報のみ */
   type : string;
}

export type TsunamiAreas = {
   grade : TsunamiTypes;
   immediate : boolean;
   name : string
}

export type TsunamiTypes = "MajorWarning"
| "Warning"
| "Watch"
| "Unknown"

/**
 * @type Data {object} 
 * 
 * 地震情報の際に送られてくるJSONの型。
 * いろいろと複雑。
 * 
 * 
 * typeとかcorrectとかdomesticTsunamiにある"ScalePrompt"とかの謎の英語の解説は別紙の
 * example/lang.mdにないよ。
 */
export type Data = {
    _id:string
    code: 551
    time: string
    issue:{
        source: string
        time :string
        type : Typeofinfo
        correct: Infoonly
    }
    earthquake:{
        time: string
        hypocenter: HypocenterFormat
        maxScale: Scale
        domesticTsunami: Tsunamitype
        forginTsunami: Forgintsunami
    }
    points: Array<PointFormat>
}

/**
 * @type EEWDetection
 * 
 * EEWの生データ。
 * 
 */
export type EEWDetection = { 
    _id: string
    code: 554
    time: string
    type: string[]
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
        scale: Scale
    }

/**
 * ・Typeofinfo
 * 
 * @description
 * type of information
 * 
 * 流れてくる情報の種類。
 */
export type Typeofinfo = "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale" | "Foreign" | "Other" 
/**
 * ・Infoonly
 * 
 * @description
 * 
 * 情報に入っている情報（？）
 */
export type Infoonly = "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination"
/**
 * Forgintsunami
 * 
 * @description
 * 
 * 海外の津波情報
 */
export type Forgintsunami = "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential"
/**
 * Tsunamitype
 * 
 * @description
 * 
 * 津波警報の種類 / 有無
 */
export type Tsunamitype = "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning" | "MajorWarning"
/**
 * Scale
 */
export type Scale = "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70" 

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



