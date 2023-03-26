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

    export class DetailEEW {
      _id : string
      code : 556
      time : string
      test : boolean
      earthquake : {
        originTime : string
        arrivalTime : string
        condition : string
        hypocenter : {
           name : string
           reduceName : string
           latitude : number | -200
           longitude : number | -200
           depth : number | -1
           magunitude : number | -1
        }
      }
      issue : {
        time : string
        eventId : string
        serial : string
      }
      cancelled : boolean
      areas : Array<EEWArea>

      constructor(data : DetailEEW) {
         this._id = data._id
         this.time = data.time
         this.test = data.test
         this.earthquake = data.earthquake
         this.issue = data.issue
         this.cancelled = data.cancelled
         this.areas = data.areas
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
 * 詳細な緊急地震速報
 */
export type DetailEEW = {
   _id : string
   code : 556
   time : string,
   test : boolean
   earthquake : EEW_Earthquake
   issue : Issue
   cancelled : boolean
   areas : Array<EEWArea>
}

export type EEWArea = {
  pref : string,
  name : string,
  scaleFrom : number,
  scaleTo : number
  kindCode : EEWKindCode
  arrivalTime : string
}

export const enum EEWKindCode {
  /** 主要動未到達 */
   SecondaryUnReached = "10",
   /** 主要動到達済 */
   SecondaryReached = "11",
   /**主要動の到達予想なし（PLUM法による予想）*/
   SecondaryReachedNoForecastinPLUM = "19"
}

export type Issue = {
   time : string,
   eventId : string,
   serial : string,
}

export type EEW_Earthquake = {
    originTime : string,
    arrivalTime : string,
    condition : string,
    hypocenter : EEW_Hypocenter
}

export type EEW_Hypocenter = {
  name : string,
  reduceName : string,
  latitude : number | -200
  longitude : number | -200
  depth : number | -1
  magunitude : number | -1
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



