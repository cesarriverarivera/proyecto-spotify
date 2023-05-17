/* funcion para buscador en biblioteca*/
function showInput(){  
    var x =document.getElementById("inputbox");
    if (x.style.display === "none") {
        x.style.display ="block";
        x.classList.add("show_animation");
    }else{
        x.style.display ="none";
    }
}
/* funcion para buscador en biblioteca*/

/* codigo para mostrar buenos dias ,buenas tardes o buenas noches */
var saludo  = document.getElementById("saludo");
var hora =new Date().getHours();
    if (hora >=6 && hora < 12){
        saludo.innerHTML = "Buenos dias"
    }else if (hora >=12 && hora <20){
        saludo.innerHTML = "Buenas tardes"
    }else
        saludo.innerHTML = "Buenas noches"
/* codigo para mostrar buenos dias ,buenas tardes o buenas noches */

/*codigo for each para recorrer cada elemento dentro de tarjeta_musica*/ 
document.querySelectorAll(".tarjeta_musica").forEach(item => {
    item.addEventListener('mouseover', () => document.getElementById('all_de').style.backgroundImage = "linear-gradient(#4a496b 2%,#121212 60%)")
    item.addEventListener('mouseover', () => document.getElementById('stat_nav').style.backgroundColor = "transparent")


    item.addEventListener('mouseout',() => document.getElementById('all_de').style.backgroundImage = "linear-gradient(#490b02 10%,#121212 40%)")
    item.addEventListener('mouseout',() => document.getElementById('stat_nav').style.backgroundColor = "#490b02")
    
  })    
  /*codigo for each para recorrer cada elemento dentro de tarjeta_musica */
  
