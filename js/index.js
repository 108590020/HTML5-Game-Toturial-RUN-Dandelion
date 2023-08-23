const gameStart = {
    key: 'gameStart',
    preload: function(){
        // 載入資源
    },
    create: function(){
        // 資源載入完成，加入遊戲物件及相關設定
    },
    update: function(){
        // 遊戲狀態更新
    }
}
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 450,
    parent: 'app',
    scene: []
}
const game = new Phaser.Game(config);