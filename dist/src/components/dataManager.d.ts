import { InfomationResolveType } from "../types";
export declare class DataManager<T extends DataManagerResolveDatas> {
    private APIURL;
    private internalCache;
    constructor();
    set(args: string, data: T): Map<string, T>;
    resolve(config: DataManagerResolveConfig): Promise<InfomationResolveType>;
    private __fetchFromId;
}
export type DataManagerResolveDatas = InfomationResolveType;
export type DataManagerResolveConfig = string | {
    id: string;
};
