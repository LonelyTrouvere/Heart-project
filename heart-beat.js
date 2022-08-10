let beatsPerMinute = 500;
const BEAT_TEMP_CHANGE = 84, MAX_BEAT_TEMP = 1000;

var run = setInterval(beat, beatsPerMinute);
var beatSlowing = setInterval(slowBeatTemp, 20000);

function slowBeatTemp(){
    beatsPerMinute+=BEAT_TEMP_CHANGE;

    if (beatsPerMinute >= MAX_BEAT_TEMP)
    {
        beatsPerMinute = 1000;
    }

    //clearTimeout(beatSlowing);
    clearInterval(run);
    run = setInterval(beat, beatsPerMinute);
}

function beat (){
    let heart = document.getElementsByClassName("heart");

    function changeToSecondaryColor() {
        heart[0].style.background = "#4577ff";
        heart[1].style.background = "#4577ff";
    }

    function changeToOriginalColor() {
        heart[0].style.background = "#FF455E";
        heart[1].style.background = "#FF455E";
    }

    changeToSecondaryColor();
    setTimeout(changeToOriginalColor, 200);
    console.log(beatsPerMinute);
}