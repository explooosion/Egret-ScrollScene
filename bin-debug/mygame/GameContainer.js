var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var mygame;
(function (mygame) {
    var GameContainer = (function (_super) {
        __extends(GameContainer, _super);
        function GameContainer() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        GameContainer.prototype.onAddToStage = function (event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        };
        GameContainer.prototype.createGameScene = function () {
            this.bg = new mygame.BgMap();
            this.addChild(this.bg);
            // 背景開始滾動
            this.bg.start();
        };
        return GameContainer;
    }(egret.DisplayObjectContainer));
    mygame.GameContainer = GameContainer;
    __reflect(GameContainer.prototype, "mygame.GameContainer");
})(mygame || (mygame = {}));
//# sourceMappingURL=GameContainer.js.map