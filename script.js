let gen1 = [1, 151];
let gen2 = [152, 251];
let gen3 = [252, 386];
let gen4 = [387, 493];
let gen5 = [494, 649];
let gen6 = [650, 721];
let gen7 = [722, 809];
let gen8 = [810, 905];
let gen9 = [906, 1010];
let all = [1, 1010];


let curr = all;

let count = 0;

let arr = []; // keep track of pokemons and order
let set = new Set(); // check if pokemon is already in array

// this function uses the current array to be used and returns a random value in the range
function randomNum() {
    return Math.floor(Math.random() * (curr[1] - curr[0]) + curr[0]);
}
let pokeShadow = document.querySelector(".pokemon");
let randomPoke = randomNum();
let name = "ditto";
let titlePoke = document.getElementById("poke-name");
let scoreboard = document.getElementById("score");
let textB = document.getElementById("guess");


//titlePoke.innerHTML = name;
function getPokemon() {
    randomPoke = lRUP(randomNum());
    //
    //randomPoke = randomNum();
    //

    fetch("https://pokeapi.co/api/v2/pokemon/" + randomPoke + "/")
        .then((res) => res.json())
        .then((data) => {
        //pokeShadow.style.filter = "brightness(0%)";
        document.querySelector("#poke-img").src = "";
        document.querySelector("#poke-img").src = data.sprites.front_default;
        pokeShadow.style.filter = "brightness(0%)";
        name = data.name;
        textB.value = "";
    })
    .catch ((err) => {
        console.log("Error");
    })
};


// Skips pokemon when the skip button is clicked
document.getElementById("next-button").addEventListener("click", getPokemon);
// Validates answer entered
document.getElementById("guess").addEventListener("input", e => {
    const currInput = e.target.value.toLowerCase();
    if (currInput === name) {
        pokeShadow.style.filter = "brightness(100%)";
        setTimeout(() => {
            console.log("Nice job");
            count++;
            scoreboard.innerHTML = count;
            getPokemon();
            e.target.value = "";
        }, 700);
    }
});

document.getElementById("clue-button").addEventListener("click", () => {
    pokeShadow.style.filter = "brightness(100%)";
});

document.getElementById("generation_menu").addEventListener("change", e => {
    switch (e.target.value) {
        case "gAll":
            curr = all;
            break;
        case "g1":
            curr = gen1;
            break;
        case "g2":
            curr = gen2;
            break;
        case "g3":
            curr = gen3;
            break;
        case "g4":
            curr = gen4;
            break;
        case "g5":
            curr = gen5;
            break;
        case "g6":
            curr = gen6;
            break;
        case "g7":
            curr = gen7;
            break;
        case "g8":
            curr = gen8;
            break;
        case "g9":
            curr = gen9;
            break;


    };
});
let temp;
document.getElementById("gamemode_menu").addEventListener("change", e => {
    let hey = e.target.value;
    if (temp != undefined) {
        clearInterval(temp);
    }
    if (hey === "timed") {
        countdown();
    }
    else {
        count = 0;
        document.getElementById("timer").innerHTML = 0;
        scoreboard.innerHTML = count;
    }
});

function countdown() {
    let timerText = document.getElementById("timer");
    let c = 1;
    count = 0;
    let s = setInterval(() => {
        timerText.innerHTML = c;
        c++;
        if (c === 61) {
            clearInterval(s);
            c = 0;
        }
    }, 1000);
    temp = s;
};
// var is map and arr
function lRUP(randomNumy) {
    let cond = false;
    let tempNum = randomNumy;
    while (!cond) {
        if (set.has(randomNumy) === false) {
            if (set.size > 9) {
                set.delete(arr.shift());
            }
            arr.push(tempNum);
            set.add(tempNum);
            cond = true;
        }
        else {
            tempNum = randomNum();
            randomNumy = tempNum;
        }
    }
    return tempNum;
    
}


