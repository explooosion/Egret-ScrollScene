var mygame;
(function (mygame) {
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    function createBitmapByName(name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    mygame.createBitmapByName = createBitmapByName;
})(mygame || (mygame = {}));
//# sourceMappingURL=GameUtil.js.map