function homescreen(){

    image(home, 0, 0);
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
    // onlobbyscene = true;
    fill(255);

    textFont(montserrat);
    textSize(20);
    text('FOLLOW THE SOUND [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('RUN AWAY FROM THE SOUND [2]',850,400);
}

function stairwell(){ //decide to follow the noise
    image(upOrDownstairs,0,0);
    // onstairscene=true;
    fill(255);

    textFont(montserrat);
    textSize(20);
    text('FOLLOW THE SOUND INTO THE BASEMENT [1]',550,550);

    textFont(montserrat);
    textSize(20);
    text('GO UPSTAIRS [2]',200,250);
}

function basementscene1(){ //lights are off
    background(0);
    // onbasementscene1 = true;
}

function basementscene2(){ //decide to turn on the lights
    image(basement,0,0);
    // onbasementscene2=true;
    fill(255);
    animation(spider,200,550);
    animation(spider,300,500);
    animation(spider,400,550);
    animation(spider,550,500);
    animation(spider,650,510);
    animation(spider,800,600);
    animation(spider,1000,680);

        

    textFont(montserrat);
    textSize(20);
    text('DO NOTHING [1]',80,350);
    text('YIKES, SPIDERS!',580,100);

    textFont(montserrat);
    textSize(20);
    text('SCREAM [2]',900,350);
}

function basementscene3(){ //decide to do nothing - ENDING 1 (SPIDER DANCE PARTY)
    image(basement,0,0);
    animation(spider,200,550);
    animation(spider,300,500);
    animation(spider,400,550);
    animation(spider,550,500);
    animation(spider,650,510);
    animation(spider,800,600);
    animation(spider,1000,680);
    animation(disco,640,360)
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('THE SPIDERS ARE HAVING A...DANCE PARTY?',400,350);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}

function basementscene4(){ //decide to scream - ENDING 2 (EXTERMINATOR)
    image(basement,0,0);
    animation(spider,s+200,550);
    animation(spider,s+300,500);
    animation(spider,s+400,550);
    animation(spider,s+550,500);
    animation(spider,s+650,510);
    animation(spider,s+800,600);
    animation(spider,s+1000,680);
    animation(exterminator,640,360);
    textFont(montserrat);
    fill(255);
    textSize(20);
    text("THAT'S AN EXTERMINATOR...IS THIS REALLY A HAUNTED HOUSE?",400,350);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}

function basementscene5(){//decide to leave the lights off
    tint(255,30);
    image(redeyes,0,0);
    // onbasementscene5=true;
    fill(255);

}

function basementscene6(){//decide to do nothing - ENDING 3 (DOG LICKS YOU)
    animation(lick,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('SOMETHING IS...LICKING YOU??',500,350);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);

}

function basementscene7(){ //decide to poke - ENDING 4 (PET THE DOG)
    animation(dogtable,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text("IT'S A CUTE DOG!",530,100);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}

function upstairsscene(){//decide to go upstairs
    image(upstairsHallway,0,0);
    // onupstairsscene=true;
    fill(255);

    textFont(montserrat);
    textSize(20);
    text('ENTER ROOM [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('APPROACH COFFIN [2]',900,350);
}

function roomscene(){//decide to enter the room
    image(bedroom,0,0);
    animation(ghost,1000,500);
    // onroomscene=true;
    fill(255);

    textFont(montserrat);
    textSize(20);
    text('SAY BOO [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('THROW SOMETHING [2]',900,350);
}

function boo(){//decide to say "boo" - ENDING 5 (SCARE THE GHOST)
    animation(deadghost,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('YOU SCARED A GHOST...TO DEATH?',450,350);

    textSize(15);
    fill(0);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);

}

function thrown(){//decide to throw something - ENDING 6 (HIT THE GHOST)
    animation(cry,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('YOU THREW SOMETHING AT THE GHOST...WHICH ENDED UP NOT',320,350);
    text('BEING A GHOST?',570,380)

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",450,700);

}

function coffinscene1(){//decide to approach the coffin
    image(coffinclose,0,0);
    // oncoffinscene1=true;
    
    fill(255);
    textFont(montserrat);
    textSize(20);
    text('DO NOTHING [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('OPEN THE COFFIN [2]',1000,350);

}

function coffinscene2(){//decide to do nothing - ENDING 7 (TOMATO)
    image(tomato,0,0);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text("WHATEVER'S INSIDE THE COFFIN SEEMS TO HAVE HEARD YOU...",100,350);
    text("....AND IT'S ASKING FOR TOMATO JUICE!?",200,380);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}

function coffinscene3(){//decide to open the coffin - ENDING 7 (SLEEP)
    animation(sleeping,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text("THE VAMPIRE IS SLEPING... AND MAYBE IT'S A GOOD THING IT'S NOT AWAKE.",250,350);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);

}

function closetwindowscene(){//decide to run away from noise
    image(closetWindow,0,0);
    // onclosetwindowscene = true;
    fill(255);

    textFont(montserrat);
    textSize(20);
    text('ESCAPE USING THE WINDOW[1]',300,350);

    textFont(montserrat);
    textSize(20);
    text('HIDE IN THE CLOSET [2]',1000,350);

}

function gravestonescene(){//decide to use the window
    image(gravestone,0,0);
    animation(zombie,640,360);
    // ongravestonescene = true;
    fill(255);

    textFont(montserrat);
    textSize(20);
    text('YIKES, A ZOMBIE!',560,50);
    text('RUN AWAY[1]',300,350);

    textFont(montserrat);
    textSize(20);
    text('SMACK THE HAND[2]',850,350);

}

function runaway(){ //decide to run away again - ENDING 8 (RUNAWAY)
    animation(run,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('IF YOU WERE JUST GOING TO RUN AWAY THE ENTIRE TIME, WHY DID YOU ENTER IN THE FIRST PLACE?',100,350);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);

}

function whack(){ //decide to smack the hand - ENDING 9 (WHACK-A-HAND)
    image(gravestone,0,0);
    animation(hammer,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('WHAT AN INTERESTING GAME OF WHACK-A-MOLE!',390,130);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);

}

function inthecloset(){//decide to hide in the closet
    image(closetback,0,0);
    animation(ghostbuster,640,360);
    image(closetdoor,0,0);
    // onclosetscene1=true;
   
    fill(255);
    textFont(montserrat);
    textSize(20);
    text('MOVE [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('DONT MOVE [2]',1000,350);

}

function dangercloset(){ //moved in the closet
    image(spotted,0,0);
    // ondangerclosetscene=true;

    textFont(montserrat);
    textSize(20);
    fill(255);
    text("YOU'VE BEEN SPOTTED!",530,50);

    textFont(montserrat);
    textSize(20);
    text('FIGHT[1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('DO NOTHING[2]',1000,350);
}

function fightback(){//decide to fight - ENDING 10 (BLOODY NOSE)
    animation (bleed,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('YOU DEFENDED YOURSELF...FROM A GHOSTBUSTER.',380,350);
    textSize(15);
    text('[NOW HE HAS A BLOODY NOSE. OOPS!]',490,380);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}

function dontmove(){//decide to do nothing again - ENDING 11 (NOT A GHOST)
    animation(question,640,360);
    textFont(montserrat);
    textSize(20);
    fill(255);
    text('A GHOSTBUSTER HAS PULLED YOU OUT OF THE CLOSET, CONFUSED',310,350);
    textSize(15);
    text("'HEY WAIT, YOU'RE NOT A GHOST...?'",520,380);

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}


function stuckincloset(){//didn't move in the closet
    image(closetback,0,0);
    image(closetdoor,0,0);
    // onstuckinclosetscene=true;
    textFont(montserrat);
    textSize(40);
    fill(255);
    text('[STUCK IN CLOSET]',400,350);

    textFont(montserrat);
    textSize(20);
    text('TRY TO SHAKE THE DOOR [1]',80,350);

    textFont(montserrat);
    textSize(20);
    text('USE YOUR PHONE TO CALL FOR HELP[2]',850,350);

}

function shakingdoor(){//decided to shake the door
    image(closetback,0,0);
    image(closetdoor,0,0);
    // onshakingdoorscene=true;
    textFont(montserrat);
    textSize(40);
    fill(255);
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

    textSize(15);
    text("[YOU'VE REACHED AN ENDING. REFRESH TO RESTART.]",420,700);
}

