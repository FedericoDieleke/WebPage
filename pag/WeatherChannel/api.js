let entrada = document.getElementById("entrada").value;
let ciudad;



function cargarCiudad(ciudad){
  let url = "https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=dcec7df661b1e6b0edab51d796b7339c&units=metric&lang=es";
  let iconoURL = "https://openweathermap.org/img/wn/"
  $.getJSON(url
    , 
    function (data) {
        console.log(data); 
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("#ciudad").textContent = data.name;
        document.querySelector("#temperatura").textContent = data.main.temp; //+"°C"
        document.querySelector("#grados").textContent ="°C";
        document.querySelector("img").src = iconoURL+data.weather[0].icon+"@2x.png";
        document.querySelector("#descripcion").textContent = data.weather[0].description;

    });

};

function click(){
  let limpio; // Variable para cambiar los espacios por codigo html %20
  
  document.getElementById("boton").addEventListener("click", function(){
      limpio = document.getElementById("entrada").value.replace(" ","%20");// cambia los espacios por codigo html
      document.getElementById("entrada").value = ""; //Borra el texto ingresado
      cargarCiudad(limpio);//Ejecuta la api con el nombre de la ciudad formateado
  })
}


click();//Ejecuta la funcion que espera un click para mostrar la api
