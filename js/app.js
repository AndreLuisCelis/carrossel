
let carrossel = document.querySelector(".container-carrossel");

let moverParaEsquerda = () => {
    let position = carrossel.scrollLeft;
    carrossel.scrollLeft = position - 500;
}

let moverParaDireita = () => {
    let position = carrossel.scrollLeft;
    carrossel.scrollLeft = position + 500;
}