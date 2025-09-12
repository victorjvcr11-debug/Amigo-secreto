//Creacion de array 'listaNombres' 
let listaNombres = [];

//Crear funcion para agregar a array 
function agregarAmigo() { //
    let recuadroNames = document.getElementById('amigo').value; // Seleccionar elemento y obtiener el valor escrito en el recuadro o elemento.
    if (recuadroNames == ''){ //String vacio
        alert('Por favor ingrese un nombre');
    } else {
        listaNombres.push(recuadroNames);
        console.log(listaNombres);
        document.getElementById('amigo').value = '';
        mostrarLista(listaNombres);
    }
}

function mostrarLista(input) {
    let lista = document.getElementById('listaAmigos'); //Selecionar objeto el cual es una lista no ordenada 
    lista.innerHTML = ''; //Limpiar texto dentro del objeto.
    for (let i = 0; i < input.length; i++){   
        //document.getElementById("listaAmigos").value = '';
        //Creacion del nodo o objeto.
        const NodoLista = document.createElement('li'); // <li> se usa para crear O definfir un elemento dentro de la lista <ul>.
        //Seleccionar elemento <li> y su atributo textContent
        NodoLista.textContent = input[i]; // Usar texto dentro del objeto o elemento y agregarle  texto.
        //Agregar o 'vincular' elemento al codigo HTML
        lista.appendChild(NodoLista);    
    }
        
}

function sortearAmigo(list){
    if (listaNombres == ''){
        alert('Aun no se agregado nombres a la lista');
    } else {
        let indes = Math.floor(Math.random()*listaNombres.length);
        console.log(indes);
        let listaFinal = document.getElementById('listaAmigos');
        listaFinal.innerHTML = `El amigo sorteado fue: ${listaNombres[indes]}`;
    }
}
