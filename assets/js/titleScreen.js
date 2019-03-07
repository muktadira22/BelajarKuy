class TitleScreen extends Phaser.Scene{

    constructor(){
        super({ key : 'TitleScreen'});
    }

    preload()
    {
        this.loadProgress();
        this.load.json('soal', 'http://localhost:8000/soal');
        this.load.image('title', 'assets/img/title.png');
        this.load.image('footer', 'assets/img/footer.png');
        this.load.image('btnStart', 'assets/img/btnMulai.png');
        this.load.image('bg', 'assets/img/background.png');
        // this.load.audio('title_music', 'assets/audio/main.wav');

        // PUSTEKOM LOAD
        this.load.image('pustekom-logo', 'assets/img/pustekom/pustekom.png');

        // SMAKZIE LOGO
        this.load.image('smakzie-logo', 'assets/img/sekolah/logo.png');
    }

    create(){
        // this.sound.play('title_music');
        if(soal.length == 0)
            soal = this.cache.json.get('soal').soal;

        console.log(soal);
        this.add.image(config.width/2, config.height/2, 'bg');
        this.add.image(config.width/2,300, 'title');
        this.add.image(config.width/2, config.height - 100 ,'footer');

        var button = this.add.image(config.width/2 + 200, 500, 'btnStart').setInteractive();

        var btnPus = this.add.image(200, 80, 'pustekom-logo')
        .setScale(0.5)
        .setInteractive()
        .on('pointerover', () => this.hoverButton(btnPus, true))
        .on('pointerout', () => this.hoverButton(btnPus, false))
        .on('pointerup', function(){
            this.scene.start('PustekomScreen');
        }, this);


        var btnSmakzie = this.add.image(config.width - 80, 80, 'smakzie-logo')
        .setScale(0.05)
        .setInteractive()
        .on('pointerover', () => this.hoverButton(btnSmakzie, true))
        .on('pointerout', () => this.hoverButton(btnSmakzie, false))
        .on('pointerup', function(){
            this.scene.start('SmakzieScreen');
        }, this);

        // Event 
        button.on('pointerover', function(event, gameObject) {
            // gameObject[0].setTint(0xff0000);
            button.setAlpha(0.2);
        });

        button.on('pointerout', function(event, gameObject){
            // gameObject[0].clearTint();
            button.setAlpha(1);
        });

        button.on('pointerup', function(){
            // this.scene.start('MainScreen');
            this.scene.transition({
                target: 'MainScreen',
                duration: 1000,
                moveBelow: true,
                onUpdate: this.transitionOut,
                data: { x: 400, y: 300 }
            });
        }, this);
    }

    loadProgress(){
        var progress = this.add.graphics();

        this.load.on('progress', function(value){
            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, 270, 1366 * value, 120);
        
        });

        this.load.on('complete', function(){
            progress.destroy();
            console.log(soal);
        });
    }

    hoverButton(btn, method){
        switch(method)
        {
            case true:
                btn.setAlpha(0.2);
            break;
            case false:
                btn.setAlpha(1);
            break;
        }
    }
}