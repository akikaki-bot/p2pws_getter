"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Areapeers = void 0;
var Areapeers = /** @class */ (function () {
    function Areapeers(data) {
        this._id = data._id;
        this.areas = data.areas;
        this.create_at = data.create_at;
        this.expire = data.expire;
        this.hop = data.hop;
        this.time = data.time;
        this.uid = data.uid;
        this.ver = data.ver;
    }
    return Areapeers;
}());
exports.Areapeers = Areapeers;
