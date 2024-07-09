let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHtlm = document.querySelector (elemento);
    elementoHtlm.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento ('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document. getElementById ('reiniciar').removeAttribute ('disabled');

    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento ('p','El numero secreto es menor');   
        } else {
            asignarTextoElemento ('p','El numero secreto es mayor'); 
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector ('#valorUsuario'). value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaDeNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaDeNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','Ya se asignaron todos los numeros posibles');
    }else {
        //Si el numeroGenerado esta incluido en la lista.
        if (listaDeNumerosSorteados.includes(numeroGenerado)) {
            //Debe generar otro numero aleatorio que no este en la lista.
            return generarNumeroSecreto ();
        }else {
            //Si el numero no esta en la lista, lo agrega.
            listaDeNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
   asignarTextoElemento('h1','juego del numero secreto');
   asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
   numeroSecreto = generarNumeroSecreto();
   intentos = 1;
   console.log (numeroSecreto);
}

function reiniciarJuego() {
    //Limpiar la caja.
    limpiarCaja();
    //Indicar mensaje de intervale de numeros.
    //Generar el numero aleatorio.
    //Inicializar el numero de intentos.
    condicionesIniciales();
    //Dehabilitar el boton de nuevo juego.
    document. querySelector ('#reiniciar').setAttribute ('disabled','true');
}

condicionesIniciales();