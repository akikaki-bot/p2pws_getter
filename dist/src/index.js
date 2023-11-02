"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailEEW = exports.Tsunami = exports.EEW = exports.Areapeers = exports.EEWInfomation = exports.Client = void 0;
var events_1 = require("events");
var ws_1 = require("ws");
var components_1 = require("./components");
Object.defineProperty(exports, "EEWInfomation", { enumerable: true, get: function () { return components_1.EEWInfomation; } });
Object.defineProperty(exports, "Areapeers", { enumerable: true, get: function () { return components_1.Areapeers; } });
Object.defineProperty(exports, "EEW", { enumerable: true, get: function () { return components_1.EEW; } });
Object.defineProperty(exports, "Tsunami", { enumerable: true, get: function () { return components_1.Tsunami; } });
Object.defineProperty(exports, "DetailEEW", { enumerable: true, get: function () { return components_1.DetailEEW; } });
/**
 * ## Client
 *
 * P2P地震情報 非公式データマネージャー＆ウェブソケットパッケージ
 *
 * @example
 *
 * const client = new Client();
 *
 * client.on('ready' , () => {
 * 	  console.log('Manager ready!')
 * })
 *
 * client.cache.resolve('id') // -> return something code data or null
 *
 * @author あきかき
 *
 * 　今対応している情報は以下の通りです。
 *
 *　 ・551(通常地震情報)
 *
 * 　・552(津波情報)
 *
 * 　・554(緊急地震速報 - 情報のみ)
 *
 * 　・556(緊急地震速報 - 詳細)
 *
 * 　・555(ペア情報)
 *
 * 〉型参考元
 *
 * [p2pquake.net/jsonapi_v2](https://www.p2pquake.net/json_api_v2/#/)
 *
 * 〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉
 *
 * このクラスは EventEmitter を継承しています。
 *
 * 〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉〉
 *
 */
var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        var _this = _super.call(this) || this;
        _this.cache = new components_1.DataManager();
        _this.run();
        return _this;
    }
    Client.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ws;
            var _this = this;
            return __generator(this, function (_a) {
                ws = new ws_1.WebSocket("wss://api.p2pquake.net/v2/ws");
                /**
                 *
                 * Readyされたときに発火するやつ
                 */
                ws.onopen = function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.emit('ready', function () { });
                        return [2 /*return*/];
                    });
                }); };
                /**
                 *
                 * @param {ErrorEvent} error
                 * エラーが起きたときに発火するイベント。このウェブソケット安定しすぎてエラー出ない。
                 */
                ws.onerror = function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.emit('error', new Error(error.message ? error.message : "不明なエラー"));
                        return [2 /*return*/];
                    });
                }); };
                /**
                 * p2pサーバーからなにかきたら発火する関数。
                 *
                 * @param {MessageEvent} data どれかの型のデータが入ってる生データ なかみはjson。
                 *
                 */
                ws.onmessage = function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var datas;
                    return __generator(this, function (_a) {
                        datas = JSON.parse(data.data.toString());
                        if (datas.code === 551) {
                            this.emit('earthquake', new components_1.EEWInfomation(datas));
                            this.cache.set(datas._id, new components_1.EEWInfomation(datas));
                        }
                        if (datas.code === 555) {
                            this.emit('areapeers', new components_1.Areapeers(datas));
                            this.cache.set(datas._id, new components_1.Areapeers(datas));
                        }
                        if (datas.code === 556) {
                            this.emit('eew', new components_1.DetailEEW(data));
                            this.cache.set(datas._id, new components_1.DetailEEW(datas));
                        }
                        if (datas.code === 554) {
                            this.emit('eewdetection', new components_1.EEW(datas));
                            this.cache.set(datas._id, new components_1.EEW(datas));
                        }
                        if (datas.code === 552) {
                            this.emit('tsunamiwarning', new components_1.Tsunami(datas));
                            this.cache.set(datas._id, new components_1.Tsunami(datas));
                        }
                        return [2 /*return*/];
                    });
                }); };
                return [2 /*return*/];
            });
        });
    };
    return Client;
}(events_1.EventEmitter));
exports.Client = Client;
