module mygame {
    export class BgMap extends egret.DisplayObjectContainer {

        // 存放由圖片合併而成的大圖(底片
        private bmpArr: egret.Bitmap[];

        // 圖片數量
        private rowCount: number;

        // 容器寬
        private stageW: number;

        // 容器高
        private stageH: number;

        // 圖片來源寬
        private textureWidth: number;

        // 場景移動速度
        private speed: number = 10;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        private onAddToStage(event: egret.Event) {

            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.stageW = this.stage.stageWidth;
            this.stageH = this.stage.stageHeight;
            var texture: egret.Texture = RES.getRes("bg_jpg");

            this.textureWidth = texture.textureWidth;

            // 計算當前容器(或螢幕), 需要多少張圖片才能填滿
            this.rowCount = Math.ceil(this.stageW / this.textureWidth) + 1;
            this.bmpArr = [];

            // 將圖片並列在一起
            for (var i: number = 0; i < this.rowCount; i++) {
                var bgBmp: egret.Bitmap = mygame.createBitmapByName("bg_jpg");
                bgBmp.x = this.textureWidth * i;
                console.log(bgBmp.x);
                this.bmpArr.push(bgBmp);
                this.addChild(bgBmp);
            }
        }

        /**
         * 開始滾動
         */
        public start(): void {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
            this.addEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }

        /**
         * 滾動 - ENTER_FRAME
         */
        private enterFrameHandler(event: egret.Event) {

            for (var i: number = 0; i < this.rowCount; i++) {

                if (this.bmpArr[i].x <= -1 * this.textureWidth) {

                    var bgBmp: egret.Bitmap = this.bmpArr[i];
                    bgBmp.x = this.bmpArr[this.rowCount - 1].x + this.textureWidth;

                    this.bmpArr.shift();
                    this.bmpArr.push(bgBmp);

                    // 處理位置跳格問題
                    this.bmpArr.forEach(bmp => {
                        bmp.x += this.speed;
                    });

                }
                this.bmpArr[i].x -= this.speed;
            }
        }

        /**
         * 暫停滾動
         */
        public pause(): void {
            this.removeEventListener(egret.Event.ENTER_FRAME, this.enterFrameHandler, this);
        }

    }
}