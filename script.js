let nSecreto;
let btnNuevoJuego = document.getElementById("btn-nuevo-juego");
let input = document.getElementById("input");
let btnVerificar = document.getElementById("btn-verificar");
let mensaje = document.getElementById("mensaje");
let form = document.querySelector("form")
let nUsuario;
let intentos = 1;
let palabraIntento = "intento";


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(input.value){
        if(nSecreto === nUsuario){
            btnNuevoJuego.disabled = false;
            btnVerificar.disabled = true;
            input.disabled = true;
            mensaje.innerText = `¡Lo adivinaste! 🤩 El numero secreto era ${nSecreto}, lo lograste en ${intentos} ${palabraIntento}`;
        } else if (nSecreto < nUsuario){
            if (intentos < 3){
                definirMensaje("El numero secreto es menor");
                input.value = "";
                intentos++;
                palabraIntento="intentos";
            } else {
                perdiste();
            }
        } else {
            if(intentos < 3){
                definirMensaje("El numero secreto es mayor");
                input.value = "";
                intentos++;
                palabraIntento="intentos";
            } else {
                perdiste();
            }
        }
    }else {
        definirMensaje("Ingresa un numero del 1 al 10")
    }
})

function nuevoJuego (e) {
    nSecreto = numeroAleatorio();
    input.value = "";
    btnNuevoJuego.disabled = true;
    btnVerificar.disabled = false;
    input.disabled = false;
    mensaje.innerText = "";
    intentos = 1;

}

function numeroAleatorio (){
    return Math.floor(Math.random()*10)+1;
}

function definirMensaje (msg){
    mensaje.innerText = msg;
    setTimeout (() => {
        mensaje.innerText = ""
    }, 2000)
}

input.addEventListener("input", (e) => {
    nUsuario = parseInt(e.target.value);
})


btnNuevoJuego.addEventListener("click", nuevoJuego);

btnNuevoJuego.disabled = false;
btnVerificar.disabled = true;
input.disabled = true;


function perdiste (){
    mensaje.innerText = `El numero secreto era ${nSecreto} 😓. ¡Inicia un nuevo juego!`;
    input.disabled = true;
    btnVerificar.disabled = true;
    btnNuevoJuego.disabled = false;
}

