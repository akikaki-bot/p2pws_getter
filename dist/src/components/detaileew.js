"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailEEW = void 0;
/**
 *
    緊急地震速報（警報）の内容です。ただし、以下の点に留意してください。

    内容や配信品質は無保証です。緊急地震速報（警報）としての利活用は非推奨です。
    - 多くの項目は[気象庁防災情報XMLフォーマット ｜ 技術資料の定義](https://xml.kishou.go.jp/tec_material.html)そのままです。
    - 地震の規模や予測震度なども提供しますが、緊急地震速報（警報）では発表されない内容です（参考：[気象庁｜緊急地震速報｜緊急地震速報（警報）及び（予報）について](https://www.data.jma.go.jp/svd/eew/data/nc/shikumi/shousai.html)）。
    - スキーマは今後拡張する可能性があります。

    遅延や欠落のリスクは以下の通りです。
    - 処理遅延: WebSocket API は約 70ms 、 JSON API は約 1000 ms （高負荷時はさらに遅延します）
    - サーバ所在地: 東京 (Linode Tokyo 2)
    - 欠落リスク: サーバや受信プログラムは冗長化しておらず、障害時は配信できず、復旧時の再配信もありません
 */
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
