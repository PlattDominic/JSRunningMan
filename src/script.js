/*
- Dominic Martinez
- Project: JS Running Man
- Description: Uses HTML/JS and 3 buttons to animate a man walking
- Due Date: 3/21/2023
*/


// Represents the name of current png 
let currentStance = 1;

// The amount of time(ms) it takes before the running man image is changed
let runDelay = 1500;

// Will be use to check if man should be running or not
let runStatus = false;

// Will be the image of the current stance of running man
let runningStance = document.getElementById('running-stance');

// Will be the button to toggle if man is running or not
let toggleButton = document.getElementById('toggle-button')

// The current timeout of run function
let currentTimeout;

// Function will run when user clicks toggle button, will either stop or resume running man
let toggleRunStatus = () => {
    // Invert runStatus value
    runStatus = !runStatus;

    if (runStatus) {
        // If run status is True, change text of toggle button to 'Stop' and its color to red 
        // To represent a pause/stop button
        toggleButton.innerHTML = 'Stop';
        toggleButton.style.backgroundColor = '#b92e34';

        // Clear the current timeout of run function and then rerun the run function to resume running
        clearTimeout(currentTimeout);
        run();
    } else {
        // If run status is False, change text of toggle button to 'Start' and its color to green
        // To represent a start button
        toggleButton.innerHTML = 'Start';
        toggleButton.style.backgroundColor = '#40826d';
    }
};

// Will animate a man running by changing its stance image every (runDelay) ms
let run = () => {
    // First check if man should be running or not
    if (!runStatus) return;
    
    // If the pre-incremented current stance is larger than 7, then reset it to 1 so running man can restart animation
    if (++currentStance > 7) currentStance = 1;

    // Change the image of running man stance by using current stance as image file name
    runningStance.src = `img/${currentStance}.png`;

    // Rerun the run function to continue animation
    currentTimeout = setTimeout(run, runDelay);
}

// Function runs when user clicks 'Slower' button. Increases run delay
let increaseRunDelay = () => {
    // Increases run delay by 10
    runDelay += 10;

    // Checks if run delay is not more than 3000, if so set runDelay to 3000
    if (runDelay > 3000) runDelay  = 3000;
}

// Function runs when user clicks 'Faster' button. Decreases the run delay
let decreaseRunDelay = () => {
    // Decrease the run delay by 10
    runDelay -= 10;
    // Make sure, run delay is not under 50, if so set runDelay to 50
    if (runDelay < 50) runDelay = 50;
}

