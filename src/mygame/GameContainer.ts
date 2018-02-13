module mygame {
    export class GameContainer extends egret.DisplayObjectContainer {

        private bg: mygame.BgMap;

        public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
        }

        private onAddToStage(event: egret.Event) {
            this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
            this.createGameScene();
        }

        private createGameScene(): void {
            this.bg = new mygame.BgMap();
            this.addChild(this.bg);

            // 背景開始滾動
            this.bg.start();
        }
    }
}