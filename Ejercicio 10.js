// Desarrolle un algoritmo que permita determinar el área y volumen de un cilindro dado su radio (R) y altura (H). 

console.log("****DECIMO EJERCICIO****")

let nR = prompt("Ingresa el RADIO del cilindro")
let nH = prompt("Ingresa el ALTURA del cilindro")

let volumen = Math.PI * Math.pow(nR,2) * nH
let area = (2*Math.PI * nR *nH) + ((2*Math.PI) * Math.pow(nR,2))


console.log("El Volumen del Cilindro es " + volumen)
console.log("El Area del Cilindro es " + area)