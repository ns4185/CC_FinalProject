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
    text('[CLICK TO ENABLE SOUND]'); //for some reason the audio wouldn't play when I put the play command into setup, so I made it so that the user manually starts the music

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