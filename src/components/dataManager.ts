import { InfomationResolveType, ResolveP2PObject } from "../types"
import { Areapeers } from "./areapeers"
import { DetailEEW } from "./detaileew"
import { EEW } from "./eew"
import { EEWInfomation } from "./eewInfomation"
import { Tsunami } from "./tsunami"




export class DataManager<T extends DataManagerResolveDatas> {

    private APIURL : string
    private internalCache : Map<string , T>

    constructor() {
        this.internalCache = new Map<string,T>()
        this.APIURL = "api.p2pquake.net/v2"
    }

    public set( args : string , data : T ) {
        return this.internalCache.set(args , data)
    }

    public async resolve( config : DataManagerResolveConfig ) {
        if(typeof config === "string") {
            return this.internalCache.get(config) ?? await this.__fetchFromId(config)
        }
        return this.internalCache.get(config.id) ?? await this.__fetchFromId(config.id)
    }

    private async __fetchFromId ( id : string ) : Promise<DataManagerResolveDatas> {
        const response = await fetch(`https://${this.APIURL}/jma/quake/${id}`)
        if(!response.ok) return null;
        const data = await response.json() as InfomationResolveType
        
        switch(data.code) {
            case 551 : return new EEWInfomation(data)
            case 555 : return new Areapeers(data)
            case 556 : return new DetailEEW(data)
            case 554 : return new EEW(data)
            case 552 : return new Tsunami(data)
            default : return null;
        }
    }
}
export type DataManagerResolveDatas = InfomationResolveType
export type DataManagerResolveConfig = string | { id : string }