"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tsunami = void 0;
var Tsunami = /** @class */ (function () {
    function Tsunami(data) {
        this._id = data._id;
        this.areas = data.areas;
        this.code = data.code;
        this.cancelled = data.cancelled;
        this.issue = data.issue;
        this.areas = data.areas;
    }
    return Tsunami;
}());
exports.Tsunami = Tsunami;
