//IMAGES
let home;
let lobby;
let closetWindow;
let gravestone;
let upstairsHallway;
let upOrDownstairs;
let basement;
let bedroom;

//FONTS
let horror;
let assassin;

//SOUNDS
let spooky;


//BOOLEANS
let onhomescreen;
let onhomescreencounter=0;
let onlobbyscene=false;
let onstairscene=false;
let onbasementscene1=false;
let onbasementscene2=false;
let onbasementscene3=false;
let onbasementscene5=false;
let onupstairsscene=false;
let onroomscene=false;
let oncoffinscene1=false;
let onclosetwindowscene=false;
let ongravestonescene=false;
let onclosetscene1=false;
let ondangerclosetscene=false;
let onstuckinclosetscene=false;
let onshakingdoorscene=false;
let onstuckinclosetscene2=false;

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

    //FONTS
    montserrat = loadFont('Fonts/Montserrat.ttf');
    horror = loadFont('Fonts/Horror.ttf');

    //SOUNDS
    soundFormats('mp3');
    spooky = loadSound('Sounds/spooky.mp3');
}

function setup(){
    createCanvas(1280,720);
    background(0);
    homescreen();
}

function draw(){
    
}

function mousePressed(){
    if (onhomescreen==true && onhomescreencounter==0){
        spooky.stop();
        spooky.setVolume(0.25);
        spooky.loop(); 
    }
}

function keyPressed(){
    if (key === '1' && onhomescreen == true){ 
        onhomescreen=false;
        onhomescreencounter=1;
        spooky.stop();
        lobbyscene();
    } else if (key === '1' && onlobbyscene == true){ //FOLLOW THE NOISE
        onlobbyscene=false;
        stairwell();
    } else if (key === '1' && onstairscene == true){ //GO DOWN TO THE BASEMENT
        onstairscene=false;
        basementscene1();
    } else if (key === '1' && onbasementscene1 == true){ //TURN THE LIGHTS ON
        onbasementscene1=false;
        basementscene2();
    } else if (key === '1' && onbasementscene2 == true){ //SPIDERS-DO NOTHING
        onbasementscene2=false;
        basementscene3();
    } else if (key === '1' && onbasementscene5 == true){ //DOG-RUN AWAY
        onbasementscene5=false;
        basementscene6();
    } else if (key === '1' && onupstairsscene== true){ //ENTER THE ROOM
        onupstairsscene=false;
        roomscene();
    } else if (key === '1' && onroomscene== true){ //SAY BOO
        onupstairsscene=false;
        boo();
    } else if (key === '1' && oncoffinscene1== true){ //VAMPIRE - DO NOTHING
        oncoffinscene1=false;
        coffinscene2();
    } else if (key === '1' && ongravestonescene== true){ //GRAVESTONE-RUN AWAY
        ongravestonescene=false;
        runaway();
    } else if (key === '1' && onclosetwindowscene== true){ //USE WINDOW
        onclosetwindowscene=false;
        gravestonescene();
    } else if (key === '1' && onclosetscene1== true){ //MOVE IN THE CLOSET
        onclosetscene1=false;
        dangercloset();
    } else if (key === '1' && ondangerclosetscene== true){ //FIGHT BACK
        ondangerclosetscene=false;
        fightback();
    } else if (key === '1' && onstuckinclosetscene== true){ //TRY TO SHAKE THE DOOR
        onstuckinclosetscene=false;
        shakingdoor();
    } else if (key === '1' && onshakingdoorscene== true){ //DOOR IS STUCK
        onshakingdoorscene=false;
        stuckincloset();

        textFont(montserrat);
        textSize(20);
        fill(0);
        text("THE DOOR WON'T BUDGE.",450,150);
    } 


    

    if (key === '2' && onbasementscene2 ==true){ //SPIDERS-SCREAM
        onbasementscene2=false;
        basementscene4();
    } else if (key === '2' && onbasementscene1 == true){ //KEEP THE LIGHTS OFF
        onbasementscene1=false;
        basementscene5();
    } else if (key === '2' && onbasementscene5 == true){ //DOG-POKE
        onbasementscene5=false;
        basementscene7();
    } else if (key === '2' && onstairscene == true){ //GO UPSTAIRS
        onstairscene=false;
        upstairsscene();
    } else if (key === '2' && onroomscene== true){ //THROW SOMETHING
        onupstairsscene=false;
        thrown();
    } else if (key === '2' && onupstairsscene== true){ //APPROACH THE COFFIN
        onupstairsscene=false;
        coffinscene1();
    } else if (key === '2' && oncoffinscene1== true){ //VAMPIRE - OPEN COFFIN
        oncoffinscene1=false;
        coffinscene3();
    } else if (key === '2' && onlobbyscene== true){ //RUN AWAY FROM SOUND
        onlobbyscene=false;
        closetwindowscene();
    } else if (key === '2' && ongravestonescene== true){ //GRAVESTONE - HIT HAND
        ongravestonescene=false;
        whack();
    } else if (key === '2' && onclosetwindowscene== true){ //HIDE IN CLOSET
        onclosetwindowscene=false;
        inthecloset();
    } else if (key === '2' && ondangerclosetscene== true){ //DONT MOVE IN CLOSET AGAIN
        ondangerclosetscene=false;
        dontmove();
    } else if (key === '2' && onclosetscene1== true){ //DONT MOVE AT ALL IN CLOSET 
        onclosetscene1=false;
        stuckincloset();
    } else if (key === '2' && onstuckinclosetscene== true){ //USE PHONE TO CALL FOR HELP
        onstuckinclosetscene=false;
        firefighter();
    }
   } 