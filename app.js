// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function validarTextoVacio(texto){
    return texto == "" || texto ==null ? false : true;
}




function agregarAmigo(){
    let nombre = document.getElementById("amigo");
    if(!validarTextoVacio(nombre.value)){
        alert("Por favor ingrese un nombre valido");
        return
    }

  

    amigos.push(nombre.value);

    nombre.value = "";
    

    actualizarLista();


}


function actualizarLista(){
    let lista_html = document.getElementById("listaAmigos");
    lista_html.innerHTML = "";
    for(i in amigos){
        lista_html.innerHTML += `<ul>${amigos[i]}</ul>`
    }
}


function sortearAmigo(){
    let indiceAmigo = Math.floor(Math.random() * amigos.length);

    let amigoElegido = amigos[indiceAmigo];

    let amigoElegidoTexto = document.getElementById("resultado");
    amigos = [];
    actualizarLista();
    amigoElegidoTexto.innerHTML = `El amigo secreto sorteado es: ${amigoElegido}`;
}
