let nSecreto;
let btnNuevoJuego = document.getElementById("btn-nuevo-juego");
let input = document.getElementById("input");
let btnVerificar = document.getElementById("btn-verificar");
let mensaje = document.getElementById("mensaje");
let nUsuario;
let intentos = 1;
let palabraIntento = "intento";

function verificar (){
    if(nSecreto === nUsuario){
        mensaje.innerText = `¡Lo adivinaste! 🤩 El numero secreto era ${nSecreto}, lo lograste en ${intentos} ${palabraIntento}`;
        btnNuevoJuego.disabled = false;
        btnVerificar.disabled = true;
        input.disabled = true;
    } else if(nSecreto < nUsuario){
        definirMensaje("el numero secreto es menor");
        input.value = "";
        intentos++;
        palabraIntento="intentos";
    } else {
        definirMensaje("el numero secreto es mayor");
        input.value = "";
        intentos++;
        palabraIntento="intentos";
    }
}

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

btnVerificar.addEventListener("click", verificar);

btnNuevoJuego.addEventListener("click", nuevoJuego);


btnNuevoJuego.disabled = false;
btnVerificar.disabled = true;
input.disabled = true;


// aún sin funcionar
// if (intentos >= 3){

//     mensaje.innerText = `El numero secreto era ${nSecreto} 😓. ¡Inicia un nuevo juego!`;
//     btnNuevoJuego.disabled = false;
//     btnVerificar.disabled = true;
//     input.disabled = true;
// }

// aún sin funcionar
// if(nUsuario < 0 || nUsuario > 10){
//     definirMensaje("Solo puedes ingresar numeros del 1 al 10")
//     btnVerificar.disabled = true;
// }



