const w = 800;
const h = 450;

const config = {
    type: Phaser.AUTO,
    width: w,
    height: h,
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 700
            },
            debug: true
        },
    },
    scene: [ gameStart, gamePlay ]
}
const game = new Phaser.Game(config);