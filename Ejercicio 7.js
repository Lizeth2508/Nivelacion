//Desarrolle un algoritmo que funcione como caja registrador.

console.log("****SEPTIMO EJERCICIO****")

let productos = prompt("Cuantos productoas vas a registrar")
productos = parseInt(productos)

suministros = []
precios = []
let total = 0
for(let i = 0; i < productos; i++){
    let suministro = prompt(`Como se llama el producto N.${i+1}`)
    suministros.push(suministro)
    let precio = prompt(`Cual es el precio de ${suministro}`)
    precios.push(precio)
}
console.log("Sus Productos fueron: \n")
for(let n=0; n < productos; n++){
    console.log(`${n+1}. ${suministros[n]} costo: ${precios[n]}`)
    total = total + parseInt(precios[n])
}
console.log("El costo total de la compra es: " + total)