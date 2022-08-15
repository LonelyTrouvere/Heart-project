let heart = document.getElementsByClassName("heart");
let right = heart[0];
let left = heart[1];




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

  heart.forEach(function(item){
    item.style.animationDuration = beatsPerMinute;
  });
}


// function beat (){
//   let heart = document.getElementsByClassName("heart");
//
//   function changeToSecondaryColor() {
//     heart[0].style.background = "#4577ff";
//     heart[1].style.background = "#4577ff";
//   }
//
//   function changeToOriginalColor() {
//     heart[0].style.background = "#FF455E";
//     heart[1].style.background = "#FF455E";
//   }
//
//   changeToSecondaryColor();
//   setTimeout(changeToOriginalColor, 200);
//   console.log(beatsPerMinute);
// }

















// left.animate(
//     [
//         {background:"#FF455E"},
//         {background: "#4577ff"},
//         {background:"#FF455E"}
//     ],
//     {
//         duration: 1000,
//         iterations: Infinity,
//         easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
//     }
// );
//
// right.animate(
//     [
//         {transform: 'scale(1) rotate(45deg)',
//             background:"#FF455E" },
//         {transform: 'scale(1.5) rotate(45deg)',
//         background: "#4577ff"},
//         {transform: 'scale(1) rotate(45deg)',
//             background:"#FF455E"}
//     ],
//     {
//         duration: 1000,
//         iterations: Infinity,
//         easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
//     }
// );
