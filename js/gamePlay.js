const gamePlay = {
    key: 'gamePlay',
    preload: function(){
        this.load.image('bg1', '../images/bg/bg1.png');
        this.load.image('bg2', '../images/bg/bg2.png');
        this.load.image('bg3', '../images/bg/bg3.png');
        this.load.image('bg4', '../images/bg/bg4.png');
        this.load.image('footer', '../images/bg/footer.png');
        this.load.spritesheet('user', '../images/player.png', {frameWidth: 144, frameHeight: 120});

        this.timeInt = 30;
        this.speedLv = 1;
        this.gameStop = false;
    },
    create: function(){
        this.bg4 = this.add.tileSprite(w/2, h/2, w, h, 'bg4');
        this.bg3 = this.add.tileSprite(w/2, h/2, w, h, 'bg3');
        this.bg2 = this.add.tileSprite(w/2, h/2, w, h, 'bg2');
        this.bg1 = this.add.tileSprite(w/2, h/2, w, h, 'bg1');
        this.footer = this.add.tileSprite(w/2, 360 + 45, w, 90, 'footer');


        this.physics.add.existing(this.footer);
        // Set the object not to move and fall
        this.footer.body.immovable = true;
        // Whether the object's position and rotation are affected by its velocity, acceleration, drag and gravity
        this.footer.body.moves = false;

        //Set character position and add physical effects
        this.player = this.physics.add.sprite(150, 150, 'user')

        //Set character bounce value
        this.player.setBounce(1);

        //Set character WorldBounds
        this.player.setCollideWorldBounds(true); 

        //Set character display size
        this.player.setScale(0.7);

        //Set character collision bounds
        this.player.setSize(130, 80);

        //Bind objects that need to collide together
        this.physics.add.collider(this.player, this.footer);

        

        //Set animation
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('user', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'speed',
            frames: this.anims.generateFrameNumbers('user', { start: 4, end: 5 }),
            frameRate: 5,
            repeat: -1
        })
        
        this.TimeText = this.add.text(w-180, h-50, `Time: ${this.timeInt}`, { color: '#fff', fontSize: '30px'});
        
        let timer = setInterval(() =>{
            this.timeInt--;
            if(this.timeInt < 20 && this.timeInt > 10){
                this.speedLv += 0.1;
            }
            if(this.timeInt < 10 && this.timeInt > 0){
                this.speedLv = 3;
            }
            this.TimeText.setText(`Time: ${this.timeInt}`);
            if(this.timeInt <= 0){
                this.gameStop = true;
                clearInterval(timer);
            }
        }, 1000)
    },
    update: function(){
        if(this.gameStop) return;
        this.bg3.tilePositionX += 1 * this.speedLv;
        this.bg2.tilePositionX += 2 * this.speedLv;
        this.bg1.tilePositionX += 3 * this.speedLv;
        this.footer.tilePositionX += 3 * this.speedLv;

        const keyboard = this.input.keyboard.createCursorKeys();
        if (keyboard.right.isDown) {
            this.player.anims.play('speed', true);
            this.player.flipX = false;
            this.player.setVelocityX(200);
        }else if (keyboard.left.isDown) {
            this.player.anims.play('speed', true);
            this.player.flipX = true;
            this.player.setVelocityX(-260);
        }else {
            this.player.anims.play('run', true);
            this.player.flipX = false;
            this.player.setVelocityX(0);
        }

    }
}