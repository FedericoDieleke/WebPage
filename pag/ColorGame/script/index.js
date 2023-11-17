let colors= [];
let pickedColor;
let cuadrados = document.querySelectorAll(".square");
let cantidadCuadrados = 6;
let botonReset = document.getElementById("reset");
let mensaje = document.getElementById("message");
let titulo = document.getElementById("h1");
let partida = document.getElementById("reset");
let bgColor = document.body.style.backgroundColor;
jugar()

function jugar(){
    modo();
    tocarCuadrados();
    reset();

}
botonReset.addEventListener("click", function(){
    reset()
  })


function modo(){
    document.getElementById("hard").addEventListener("click", function(){
        console.log("hard")
        this.classList.add("selected");
        document.getElementById("easy").classList.remove("selected");
        cantidadCuadrados = dificultad();
        mostrarCuadrados();
        reset();

    })
    document.getElementById("easy").addEventListener("click", function(){
        console.log("easy")
        this.classList.add("selected");
        document.getElementById("hard").classList.remove("selected");
        cantidadCuadrados = dificultad();
        esconderCuadrados();
        reset();
    })
}
function mostrarCuadrados(){
    for (let i = 0; i < cantidadCuadrados; i++) {
        cuadrados[i].style.display="block"
}
}

function esconderCuadrados(){
    for (let i = cuadrados.length-1; i >= cantidadCuadrados; i--) {
        cuadrados[i].style.display="none"
}
}

function reset(){
    colors = generateRandomColors(cantidadCuadrados);
    pickedColor = pickColor(colors);
    colorCorrecto(pickedColor);
    asignarColores();
    mensaje.textContent = "";
    partida.textContent = "Nuevos Colores";
    titulo.style.backgroundColor = bgColor;
    console.log(colors);
    console.log(pickedColor);
    
}

function tocarCuadrados(){
    for (let i = 0; i < cantidadCuadrados; i++) {
        cuadrados[i].addEventListener("click", function(){
        let clickedColor = cleanClick(this.style.backgroundColor);
       
            if (pickedColor == clickedColor){
                mensaje.textContent = "¡Correcto!"; 
                partida.textContent = "Nuevo Juego"

                changeColors(pickedColor);
                
            } else {
                mensaje.textContent = "Intentalo nuevamente";
                this.style.backgroundColor = bgColor;
            }
            
        })
      }
};





function asignarColores (){
       for (let i = 0; i < cantidadCuadrados; i++) {
           cuadrados[i].style.backgroundColor = colors[i];
         }
   };
   

function dificultad(){
    if (document.querySelector(".selected").id === 'hard'){
        return 6;
    } else {
        return 3;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function randomColor(){
    let colorMax = 256;
    let r = 0;
    let g = 0;
    let b = 0;
    r = getRandomInt(colorMax);
    g = getRandomInt(colorMax);
    b = getRandomInt(colorMax);
    return "rgb("+r+","+g+","+b+")";
}
function generateRandomColors(max){
    let colors = [];
    for (let i = 0; i < max; i++) {
        colors[i]=randomColor();
        for (let r = 0; r < i; r++){
            if (colors[i] == colors[r]){
                i --;
            };
        };
    };
    return colors;
}
function cleanClick(clickedColor){
    clickedColor = clickedColor.replace(" ","");
    clickedColor = clickedColor.replace(" ","");
    return clickedColor;
}

function changeColors (color){

    for (let i = 0; i < cantidadCuadrados; i++) {
        cuadrados[i].style.backgroundColor = color;
    };
    titulo.style.backgroundColor = color;
}

function pickColor(colors){
    return colors[getRandomInt(cantidadCuadrados)];

}



function colorCorrecto(pickedColor){
    pickedColor = pickedColor.replace("rgb","RGB");
    document.getElementById("colorDisplay").textContent = pickedColor;
}

