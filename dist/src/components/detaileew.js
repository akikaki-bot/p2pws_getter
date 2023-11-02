"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailEEW = void 0;
var DetailEEW = /** @class */ (function () {
    function DetailEEW(data) {
        this._id = data._id;
        this.time = data.time;
        this.test = data.test;
        this.earthquake = data.earthquake;
        this.issue = data.issue;
        this.cancelled = data.cancelled;
        this.areas = data.areas;
    }
    return DetailEEW;
}());
exports.DetailEEW = DetailEEW;
