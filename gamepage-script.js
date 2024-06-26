

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

//spawns a new button that says "Next"
const spawnNewButton = () => {
    const buttonCreation = document.createElement("input");
    buttonCreation.type = "button";
    buttonCreation.value = "Next";
    buttonCreation.id = "progressor";
    buttonCreation.addEventListener('click', nextClick);
    setTimeout(() => {document.getElementById("new-button").appendChild(buttonCreation);}, 7700)
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
}

