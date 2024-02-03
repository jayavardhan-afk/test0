const para = document.querySelector(".para");
const btn = document.querySelector("button");
const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,explicit&type=single";

let joking = async () => {
    let jokes = await fetch(api);
    let data = await jokes.json();
    newjoke(data.joke);
    console.log(data.joke);
}

let newjoke = (data) => {
    para.innerHTML = data;
}

btn.addEventListener("click", joking);
