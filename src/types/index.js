"use strict";
exports.__esModule = true;
exports.P2PClientClasses = void 0;
/**
 *
 * libで使うClassたち。
 *
 *
 *
 */
var P2PClientClasses;
(function (P2PClientClasses) {
    /**
     * @class
     * EEWDetectionに肉付けをするのクラス。
     */
    var EEW = /** @class */ (function () {
        function EEW(data) {
            this._id = data._id;
            this.code = data.code;
            this.time = data.time;
            this.type = data.type;
        }
        return EEW;
    }());
    P2PClientClasses.EEW = EEW;
    //Todo JSDocを書く
    var Data_OLD = /** @class */ (function () {
        function Data_OLD(data) {
            this._id = data._id;
            this.code = data.code;
            this.issue = data.issue;
            this.earthquake = data.earthquake;
            this.points = data.points;
        }
        return Data_OLD;
    }());
    P2PClientClasses.Data_OLD = Data_OLD;
    var Areapeers_OLD = /** @class */ (function () {
        function Areapeers_OLD(data) {
            this._id = data._id;
            this.areas = data.areas;
            this.code = data.code;
            this.create_at = data.create_at;
            this.expire = data.expire;
            this.hop = data.hop;
            this.time = data.time;
            this.uid = data.uid;
            this.ver = data.ver;
        }
        return Areapeers_OLD;
    }());
    P2PClientClasses.Areapeers_OLD = Areapeers_OLD;
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
    P2PClientClasses.Tsunami = Tsunami;
})(P2PClientClasses = exports.P2PClientClasses || (exports.P2PClientClasses = {}));
