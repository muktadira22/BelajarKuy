class SmakzieScreen extends Phaser.Scene {

	constructor(){
		super({ key: "SmakzieScreen" });
	}

	preload(){
		this.load.image('smakzie-bg', 'assets/img/sekolah/bg.jpg');
        this.load.image('content-bg', 'assets/img/bg-soal.png');


		this.load.image('smakzie-logo', 'assets/img/sekolah/logo.png');
        // API REQUEST
        // this.load.json("api_prov","http://118.98.228.38/_edutech/index.php/provinsi?nama=jawa");
        // this.load.json("api_kab","http://118.98.228.38/_edutech/index.php/kabupaten?povinsi_id=12&nama=cianjur");
        // this.load.json("api_sch","http://118.98.228.38/_edutech/index.php/sekolah?kabupaten_id=149&jenjang=smk&npsn=20203872");

        this.load.json("api_prov","assets/json/api_provinsi.json");
        this.load.json("api_kab","assets/json/api_kabupaten.json");
        this.load.json("api_sch","assets/json/api_sekolah.json");

        this.load.image('btnKembali', 'assets/img/btnKembali.png');
	}

	create(){

		this.add.image(config.width/2, config.height/2, 'smakzie-bg').setScale(3);
		this.add.image(config.width/2, config.height/2, 'content-bg').setScale(1.5);
		this.add.image(config.width/2 - 200, config.height/2, 'smakzie-logo').setScale(0.2);

		var api_prov = this.cache.json.get('api_prov').data[0];
		var api_kab = this.cache.json.get('api_kab').data[0];
		var api_sch = this.cache.json.get('api_sch').data[0];

		this.add.text(config.width/2, config.height/2 - 200, "NPSN", {font: '25px Arial', fill: '#fff',});
		this.add.text(config.width/2, config.height/2 - 170, api_sch.npsn, {font: 'bold 30px Arial', fill: '#fff',});

		this.add.text(config.width/2, config.height/2 - 120, "Nama Sekolah", {font: '25px Arial', fill: '#fff',});
		this.add.text(config.width/2, config.height/2 - 90, api_sch.nama, {font: 'bold 30px Arial', fill: '#fff',});

		this.add.text(config.width/2, config.height/2 - 40, "Kabupaten", {font: '25px Arial', fill: '#fff',});
		this.add.text(config.width/2, config.height/2 - 10, api_kab.nama, {font: 'bold 30px Arial', fill: '#fff',});

		this.add.text(config.width/2, config.height/2 + 40, "Provinsi", {font: '25px Arial', fill: '#fff',});
		this.add.text(config.width/2, config.height/2 + 70, api_prov.nama, {font: 'bold 30px Arial', fill: '#fff',});

		var btnKembali = this.add.image(config.width/2 + 120, config.height/2 + 200, 'btnKembali')
		.setScale(0.8)
		.setInteractive()
        .on('pointerover', () => this.hoverButton(btnKembali, true))
        .on('pointerout', () => this.hoverButton(btnKembali, false))
        .on('pointerup', function(){
        	this.scene.start('TitleScreen');
        }, this);
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