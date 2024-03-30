console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

let titulo = document.getElementById("gen-1")
// console.log(titulo);
titulo.innerHTML = "Generasión 1 Pokimon"

// 2. Cambia el color de fondo de la primera generación de Pokimon.

/*(No entiendo pq así no me va)

const fondoTarjetas = document.querySelector('.infocard-list');
console.log(fondoTarjetas);
fondoTarjetas.style.background = 'green';*/

// (Y así si me va)
const fondo = document.querySelector('.infocard-list')
fondo.style.background= 'yellow';

// 3. Imprime por consola la URL de la página

console.log(document.URL);

// 4. Imprime por consola e dominio de la página

console.log(document.domain);

// 5. Imprime todos los nodos de la imagen

const imagenes = document.getElementsByTagName('img')
console.log(imagenes);

// 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

const cambioAtributoImgs = document.getElementsByTagName('img');
for (let i = 0; i < cambioAtributoImgs.length; i++) {
    cambioAtributoImgs[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    
}

// 7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying` (he usad chatgpt pq no ha habido forma de sacar esto)

const fondoTexto = document.querySelectorAll(".infocard-lg-data.text-muted")
const elemento = fondoTexto[5].lastChild.lastChild.classList.value;
console.log(elemento);
for (let i = 0; i < fondoTexto.length; i++) {
    if (fondoTexto[i].lastChild.lastChild.classList.value === "itype flying") {
        fondoTexto[i].style.background = "white"
    };
    
}

