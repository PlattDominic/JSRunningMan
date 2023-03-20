/*
- Dominic Martinez
- Project: JS Running Man
- Description: Uses HTML/JS and 3 buttons to emulate a man walking
- Due Date: 2/10/2023
*/



let currentStance = 1;
let runDelay = 1000;
let runStatus = false;

let runningStance = document.getElementById('running-stance');
let toggleButton = document.getElementById('toggle-button')

let currentTimeout;

let toggleRunStatus = () => {
    runStatus = !runStatus;
    if (runStatus) {
        toggleButton.innerHTML = 'Stop';
        toggleButton.style.backgroundColor = '#b92e34';

        clearTimeout(currentTimeout);
        run();
    } else {
        toggleButton.innerHTML = 'Start';
        toggleButton.style.backgroundColor = '#40826d';
    }
};

let run = () => {
    if (!runStatus) return;
    console.log(runDelay)
    if (++currentStance > 7) currentStance = 1;

    runningStance.src = `img/${currentStance}.png`;
    currentTimeout = setTimeout(run, runDelay);
}

let increaseRunDelay = () => {
    // Decreases run delay by 10
    runDelay += 10;

    // Checks if
    if (runDelay > 3000) runDelay  = 3000;
}

// function runs when user clicks 'Faster' button. Decreases the run delay

let decreaseRunDelay = () => {
    runDelay -= 10;
    if (runDelay < 50) runDelay = 50;
}

run();