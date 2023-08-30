// JavaScript source code
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
let curr = all; //
function randomNum() {
    return Math.floor(Math.random() * (curr[1] - curr[0]) + curr[0]);
}
let pokeShadow = document.querySelector(".pokemon");
let randomPoke = randomNum();
let name = "ditto";
let titlePoke = document.getElementById("poke-name");
titlePoke.innerHTML = name;
function getPokemon() {
    randomPoke = randomNum();
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomPoke + "/")
        .then((res) => res.json())
        .then((data) => {
            pokeShadow.style.filter = "brightness(0%)"
            document.querySelector("#poke-img").src = data.sprites.front_default;
            name = data.name;
            titlePoke.innerHTML = name;
        })
        .catch((err) => {
            console.log("Error");
        })
};



document.getElementById("next-button").addEventListener("click", getPokemon);
document.getElementById("guess").addEventListener("input", e => {
    const currInput = e.target.value.toLowerCase();
    if (currInput === name) {
        pokeShadow.style.filter = "brightness(100%)";
        setTimeout(() => {
            console.log("Nice job");
            getPokemon();
            e.target.value = "";
        }, 500);
    }
});
document.getElementById("gen_all").addEventListener("click", () => {
    curr = all;

    //getPokemon();
});
document.getElementById("gen1").addEventListener("click", () => {
    curr = gen1;
    //getPokemon();
});
document.getElementById("gen2").addEventListener("click", () => {
    curr = gen2;
    //getPokemon();
});
document.getElementById("gen3").addEventListener("click", () => {
    curr = gen3;
    //getPokemon();
});
document.getElementById("gen4").addEventListener("click", () => {
    curr = gen4;
    //getPokemon();
});
document.getElementById("gen5").addEventListener("click", () => {
    curr = gen5;
    //getPokemon();
});
document.getElementById("gen6").addEventListener("click", () => {
    curr = gen6;
    //getPokemon();
});
document.getElementById("gen7").addEventListener("click", () => {
    curr = gen7;
    //getPokemon();
});
document.getElementById("gen8").addEventListener("click", () => {
    curr = gen8;
    //getPokemon();
});
document.getElementById("gen9").addEventListener("click", () => {
    curr = gen9;
    //getPokemon();
});
