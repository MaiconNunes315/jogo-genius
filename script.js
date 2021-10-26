let order = [];
let clickedOrder = [];
let score = 0;
let viewScore = document.getElementById("score");

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector(".blue");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");


//cria ordem aleatória de cores
let shuffleOrder = () =>{ 
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for ( let i in order){
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}


//acende a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    },number - 250);
    setTimeout(() => {
        element.classList.remove("selected");
    },number - 25);
} 

//checa se os botões clicados são os mesmos da orderm gerada no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length){
        viewScore.innerHTML = ("Pontuação: " + score)
        setTimeout(() =>{
            nextLevel();
        },600)
        
    }
}

//função para o clique do usuário

let clickb = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add("selected");

    setTimeout(() =>{
        creatColorElement(color).classList.remove("selected")
        checkOrder();
    }, 100)
    
}

//função que retorna a cor

let creatColorElement = (color) =>{
    if(color == 0){
        return green
    } else if(color==1){
        return red;
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }
}

//função para o próximo nivel do jogo
let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//função para game over 
let gameOver = () =>{
    alert("Pontuação: " + score + "\n" + " Você perdeu o jogo! \n " +
     "Clique em OK para iniciar um novo jogo");
     order = [];
     clickedOrder = [];
     
     playGame()
}


//função do inicio do jogo
let playGame = () =>{
    document.querySelector(".page1").style.display = "none"
    setTimeout (() =>{
    document.querySelector(".main-game").style.display = "flex"
    },)    
    score = 0;

    nextLevel();
}




