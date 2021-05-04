function homescreen(){
    image(home, 0, 0);
    onhomescreen=true;

    fill(255);
    textFont(horror);
    textSize(100);
    text('House of',30,300);
    text('Horrors',80,400);


    textFont(montserrat);
    textSize(10);
    text('A SHORT INTERACTIVE NARRATIVE',80,450);

    textSize(8);
    text('[CLICK TO ENABLE SOUND]',115,470); //for some reason the audio wouldn't play when I put the play command into setup, so I made it so that the user manually starts the music

    textFont(montserrat);
    textSize(20);
    text('PRESS 1 TO START',1000,350);
}

function lobbyscene(){ //entered the house
    image(lobby, 0, 0);
    onlobbyscene = true;

    textFont(montserrat);
    textSize(20);
    text('FOLLOW THE SOUND [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('RUN AWAY FROM THE SOUND [2]',850,400);
}

function stairwell(){ //decide to follow the noise
    image(upOrDownstairs,0,0);
    onstairscene=true;

    textFont(montserrat);
    textSize(20);
    text('FOLLOW THE SOUND INTO THE BASEMENT [1]',550,550);

    textFont(montserrat);
    textSize(20);
    text('GO UPSTAIRS [2]',200,250);
}

function basementscene1(){ //lights are off
    background(0);
    onbasementscene1 = true;

    textFont(montserrat);
    textSize(20);
    text('TURN ON THE LIGHTS [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('KEEP THE LIGHTS OFF [2]',850,350);
}

function basementscene2(){ //decide to turn on the lights
    image(basement,0,0);
    onbasementscene2=true;

    textFont(montserrat);
    textSize(20);
    text('DO NOTHING [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('SCREAM [2]',900,350);
}

function basementscene3(){ //decide to do nothing - ENDING 1 (SPIDER DANCE PARTY)
    background(255); //PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - SPIDER RAVE]',400,350);
}

function basementscene4(){ //decide to scream - ENDING 2 (EXTERMINATOR)
    background(255); //PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - EXTERMINATOR]',400,350);
}

function basementscene5(){//decide to leave the lights off
    background(50); //PLACEHOLDER
    onbasementscene5=true;
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[INSERT RED EYES HERE]',400,350);

    textFont(montserrat);
    textSize(20);
    text('RUN AWAY [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('POKE IT! [2]',1100,350);
}

function basementscene6(){//decide to run away - ENDING 3 (DOG JUMPS ON YOU)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - DOG JUMPS ON YOU]',400,350);

}

function basementscene7(){ //decide to poke - ENDING 4 (PET THE DOG)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - PETTING THE DOG]',400,350);
}

function upstairsscene(){//decide to go upstairs
    image(upstairsHallway,0,0);
    onupstairsscene=true;

    textFont(montserrat);
    textSize(20);
    text('ENTER ROOM [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('APPROACH COFFIN [2]',900,350);
}

function roomscene(){//decide to enter the room
    image(bedroom,0,0);
    onroomscene=true;

    textFont(montserrat);
    textSize(20);
    text('SAY BOO [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('THROW SOMETHING [2]',900,350);
}

function boo(){//decide to say "boo" - ENDING 5 (SCARE THE GHOST)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - SCARE THE GHOST]',400,350);

}

function thrown(){//decide to throw something - ENDING 6 (HIT THE GHOST)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - HIT THE GHOST]',400,350);

}

function coffinscene1(){//decide to approach the coffin
    background(50); //PLACEHOLDER
    oncoffinscene1=true;
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[INSERT CLOSE-UP OF COFFIN]',300,350);

    textFont(montserrat);
    textSize(20);
    text('DO NOTHING [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('OPEN THE COFFIN [2]',1000,350);

}

function coffinscene2(){//decide to do nothing - ENDING 7 (SUNLIGHT)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - SUNLIGHT + VAMPIRE]',400,350);

}

function coffinscene3(){//decide to open the coffin - ENDING 7 (TOMATO JUICE)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - TOMATO JUICE + VAMPIRE]',400,350);

}

function closetwindowscene(){//decide to run away from noise
    image(closetWindow,0,0);
    onclosetwindowscene = true;

    textFont(montserrat);
    textSize(20);
    text('ESCAPE USING THE WINDOW[1]',300,350);

    textFont(montserrat);
    textSize(20);
    text('HIDE IN THE CLOSET [2]',1000,350);

}

function gravestonescene(){//decide to use the window
    image(gravestone,0,0);
    ongravestonescene = true;

    textFont(montserrat);
    textSize(20);
    text('RUN AWAY[1]',300,350);

    textFont(montserrat);
    textSize(20);
    text('SMACK THE HAND[2]',850,350);

}

function runaway(){ //decide to run away again - ENDING 8 (RUNAWAY)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - RUNAWAY]',400,350);

}

function whack(){ //decide to smack the hand - ENDING 9 (WHACK-A-HAND)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - WHACK-A-HAND]',400,350);

}

function inthecloset(){//decide to hide in the closet
    background(50); //PLACEHOLDER
    onclosetscene1=true;
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[INSERT HIDING IN CLOSET]',300,350);

    textFont(montserrat);
    textSize(20);
    text('MOVE [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('DONT MOVE [2]',1000,350);

}

function dangercloset(){ //moved in the closet
    background(50); //PLACEHOLDER
    ondangerclosetscene=true;
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[INSERT FIGURE MOVING CLOSER]',250,350);

    textFont(montserrat);
    textSize(20);
    text('FIGHT[1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('DO NOTHING[2]',1000,350);
}

function fightback(){//decide to fight - ENDING 10 (BLOODY NOSE)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - BLOODY NOSE]',400,350);
}

function dontmove(){//decide to do nothing again - ENDING 11 (NOT A GHOST)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - NOT A GHOST]',400,350);
}


function stuckincloset(){//didn't move in the closet
    background(50); //PLACEHOLDER
    onstuckinclosetscene=true;
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[STUCK IN CLOSET]',400,350);

    textFont(montserrat);
    textSize(20);
    text('TRY TO SHAKE THE DOOR [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('USE YOUR PHONE TO CALL FOR HELP[2]',850,350);

}

function shakingdoor(){//decided to shake the door
    background(50); //PLACEHOLDER
    onshakingdoorscene=true;
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[STUCK IN CLOSET STILL]',600,350);

    textFont(montserrat);
    textSize(20);
    text('TRY TO SHAKE THE DOOR AGAIN[1]',80,350);


}


function firefighter(){//call for help - ENDING 12 (FIREFIGHTER)
    background(255);//PLACEHOLDER
    textFont(montserrat);
    textSize(40);
    fill(0);
    text('[ENDING - FIREFIGHTER]',400,350);
}