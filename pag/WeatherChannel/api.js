// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", 
// function (data) {
//     console.log(data)
// });

// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", 
// function (data) {
//     console.log(data.main.temp)
// });
  // chiste.textContent =
let chiste = document.querySelector("h2");
let boton = document.getElementById("actualizar");

function primerChiste(){
    $.getJSON("https://api.chucknorris.io/jokes/random", 
        function (data) {
            chiste.textContent = data.value

            });
}
function chisteNuevo (){
    boton.addEventListener("click", function(){
        $.getJSON("https://api.chucknorris.io/jokes/random", 
        function (data) {
            chiste.textContent = data.value

            });
     
    })
}
primerChiste();
chisteNuevo();