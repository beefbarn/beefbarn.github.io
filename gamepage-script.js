
//if i make a save system, just have it load by assigning a progressor value to resume story.

/*

///GLOBAL VARS
/progressor
/scenicText
/gameText
/scenicInitShutdown
/gameInitShutdown

*/

//initializes the progressor, which controls the story/gameplay by counting each time the Next button is clicked
let progressor = 0;

//text typewriter effect function. call with the html element, text to append
const textTypeEffect = (element, text, i = 0) => {
    element.textContent += text[i];

    if (i === text.length-1) {
        return;
    }

    setTimeout(() => textTypeEffect(element, text, i + 1), 50);
}

//faster text typwriter effect
const fastTypeEffect = (element, text, i = 0) => {
    element.textContent += text[i];

    if (i === text.length-1) {
        return;
    }

    setTimeout(() => fastTypeEffect(element, text, i + 1), 40);
}



const scenicText = document.querySelector("#scenic-text");
const gameText = document.querySelector("#game-text");
let scenicInitShutdown = 1;
let gameInitShutdown = 1;

//initializes the scenic text div and span
const scenicInitiation = () => {
    if (scenicInitShutdown === 1) {
        const scenicWriter = document.querySelector("#scenic-writer");
        fastTypeEffect(scenicWriter, `With the door to your cell open, you see a path to freedom...`);
        scenicInitShutdown = 0
    } else {
        return;
    }
}

//initializes the game text div and span
const gameTextInitiation = () => {
    if (gameInitShutdown === 1) {
        const gameWriter = document.querySelector("#game-writer");
        setTimeout(() => {fastTypeEffect(gameWriter, `You wonder what horrors may lurk these prison halls, but you must take your chance...`)}, 3400)
        gameInitShutdown = 0
    } else {
        return;
    }
}

//spawns a new button that says "[display]" after a [timer]
const spawnNewButton = (timer, display) => {
    const buttonCreation = document.createElement("input");
    buttonCreation.type = "button";
    buttonCreation.value = display;
    buttonCreation.id = "progressor";
    buttonCreation.addEventListener('click', nextClick);
    setTimeout(() => {document.getElementById("new-button").appendChild(buttonCreation);}, timer)
}

//make a function for the "next" button to clear both spans and then count up a progressor of some kind to proceed with the dialogue. then removes the "next" button.
const nextClick = () => {
    const scenicWriter = document.getElementById("scenic-writer");
    const gameWriter = document.getElementById("game-writer");
    gameWriter.textContent = "";
    scenicWriter.textContent = "";
    progressor += 1;
    const buttonCreation = document.getElementById("progressor");
    buttonCreation.remove();
    sceneSelector(progressor);
}

//Selects a scene to play based on the current progressor value.
const sceneSelector = (progressorVal) => {
    if (progressorVal === 1) {
        sceneOne();
    } else if (progressorVal === 2) {
        sceneTwo();
    } else if (progressorVal === 3) {
        sceneThree();
    }
}

//SCENE ONE:
const sceneOne = () => {
    const scenicWriter = document.getElementById("scenic-writer");
    const gameWriter = document.getElementById("game-writer");
    fastTypeEffect(scenicWriter, `You take a few steps forwards before a strange voice cuts through the silence...`);
    setTimeout(() => {fastTypeEffect(gameWriter, `"Come over here or the guards will see you." says the voice from another empty cell...`)}, 3750);
    spawnNewButton(8100, "Go to the Voice");
}

//SCENE TWO:
const sceneTwo = () => {
    const scenicWriter = document.getElementById("scenic-writer");
    const gameWriter = document.getElementById("game-writer");
    const narrImg = document.getElementById("narr-img");
    narrImg.src = "images/narrator-1.jpg";
    fastTypeEffect(scenicWriter, `"Hey buddy..."`);
    setTimeout(() => {fastTypeEffect(gameWriter, `"The guards are gonna be on patrol for another few hours. Let's just pass the time here until they leave..."`)}, 2000);
    spawnNewButton(7400, "Uh, Sure")
}

//SCENE THREE:
const sceneThree = () => {
    const scenicWriter = document.getElementById("scenic-writer");
    const gameWriter = document.getElementById("game-writer");
    const message = `"Oh, really? I didn't think you'd actually want to hang out with me..."`;
    fastTypeEffect(scenicWriter, message);
    setTimeout(() => {fastTypeEffect(gameWriter, `"Well I honestly don't have much to do...how about some blackjack?"`)}, typeTimer(message) + 500);
    spawnNewButton(7300, "Okay, Deal 'Em")
}

//make a function that reads the length of the array and then sets an automatic timer that adds a [delay] to the time it will take to type.

//automatically determines the time it takes to write a word with the fastTypeEffect()
const typeTimer = (message) => {
    const theTime = 40 * message.length;
    return theTime;
}