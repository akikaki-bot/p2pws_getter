"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfomationResolve = void 0;
var InfomationResolve = /** @class */ (function () {
    function InfomationResolve(data) {
        this.code = data.code;
    }
    InfomationResolve.prototype.isEEWInfomation = function () {
        return this.code === 551;
    };
    InfomationResolve.prototype.isAreapeers = function () {
        return this.code === 555;
    };
    InfomationResolve.prototype.isDetailEEW = function () {
        return this.code === 556;
    };
    InfomationResolve.prototype.isEEW = function () {
        return this.code === 554;
    };
    InfomationResolve.prototype.isTsunami = function () {
        return this.code === 552;
    };
    return InfomationResolve;
}());
exports.InfomationResolve = InfomationResolve;
