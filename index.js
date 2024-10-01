let largura = window.innerWidth;
let altura = window.innerHeight;
console.log(`Largura: ${largura}, Altura: ${altura}`);

localStorage.setItem("item", "valor");
let valorArmazenado = localStorage.getItem("item");
console.log("valor: ", valorArmazenado);

let div = document.createElement('div');
div.id = "div";
document.body.appendChild(div);

div.textContent = "salvem o corinthians pelo amor de deus";
div.style.color = "white";
div.style.backgroundColor = "red";
div.style.padding = "15px";

let p = document.getElementById("p");
p.textContent = "protocolo salve o corinthians";
p.style.backgroundColor = "yellow";

let img = document.getElementById("img");
img.setAttribute("title", "img");

let botao = document.getElementById("botao");
botao.style.margin = "10px"

botao.addEventListener("click", () => {
    p.textContent = "FIEL CHOPP";
    img.src = "exemplo2.png";
    img.setAttribute("title", "Nova imagem");
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("enter");
    }
});

let lista = document.createElement("ul");
document.body.appendChild(lista);

function addItem(texto) {
    let li = document.createElement("li");
    li.textContent = texto;
    let btnRemove = document.createElement("button");
    btnRemove.textContent = "x";
    btnRemove.addEventListener("click", () => {
        lista.removeChild(li);
    });
    li.appendChild(btnRemove);
    lista.appendChild(li);
}

addItem("item 1 ");
addItem("item 2 ");
addItem("item 3 ");