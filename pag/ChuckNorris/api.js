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