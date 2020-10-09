let monedaParaConvertir = "CLP" /* String: cadena de texto, siempre con comillas */
let pesos = 1000 /* Int: números Enteros (sin decimal) */
let valorDolar = 890.39 /* Float: números con decimales */
let bajaDolar = false /* Boolean: guarda un "estado" de true o false */
let datosImportantes = ["dolar", "pesos chilenos", 2, true, 84.3]
let dolaresDeMisAmigas = {
	"Loreto" : 1500,
	"Belen" : 2300,
	"Camila" : 1000 
}



let contenedor = document.getElementById("contenido") // acá identificamos la caja del contenido
let botonConvertir = document.getElementById("convertir") // acá identificamos el boton del sitio

let procesoConvertir = function () {
	let USD = document.getElementById("dolares").value // acá ientificamos el valor del input
	let valorDolar = 775.20 // acá definimos el valor del dolar
	let total = USD * valorDolar // acá se realiza la operación

	let nuevoParrafo = document.createElement("p"); // Acá creamos un nuevo de párrafo
	let textoResultado = document.createTextNode("Tus USD equivalen a " + total + " CLP"); // creamos el texto

	nuevoParrafo.appendChild(textoResultado); //añadimos el texto al párrafo
	contenedor.appendChild(nuevoParrafo); // añadimos el párrafo al contenedor

}

botonConvertir.addEventListener("click", procesoConvertir) // acá se desencadena todo al hacer click