"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EEWInfomation = void 0;
var EEWInfomation = /** @class */ (function () {
    function EEWInfomation(data) {
        this._id = data._id;
        this.issue = data.issue;
        this.earthquake = data.earthquake;
        this.points = data.points;
    }
    EEWInfomation.prototype.isEEWInfomation = function () {
        return this.code === 551;
    };
    return EEWInfomation;
}());
exports.EEWInfomation = EEWInfomation;
