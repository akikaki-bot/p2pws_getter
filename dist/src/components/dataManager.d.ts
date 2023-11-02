import { InfomationResolveType } from "../types";
export declare class DataManager<T extends DataManagerResolveDatas> extends Map<string, T> {
    private APIURL;
    constructor();
    resolve(config: DataManagerResolveConfig): Promise<InfomationResolveType>;
    private __fetchFromId;
}
export type DataManagerResolveDatas = InfomationResolveType;
export type DataManagerResolveConfig = string | {
    id: string;
};
