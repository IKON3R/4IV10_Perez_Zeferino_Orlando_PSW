const Phaser = require('../src/phaser.min.js');

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{ y: 300},
            debug: false
        }
    },
    scene:{
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload(){
    this.load.image('sky', 'assets/FondoJuego.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('dude', 'assets/dude.png', {frameWidth: 32, frameHeigth: 48});
}

function create(){
    this.add.image(400, 300, 'sky');

    platforms = this.physics.add.staticGroup();

    plataforms.create(400, 568, 'ground').setScale(2).refreshBody();
    plataforms.create(400, 600, 'ground');
    plataforms.create(50, 250, 'ground');
    plataforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(100, 450, 'dude');

    player.setCollideWorldBounds(true);
    player.setBounce(0.2);

    this.anims.create({
        key: 'left',
        frame: this.anims.generateFrameNumbers('dude',{start: 0, end: 3}),
        frameRete:10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frame: [ { key: 'dude', frame: 4} ],
        frameRete:10,
    });

    this.anims.create({
        key: 'right',
        frame: this.anims.generateFrameNumbers('dude',{start: 5, end: 8}),
        frameRete:10,
        repeat: -1
    });

    player.body.setGravityY();
}

function update(){


}

return(preload);
return(create);
return(update);
