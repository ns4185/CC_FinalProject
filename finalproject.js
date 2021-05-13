let screennumber=0; //this variable lets the computer know which screen it's on so that it draws the appropriate scene in the draw loop - in an earlier ->
//version I was having trouble with animations since I kept the functions outside of the draw loop, so this variable solves that problemm.

let s=0; //spiders running away

//IMAGES
let home;
let lobby;
let closetWindow;
let gravestone;
let upstairsHallway;
let upOrDownstairs;
let basement;
let bedroom;
let redeyes;
let coffinclose;
let closetdoor;
let closetback;
let tomato;
let spotted;
let phone;

//SPRITES
let ghostbuster;
let spider;
let exterminator;
let disco;
let deadghost;
let cry;
let ghost;
let sleeping;
let bleed;
let dogtable;
let lick;
let question;
let zombie;
let run;
let hammer;

//FONTS
let horror;
let assassin;

//SOUNDS
let spooky;
let basementsteps;
let leftsteps;
let spiderscare;
let dance;
let licksound;
let ghostsound;
let boosound;
let door;
let snoring;
let growl;
let panting;
let ow;
let faststeps;


function preload(){
    //IMAGES
    home = loadImage('images/homescreen.png');
    lobby = loadImage('images/lobby.png');
    closetWindow = loadImage('images/closetwindow.png');
    gravestone = loadImage('images/gravestone.png');
    upstairsHallway = loadImage('images/upstairs.png');
    upOrDownstairs = loadImage('images/upordownstairs.png');
    basement = loadImage('images/basement.png');
    bedroom = loadImage('images/bedroom.png');
    redeyes = loadImage('images/redeyes.png');
    coffinclose= loadImage('images/coffinclose.png');
    closetdoor = loadImage('images/closetdoor.png');
    closetback = loadImage('images/closetback.png');
    tomato = loadImage('images/tomato.png');
    spotted = loadImage('images/spotted.png');
    phone = loadImage('images/phone.png');

    //SPRITES
    spider = loadAnimation('sprites/spider1.png','sprites/spider2.png','sprites/spider3.png','sprites/spider4.png','sprites/spider5.png');
    exterminator = loadAnimation('sprites/exterminator1.png', 'sprites/exterminator2.png', 'sprites/exterminator3.png', 'sprites/exterminator4.png');
    ghostbuster = loadAnimation('sprites/ghostbuster1.png','sprites/ghostbuster2.png','sprites/ghostbuster3.png','sprites/ghostbuster4.png','sprites/ghostbuster5.png','sprites/ghostbuster6.png','sprites/ghostbuster7.png','sprites/ghostbuster8.png');
    disco = loadAnimation('sprites/disco1.png', 'sprites/disco2.png', 'sprites/disco3.png');
    deadghost = loadAnimation('sprites/boo1.png','sprites/boo2.png','sprites/boo3.png');
    cry = loadAnimation('sprites/cry1.png', 'sprites/cry2.png', 'sprites/cry3.png');
    ghost = loadAnimation('sprites/ghost1.png','sprites/ghost2.png','sprites/ghost3.png');
    sleeping = loadAnimation('sprites/sleeping1.png', 'sprites/sleeping2.png', 'sprites/sleeping3.png');
    dogtable = loadAnimation('sprites/dogtable1.png','sprites/dogtable2.png','sprites/dogtable3.png','sprites/dogtable4.png');
    lick = loadAnimation('sprites/lick1.png','sprites/lick2.png','sprites/lick3.png','sprites/lick4.png','sprites/lick5.png');
    bleed = loadAnimation('sprites/bleed1.png', 'sprites/bleed2.png','sprites/bleed3.png')
    question = loadAnimation('sprites/question1.png','sprites/question2.png');
    zombie = loadAnimation('sprites/zombie1.png','sprites/zombie2.png');
    run = loadAnimation('sprites/run1.png','sprites/run2.png');
    hammer = loadAnimation('sprites/hammer1.png','sprites/hammer2.png');

    //FONTS
    montserrat = loadFont('Fonts/Montserrat.ttf');
    horror = loadFont('Fonts/Horror.ttf');

    //SOUNDS
    soundFormats('mp3');
    spooky = loadSound('Sounds/spooky.mp3');
    leftsteps = loadSound('Sounds/leftfootsteps.mp3');
    basementsteps = loadSound('Sounds/basementsteps.mp3');
    spiderscare = loadSound('Sounds/spiderscare.mp3');
    dance = loadSound('Sounds/dance.mp3');
    licksound = loadSound('Sounds/lick.mp3');
    ghostsound = loadSound('Sounds/ghost.mp3');
    boosound = loadSound('Sounds/boo.mp3');
    door = loadSound('Sounds/door.mp3');
    snoring = loadSound('Sounds/snoring.mp3');
    scream = loadSound('Sounds/scream.mp3');
    growl = loadSound('Sounds/growl.mp3');
    panting = loadSound('Sounds/panting.mp3');
    ow = loadSound('Sounds/ow.mp3');
    faststeps = loadSound('Sounds/faststeps.mp3');
}

function setup(){
    createCanvas(1280,720);
    background(0);
    frameRate(25);
}

function draw(){
    if (screennumber==0){
        homescreen();


    } else if (screennumber==1){
        lobbyscene();
        print('1');

    } else if (screennumber==2){
        stairwell();
        print('2');

    } else if (screennumber==3){
        basementscene1();
        print('3');
        fill(255);
        textFont(montserrat);
        textSize(20);
        text('TURN ON THE LIGHTS [1]',80,350);
    
        textFont(montserrat);
        textSize(20);
        text('KEEP THE LIGHTS OFF [2]',850,350);

    } else if (screennumber==4){
        basementscene2();
        print('4');

    } else if (screennumber==5){
        basementscene3();
        print('5');

    } else if (screennumber==6){
        basementscene6();
        print('6');

    } else if (screennumber==7){
        roomscene();
        print('7');

    } else if (screennumber==8){
        boo();
        print('8');

    } else if (screennumber==9){
        coffinscene2();
        print('9');

    } else if (screennumber==10){
        runaway();
        print('10');

    } else if (screennumber==11){
        gravestonescene();
        print('11');

    } else if (screennumber==12){
        dangercloset();
        print('12');

    } else if (screennumber==13){
        fightback();
        print('13');

    } else if (screennumber==14){
        shakingdoor();
        print('14');

    } else if (screennumber==15){
        stuckincloset();
        textFont(montserrat);
        textSize(20);
        fill(255);
        text("THE DOOR WON'T BUDGE.",520,150);
        print('15');

    } else if (screennumber==16){
        basementscene4();
        s=s+10;
        print('16');

    } else if (screennumber==17){
      
        basementscene5();
        print('17');

        fill(255);
        textFont(montserrat);
        textSize(20);
        text('DO NOTHING[1]',80,350);
    
        textFont(montserrat);
        textSize(20);
        text('POKE IT! [2]',1100,350);

    } else if (screennumber==18){
        basementscene7();
        print('18');

    } else if (screennumber==19){
        upstairsscene();
        print('19');

    } else if (screennumber==20){
        print('20');
        thrown();
       

    } else if (screennumber==21){
        print('21');
        coffinscene1();
       

    } else if (screennumber==22){
        print('22');
        coffinscene3();
        

    } else if (screennumber==23){
        print('23');
        closetwindowscene();
        

    } else if (screennumber==24){
        whack();
        print('24');

    } else if (screennumber==25){
        inthecloset();
        print('25');

    } else if (screennumber==26){
        dontmove();
        print('26');

    } else if (screennumber==27){
        stuckincloset();
        print('27');

    } else if (screennumber==28){
        firefighter();
        print('28');

    }
    
}

function mousePressed(){
    if (screennumber==0){
        spooky.stop();
        spooky.setVolume(0.25);
        spooky.loop(); 
    }
}

function keyPressed(){
    if (key === '1' && screennumber==0){ 
        spooky.stop();
        screennumber=1;
        print(screennumber,"1");
        leftsteps.setVolume(0.25);
        leftsteps.loop();

    }
    else if (key === '1' && screennumber==1){ //FOLLOW THE NOISE
        screennumber=2;
        print(screennumber,"2");
        leftsteps.stop();
        basementsteps.setVolume(0.25);
        basementsteps.play();

    }
    else if (key === '1' && screennumber==2){ //GO DOWN TO THE BASEMENT
        screennumber=3;
        print(screennumber,"3");

    }
    else if (key === '1' && screennumber==3){ //TURN THE LIGHTS ON
        screennumber=4;
        print(screennumber,"4");
        spiderscare.setVolume(0.25);
        spiderscare.play();

    }
    else if (key === '1' && screennumber==4){ //SPIDERS-DO NOTHING
        screennumber=5;
        print(screennumber, "5");
        dance.setVolume(0.25);
        dance.loop();

    }
    else if (key === '1' && screennumber==17){ //DOG-DO NOTHING
        screennumber=6;
        print(screennumber), "6";
        licksound.setVolume(0.25);
        licksound.loop();

    }
   else if (key === '1' && screennumber==19){ //ENTER THE ROOM
        screennumber=7;
        print(screennumber, "7");
        ghostsound.setVolume(0.25);
        ghostsound.play();

    }
   else  if (key === '1' && screennumber==7){ //SAY BOO
        screennumber=8;
        print(screennumber, "8");
        boosound.setVolume(0.25);
        boosound.play();

    }
   else  if (key === '1' && screennumber==21){ //VAMPIRE - DO NOTHING
        screennumber=9;
        print(screennumber, "9");
        door.setVolume(0.25);
        door.play();

    }
   else if (key === '1' && screennumber==11){ //GRAVESTONE-RUN AWAY
        screennumber=10;
        print(screennumber, "10");

    }
   else if (key === '1' && screennumber==23){ //USE WINDOW
        screennumber=11;
        print(screennumber, "11");
        faststeps.stop();


    }
   else if (key === '1' && screennumber==25){ //MOVE IN THE CLOSET
        screennumber=12;
        print(screennumber, "12");
        spiderscare.setVolume(0.25);
        spiderscare.play();

    }
   else  if (key === '1' && screennumber==12){ //FIGHT BACK
        screennumber=13;
        print(screennumber, "13");
        ow.setVolume(0.25);
        ow.play();

    }
   else  if (key === '1' && screennumber==27){ //TRY TO SHAKE THE DOOR
        screennumber=14;
        print(screennumber,"14");

    }
   else if (key === '1' && screennumber==14){ //DOOR IS STUCK
        screennumber=15;
        print(screennumber, "15");

    } 
    else if (key === '1' && screennumber==15){ //DOOR IS STUCK
        screennumber=14;
        print(screennumber, "14");

    } 


    

   else if (key === '2' && screennumber==4){ //SPIDERS-SCREAM
        screennumber=16;
        print(screennumber, "16");
        scream.setVolume(0.25);
        scream.play();

    } 
   else if (key === '2' && screennumber==3){ //KEEP THE LIGHTS OFF
        screennumber=17;
        print(screennumber, "17");
        growl.setVolume(0.25);
        growl.play();

    }
   else if (key === '2' && screennumber==17){ //DOG-POKE
        screennumber=18;
        print(screennumber), "18";
        panting.setVolume(0.25);
        panting.loop();

    }
    else if (key === '2' && screennumber==2){ //GO UPSTAIRS
        screennumber=19;
        print(screennumber, "19");

    }
   else if (key === '2' && screennumber==7){ //THROW SOMETHING
        screennumber=20;
        print(screennumber,"20");
        ow.setVolume(0.25);
        ow.play();

    }
   else if (key === '2' && screennumber==19){ //APPROACH THE COFFIN
        screennumber=21;
        print(screennumber,"21");

    }
   else if (key === '2' && screennumber==21){ //VAMPIRE - OPEN COFFIN
        screennumber=22;
        print(screennumber,"22");
        snoring.setVolume(0.25);
        snoring.loop();

    }
     else if (key === '2' && screennumber==1){ //RUN AWAY FROM SOUND
        screennumber=23;
        print(screennumber,"23");
        leftsteps.stop();
        faststeps.setVolume();
        faststeps.loop();


    }
    else if (key === '2' && screennumber==11){ //GRAVESTONE - HIT HAND
        screennumber=24;
        print(screennumber,"24");

    } 
    else if (key === '2' && screennumber==23){ //HIDE IN CLOSET
        screennumber=25;
        print(screennumber,"25");
        faststeps.stop();


    }
    else if (key === '2' && screennumber==12){ //DONT MOVE IN CLOSET AGAIN
        screennumber=26;
        print(screennumber,"26");

    }
    else if (key === '2' && screennumber==25){ //DONT MOVE AT ALL IN CLOSET 
        screennumber=27;
        print(screennumber,"27");

    }
    else if (key === '2' && screennumber==27){ //USE PHONE TO CALL FOR HELP
        screennumber=28;
        print(screennumber,"28");

    }
    else if (key === '2' && screennumber==15){ //DOOR IS STUCK
        screennumber=28;
        print(screennumber, "28");

    } 
   } 