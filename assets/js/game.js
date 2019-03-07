var soalText;
var bg;
var footer;
var time = 15;
var soal = []; 
var currentSoal = {};
var unanswerSoal = [];
var answerSoal = [];

var btnYa;
var btnTidak;

var countdown = 5;
var countImage = "";

var timeEvent;
var text;
var config = {
    type: Phaser.AUTO,
    width: 1366,
    height: 768,
    parent: 'phaser-example',
    scene: [
      TitleScreen,
      MainScreen,
      EndScreen,
      PustekomScreen,
      SmakzieScreen,
    ]
};

var game = new Phaser.Game(config);

