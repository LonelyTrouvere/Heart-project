let heart = document.getElementsByClassName("heart");
let right = heart[0];
let left = heart[1];

left.animate(
    [
        {background:"#FF455E"},
        {background: "#4577ff"},
        {background:"#FF455E"}
    ],
    {
        duration: 1000,
        iterations: Infinity,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
);

right.animate(
    [
        {transform: 'scale(1) rotate(45deg)',
            background:"#FF455E" },
        {transform: 'scale(1.5) rotate(45deg)',
        background: "#4577ff"},
        {transform: 'scale(1) rotate(45deg)',
            background:"#FF455E"}
    ],
    {
        duration: 1000,
        iterations: Infinity,
        easing: "cubic-bezier(0.34, 1.56, 0.64, 1)"
    }
);
