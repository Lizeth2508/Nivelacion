//Realiza un algoritmo que muestre todos los números entre dos números introducidos por el usuario.

console.log("****PRIMER EJERCICIO****")

let primero = prompt("Ingresa el primer numero valor")
let segundo = prompt("Ingresa el segundo numero valor")
let i = parseInt(primero) + 1
for(i; i < segundo; i++){
    console.log(i)
