// Stopwatch Variables
let timer;
let isRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

// Start or Stop the Stopwatch
function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStopBtn").textContent = "Start";
    } else {
        timer = setInterval(updateTime, 10);
        document.getElementById("startStopBtn").textContent = "Stop";
    }
    isRunning = !isRunning;
}

// Update Stopwatch Time
function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }

    // Update the displayed time
    document.getElementById("hours").textContent = formatTime(hours);
    document.getElementById("minutes").textContent = formatTime(minutes);
    document.getElementById("seconds").textContent = formatTime(seconds);
    document.getElementById("milliseconds").textContent = formatTime(milliseconds);
}

// Format Time to Always Show Two Digits
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// Reset the Stopwatch
function reset() {
    clearInterval(timer);
    isRunning = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    // Update the display to 00:00:00:00
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("milliseconds").textContent = "00";

    // Change Start/Stop button text back to "Start"
    document.getElementById("startStopBtn").textContent = "Start";
}