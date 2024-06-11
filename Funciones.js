 /**Cambio de tema e iconos del switch */
 modeSwitch.addEventListener("click", () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Modo Claro"
    }else{
        modeText.innerText = "Modo oscuro"
    }
})