class EndScreen extends Phaser.Scene {

	constructor() {
		super({key: "EndScreen"});
	}

	preload(){

		this.load.image('mini-title', 'assets/img/loading-title.png');
        this.load.image('footer', 'assets/img/footer.png');
        this.load.image('btnStart', 'assets/img/btnMulai.png');
        this.load.image('bg', 'assets/img/background.png');
        this.load.image('bgSoal', 'assets/img/bg-soal.png');

        this.load.image('btnMainLagi', 'assets/img/btnLagi.png');
        this.load.image('btnKembali', 'assets/img/btnKembali.png');
	}

	create(){
		this.add.image(config.width/2, config.height/2, 'bg');
        this.add.image(config.width/2, config.height - 100 ,'footer');
        this.add.image(config.width/2, config.height - 400 ,'bgSoal').setScale(1.5);
        this.add.image(config.width/2,80, 'mini-title').setScale(0.7);

		this.make.text({
            x: config.width/2,
            y: config.height/2 - 200,
            text: 'Jumlah Betul',
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'Comic sans ms',
                fontSize: '50px'
            }
        });

		this.make.text({
            x: config.width/2,
            y: config.height/2 - 130,
            text: '['+answerSoal.length+'/'+(answerSoal.length + unanswerSoal.length)+']',
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'Comic sans ms',
                fontSize: '50px'
            }
        });

        var ket = this.make.text({
            x: config.width/2,
            y: config.height/2 + 100,
            text: 'Waw Keren Betul Semua:D',
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'Comic sans ms',
                fontSize: '30px'
            }
        });
        var jumlah = answerSoal.length + unanswerSoal.length;
        if(answerSoal.length == jumlah){
        	ket.setText("Waw Keren Betul Semua:D..");
        } else if(answerSoal.length >= (jumlah/2) && answerSoal.length < jumlah){
        	ket.setText("Kamu Sudah Betul Setengahnya,\nAyo Tingkatkan Lagi Belajarnya...");
        } else if(answerSoal.length <= (jumlah/2)){
        	ket.setText("Ayo Belajar lagi tentang budaya indonesia nya....");
        }

        var btnKembali = this.add.image(config.width/2, config.height - 150, 'btnKembali')
        .setInteractive()
        .on('pointerover', () => this.hoverButton(btnKembali, true))
        .on('pointerout', () => this.hoverButton(btnKembali, false))
        .on('pointerup', function(){
        	this.scene.start('TitleScreen');
        }, this);
        this.resetArray();
	}

	resetArray(){
		console.log(answerSoal);
		console.log(unanswerSoal);
		soal = answerSoal.concat(unanswerSoal);
        answerSoal = [];
        unanswerSoal = [];
        console.log(soal);
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