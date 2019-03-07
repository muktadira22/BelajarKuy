class PustekomScreen extends Phaser.Scene {

	constructor(){
		super({ key : "PustekomScreen"});
	}

	preload(){
        this.load.image('pustekom-logo', 'assets/img/pustekom/pustekom.png');
		this.load.image('pustekom-bg', 'assets/img/pustekom/bg.jpg');

		// produk produk pustekom
		this.load.image('jardiknas-logo', 'assets/img/pustekom/jardiknas.png');
		this.load.image('bse-logo', 'assets/img/pustekom/BSE.png');
		this.load.image('medukasi-logo', 'assets/img/pustekom/medukasi.png');
		this.load.image('radiojogja-logo', 'assets/img/pustekom/radiojogja.png');
		this.load.image('rumahbelajar-logo', 'assets/img/pustekom/rumahbelajar.png');
		this.load.image('suaraedukasi-logo', 'assets/img/pustekom/suaraEdukasi.gif');
		this.load.image('tvedukasi-logo', 'assets/img/pustekom/tvedukasi.png');
		this.load.image('vidbelajar-logo', 'assets/img/pustekom/vidbelajar.png');
		this.load.image('solmet-logo', 'assets/img/pustekom/solmet.png');

		//
        this.load.image('btnKembali', 'assets/img/btnKembali.png');
	}

	create(){
		this.add.image(config.width/2, config.height/2, 'pustekom-bg').setScale(2);

		// PUSTEKOM LOGO
		var pustekomLogo = this.add.image(config.width/2, 60, 'pustekom-logo')
		.setScale(0.4)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(pustekomLogo, true))
        .on('pointerout', () => this.hoverButton(pustekomLogo, false))
		.on('pointerup', () => this.openExternalLink("pustekom"), this);

		// JARDIKNAS LOGO
		var jardiknasLogo = this.add.image(config.width/2 - 200, 200, 'jardiknas-logo')
		.setScale(0.5)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(jardiknasLogo, true))
        .on('pointerout', () => this.hoverButton(jardiknasLogo, false))
		.on('pointerup', () => this.openExternalLink("jardiknas"), this);

		// RUMAH BELAJAR LOGO
		var rumahbelajarLogo = this.add.image(config.width/2 + 200, 200, 'rumahbelajar-logo')
		.setScale(1)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(rumahbelajarLogo, true))
        .on('pointerout', () => this.hoverButton(rumahbelajarLogo, false))
		.on('pointerup', () => this.openExternalLink("rumahbelajar"), this);

		// TELEVISI EDUKASI LOGO
		var tvedukasiLogo = this.add.image(config.width/2 - 200, 300, 'tvedukasi-logo')
		.setScale(0.8)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(tvedukasiLogo, true))
        .on('pointerout', () => this.hoverButton(tvedukasiLogo, false))
		.on('pointerup', () => this.openExternalLink("tvedukasi"), this);

		// VIDEO PEMBELAJARAN
		var vidbelajarLogo = this.add.image(config.width/2 + 200, 300, 'vidbelajar-logo')
		.setScale(0.8)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(vidbelajarLogo, true))
        .on('pointerout', () => this.hoverButton(vidbelajarLogo, false))
		.on('pointerup', () => this.openExternalLink("vidbelajar"), this);

		// RADIO SUARA EDUKASI
		var suaraedukasiLogo = this.add.image(config.width/2 - 200, 400, 'suaraedukasi-logo')
		.setScale(1)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(suaraedukasiLogo, true))
        .on('pointerout', () => this.hoverButton(suaraedukasiLogo, false))
		.on('pointerup', () => this.openExternalLink("suaraedukasi"), this);

		// RADIO EDUKASI YOGYAKARTA
		var radiojogjaLogo = this.add.image(config.width/2 + 200, 400, 'radiojogja-logo')
		.setScale(0.6)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(radiojogjaLogo, true))
        .on('pointerout', () => this.hoverButton(radiojogjaLogo, false))
		.on('pointerup', () => this.openExternalLink("radiojogja"), this);

		// MOBILE EDUKASI
		var medukasiLogo = this.add.image(config.width/2 - 200, 500, 'medukasi-logo')
		.setScale(1)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(medukasiLogo, true))
        .on('pointerout', () => this.hoverButton(medukasiLogo, false))
		.on('pointerup', () => this.openExternalLink("medukasi"), this);

		// BSE
		var bseLogo = this.add.image(config.width/2 + 200, 500, 'bse-logo')
		.setScale(0.6)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(bseLogo, true))
        .on('pointerout', () => this.hoverButton(bseLogo, false))
		.on('pointerup', () => this.openExternalLink("bse"), this);

		// SELI
		var seliLogo = this.make.text({
            x: config.width/2 - 200,
            y: 600,
            text: 'SELI',
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'Comic sans ms',
                fontSize: '40px',
                fontStyle: 'bold',
            }
        })
        .setInteractive({ useHandCursor: true })
        .on('pointerover', () => this.hoverButton(seliLogo, true))
        .on('pointerout', () => this.hoverButton(seliLogo, false))
		.on('pointerup', () => this.openExternalLink("seli"), this);;

		// solmet
		var solmetLogo = this.add.image(config.width/2 + 200, 600, 'solmet-logo')
		.setScale(0.5)
		.setInteractive({ useHandCursor: true })
		.on('pointerover', () => this.hoverButton(solmetLogo, true))
        .on('pointerout', () => this.hoverButton(solmetLogo, false))
		.on('pointerup', () => this.openExternalLink("solmet"), this);


		this.make.text({
            x: config.width/2,
            y: 120,
            text: 'Produk Produk PUSTEKOM',
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'Comic sans ms',
                fontSize: '30px'
            }
        });

        var btnKembali = this.add.image(config.width/2, config.height - 50, 'btnKembali')
        .setScale(0.8)
        .setInteractive()
        .on('pointerover', () => this.hoverButton(btnKembali, true))
        .on('pointerout', () => this.hoverButton(btnKembali, false))
        .on('pointerup', function(){
        	this.scene.start('TitleScreen');
        }, this);
	}

 	openExternalLink(links)
	{
	    var url = "";
		switch(links)
		{
			case "pustekom": url = 'https://pustekkom.kemdikbud.go.id/';
			break;
			case "jardiknas": url = "http://jardiknas.kemdikbud.go.id/";
			break;
			case "rumahbelajar": url = 'https://belajar.kemdikbud.go.id/Dashboard/';
			break;
			case "tvedukasi": url = "https://tve.kemdikbud.go.id/";
			break;
			case "vidbelajar": url = 'http://video.kemdikbud.go.id/';
			break;
			case "suaraedukasi": url = "http://suaraedukasi.kemdikbud.go.id/";
			break;
			case "radiojogja": url = 'http://radioedukasi.kemdikbud.go.id/';
			break;
			case "medukasi": url = "https://m-edukasi.kemdikbud.go.id/medukasi/";
			break;
			case "bse": url = "http://bse.kemdikbud.go.id/";
			break;
			case "seli": url = "https://seli.kemdikbud.go.id/";
			break;
			case "solmet": url = "http://solmet.kemdikbud.go.id/";
			break;
		}

	    var s = window.open(url, '_blank');

	    if (s && s.focus)
	    {
	        s.focus();
	    }
	    else if (!s)
	    {
	        window.location.href = url;
	    }
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