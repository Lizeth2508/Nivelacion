var diasVida = parseInt(prompt("Cuántos dias has vivido",""));

var numAnos = Math.floor(diasVida / 365);
var diasRestantes = diasVida % 365 ;
var numMeses = Math.floor(diasRestantes / 30);
diasRestantes = diasRestantes % 30;
alert ("Ha vivido" + numAnos +" años, " + numMeses + "meses y " + diasRestantes + " dias,");