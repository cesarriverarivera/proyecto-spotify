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
    }else if (hora >=12 && hora <19){
        saludo.innerHTML = "Buenas tardes"
    }else
        saludo.innerHTML = "Buenas noches"
/* codigo para mostrar buenos dias ,buenas tardes o buenas noches */
/* codigo para mostrar buenos dias ,buenas tardes o buenas noches para moviles */
var saludo  = document.getElementById("saludo_phone");
var hora =new Date().getHours();
    if (hora >=6 && hora < 12){
        saludo.innerHTML = "Buenos dias"
    }else if (hora >=12 && hora <19){
        saludo.innerHTML = "Buenas tardes"
    }else
        saludo.innerHTML = "Buenas noches"
/* codigo para mostrar buenos dias ,buenas tardes o buenas noches para moviles */

/*codigo for each para recorrer cada elemento dentro de tarjeta_musica*/ 

    if (window.innerWidth > 945) {
        document.querySelectorAll(".tarjeta_musica").forEach(item => {
            item.addEventListener('mouseover', () => document.getElementById('all_de').style.backgroundImage = "linear-gradient(#4a496b 2%,#121212 60%)")
            item.addEventListener('mouseover', () => document.getElementById('stat_nav').style.backgroundColor = "transparent")
        
        
            item.addEventListener('mouseout',() => document.getElementById('all_de').style.backgroundImage = "linear-gradient(#490b02 10%,#121212 40%)")
            item.addEventListener('mouseout',() => document.getElementById('stat_nav').style.backgroundColor = "#490b02") 
        })
    }else
        document.getElementById('all_de').style.backgroundImage = "linear-gradient(#000000 10%,#000000 40%)";
     
/*codigo for each para recorrer cada elemento dentro de tarjeta_musica */
 
/* codigo para barra inferior al hacer hover sobre la miniatura de portada de cancion se muestre boton para expansion*/
let imghover = document.getElementById("img_small")
let btnexpand = document.getElementById("expand_music")

  imghover.addEventListener("mouseover",() => document.getElementById("expand_music").style.display = "block")
  btnexpand.addEventListener("mouseover",() => document.getElementById("expand_music").style.display = "block")
  imghover.addEventListener("mouseout",()=> document.getElementById("expand_music").style.display = "none")
/* codigo para barra inferior al hacer hover sobre la miniatura de portada de cancion se muestre boton para expansion*/

/*codigo para bloque verde en home, search y biblioteca*/
function show_greencardHome(){
    var a = document.getElementById("g_s_inicio");
    var x = document.getElementById("g_s_buscar");
    var y = document.getElementById("g_s_biblioteca");

        if(a.style.visibility ==="hidden"){
            a.style.visibility ="visible";
            x.style.visibility ="hidden";
            y.style.visibility ="hidden";
        }else if(a.style.visibility ="visible"){
            a.style.visibility ="visible";
            x.style.visibility ="hidden";
            y.style.visibility ="hidden";
        }

}

function show_greencardSearch(){
    var a = document.getElementById("g_s_inicio");
    var x = document.getElementById("g_s_buscar");
    var y = document.getElementById("g_s_biblioteca");

   
        if(x.style.visibility ==="hidden") {
            x.style.visibility ="visible";
            a.style.visibility ="hidden";
            y.style.visibility ="hidden";
        }else if (x.style.visibility ="visible"){
            x.style.visibility ="visible";
            a.style.visibility ="hidden";
            y.style.visibility ="hidden";
        }
}

function show_greencardBibli(){
    var a = document.getElementById("g_s_inicio");
    var x = document.getElementById("g_s_buscar");
    var y = document.getElementById("g_s_biblioteca");

        if(y.style.visibility ==="hidden"){
            y.style.visibility ="visible";
            a.style.visibility ="hidden";
            x.style.visibility ="hidden";
        } else if(y.style.visibility ="visible"){
            y.style.visibility ="visible";
            a.style.visibility ="hidden";
            x.style.visibility ="hidden";
        }
}
/*codigo para bloque verde en home, search y biblioteca*/


  
