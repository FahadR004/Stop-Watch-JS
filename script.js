window.onload = function() {
    
    let seconds = 0;
    let milliseconds = 0;

    let interval;

    const addSeconds = document.querySelector(".seconds");
    const addMilliseconds = document.querySelector(".milliseconds");

    const startButton = document.querySelector(".start");
    const stopButton = document.querySelector(".stop");
    const resetButton = document.querySelector(".reset");

    startButton.onclick = function(){
        clearInterval(interval);
        interval = setInterval(start, 10);  // Every 10 seconds, the start function will run
    };

    stopButton.onclick = function() {
        clearInterval(interval);

    }

    resetButton.onclick = function() {
        seconds = 0;
        milliseconds = 0;
        addSeconds.innerHTML = "00";
        addMilliseconds.innerHTML = "00";
    }

    function start() {
        milliseconds++;

        if (milliseconds < 10) {
            addMilliseconds.innerHTML = "0" + milliseconds;
        } else {
            addMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds; // Implicit string conversion
            milliseconds = 0;
            addMilliseconds.innerHTML = "00";
        }
    }
}
