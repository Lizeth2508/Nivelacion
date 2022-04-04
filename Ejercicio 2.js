//Mostrar los números impares que hay entre dos números introducidos por el usuario.

console.log("****SEGUNDO EJERCICIO****")

let primero = prompt("Ingresa el primer numero valor")
let segundo = prompt("Ingresa el segundo numero valor")
let i = parseInt(primero) + 1
for(i; i < segundo; i++){
    if(i%2 != 0){
        console.log(i)
    }
}