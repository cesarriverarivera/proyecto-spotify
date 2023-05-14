function showInput(){ /* funcion para buscador en biblioteca*/ 
    var x =document.getElementById("inputbox");
    if (x.style.display === "none") {
        x.style.display ="block";
        x.classList.add("show_animation");
    }else{
        x.style.display ="none";
    }
}