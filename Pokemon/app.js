// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');


for (let i = 1; i < 101; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("pokemon");
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`
    const newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSpan);
    container.appendChild(newDiv);
}