//Desarrolle un algoritmo que permita leer un valor entero positivo N y determinar si es primo o no.

console.log("****SEXTO EJERCICIO****")

let positivo = prompt("Ingresa un valor positivo N para saber si es primo o no")
positivo = parseInt(positivo)

const esPrimo = numero => {
	if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
}
	console.log(` ${positivo} es primo?`, positivo, esPrimo(positivo)? " Si es primo":"No es primo");

