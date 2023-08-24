const gameStart = {
    key: 'gameStart',
    preload: function(){
        //this point to Phaser object 
        this.load.image('bg1', '../images/bg/bg1.png');
        this.load.image('bg2', '../images/bg/bg2.png');
        this.load.image('bg3', '../images/bg/bg3.png');
        this.load.image('bg4', '../images/bg/bg4.png');
        this.load.image('footer', '../images/bg/footer.png');

        this.load.spritesheet('user', '../images/player.png', {frameWidth: 144, frameHeight: 120});
    },
    create: function(){
        //The coordinate system direction of the canvas
        //The origin (0, 0) is preset at the upper left corner
        //Angle direction is counterclockwise
        //positive x right y down
        this.bg4 = this.add.tileSprite(w/2, h/2, w, h, 'bg4');
        this.bg3 = this.add.tileSprite(w/2, h/2, w, h, 'bg3');
        this.bg2 = this.add.tileSprite(w/2, h/2, w, h, 'bg2');
        this.bg1 = this.add.tileSprite(w/2, h/2, w, h, 'bg1');
        this.footer = this.add.tileSprite(w/2, 360 + 45, w, 90, 'footer');
    },
    update: function(){
        this.bg3.tilePositionX += 1;
        this.bg2.tilePositionX += 2;
        this.bg1.tilePositionX += 3;
        this.footer.tilePositionX += 3;
    }
}