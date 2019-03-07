class MainScreen extends Phaser.Scene {

    constructor(){
        super({ key : 'MainScreen'});
    }

    preload ()
    {
        this.load.image('title', 'assets/img/title.png');
        this.load.image('footer', 'assets/img/footer.png');
        this.load.image('bg', 'assets/img/background.png');
        this.load.image('bgSoal', 'assets/img/bg-soal.png');
        this.load.image('btnYa', 'assets/img/btn-ya.png');
        this.load.image('btnTidak', 'assets/img/btn-tidak.png');

        this.load.image('count10', 'assets/img/10.png');
        this.load.image('count9', 'assets/img/9.png');
        this.load.image('count8', 'assets/img/8.png');
        this.load.image('count7', 'assets/img/7.png');
        this.load.image('count6', 'assets/img/6.png');
        this.load.image('count5', 'assets/img/5.png');
        this.load.image('count4', 'assets/img/4.png');
        this.load.image('count3', 'assets/img/3.png');
        this.load.image('count2', 'assets/img/2.png');
        this.load.image('count1', 'assets/img/1.png');
        this.load.image('count0', 'assets/img/0.png');
    }

    create(){

        timeEvent = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, repeat: countdown + 1 });
        this.add.image(config.width/2, config.height/2, 'bg');
        this.add.image(config.width/2, config.height - 100 ,'footer');

        this.add.image(config.width/2, config.height/2 - 50, 'bgSoal');

        // soalText = this.add.text(config.width/2 - 250, config.height/2, 'Phaser Text With Tint', { fontSize: '32px', fill: '#fff' });
        soalText = this.make.text({
            x: config.width/2,
            y: config.height/2 - 100,
            text: 'Contoh Soal',
            origin: { x: 0.5, y: 0.5 },
            style: {
                font: 'bold 25px Arial',
                fill: '#fff',
                wordWrap: { width: 500 }
            }
        });

        btnYa = this.add.image(config.width/2 + 150, config.height/2 + 80, 'btnYa')
        .setInteractive()
        .on('pointerover',  () => this.overButton(btnYa))
        .on('pointerout',  () => this.outButton(btnYa))
        .on('pointerup', () => this.jawabSoal(1));

        btnTidak = this.add.image(config.width/2 - 150, config.height/2 + 80, 'btnTidak')
        .setInteractive()
        .on('pointerover', () => this.overButton(btnTidak))
        .on('pointerout', () => this.outButton(btnTidak))
        .on('pointerup', () => this.jawabSoal(0));
        this.randomSoal();

        text = this.add.text(32, 32);
    }

    update(){
        text.setText('Event.repeatCount: ' + timeEvent.repeatCount);
    }

    jawabSoal(jawaban) {
        if(soal.length > 0 || currentSoal != "")
        {
            if(jawaban == currentSoal.jawaban){
                console.log("Jawaban Benar");
                answerSoal.push(currentSoal);
            }
            else {
                console.log("Jawaban Salah");
                unanswerSoal.push(currentSoal);
            }

            currentSoal = "";
            countdown = 5;
            timeEvent.repeatCount  = countdown + 1;
            this.randomSoal();
            console.log(soal.length);
            console.log(soal);
        }
        else{
            console.log("Soal Habis");
        }
    }

    overButton(btn){
        btn.setAlpha(0.2);
    }

    outButton(btn){
        btn.setAlpha(1);
    }

    randomSoal(){
        if(soal.length > 0){
            let index = 0;
            index = Math.floor(Math.random()*soal.length);
            currentSoal = soal[index];
            soal.splice(index, 1);

            soalText.setText(currentSoal.soal);
        }
        else
        {
            this.scene.start("EndScreen");
        }
    }

    onEvent(){
        if(countImage != "")
            countImage.destroy();
        if(timeEvent.repeatCount == 1){
            unanswerSoal.push(currentSoal);
            console.log("waktu Habis");
            timeEvent.repeatCount = countdown;
            this.randomSoal();
        } else {

        }
        countImage = this.add.image(150, config.height/2, "count"+(timeEvent.repeatCount-1));
    }
}