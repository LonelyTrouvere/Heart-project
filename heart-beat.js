let heart = document.getElementById("content");

let beatsPerMinute = 500;
const BEAT_TEMP_CHANGE = 84, MAX_BEAT_TEMP = 1000;

heart.animate(
    [
        {transform:"scale(1.02))"},
        {transform:"scale(1.5)"},
        {transform:"scale(1)"}
    ],
    {
        duration: beatsPerMinute,
        iterations: Infinity,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
);

setInterval(slowBeatTemp, 20000);

function slowBeatTemp() {
    beatsPerMinute += BEAT_TEMP_CHANGE;

    if (beatsPerMinute >= MAX_BEAT_TEMP) {
        beatsPerMinute = 1000;
    }

    heart.style.animationPlayState = "paused";
    heart.animate(
        [
            {transform:"scale(1.02)"},
            {transform: "scale(1.5)"},
            {transform:"scale(1)"}
        ],
        {
            duration: beatsPerMinute,
            iterations: Infinity,
            easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }
    );
}
