let filaDeEspera = [];

filaDeEspera.push("Matheus");
console.log("Matheus entrou na fila.");

filaDeEspera.push("Marcos");
console.log("Marcos entrou na fila.");

filaDeEspera.push("Ana");
console.log("Ana entrou na fila.");

if (filaDeEspera.length === 0) {
    console.log("Fila está vazia.");
} else {
    let consultado = filaDeEspera.shift();
    console.log(`${consultado} saiu da fila.`);
}

if (filaDeEspera.length === 0) {
    console.log("Fila está vazia.");
} else {
    let consultado = filaDeEspera.shift();
    console.log(`${consultado} saiu da fila.`);
}

if (filaDeEspera.length === 0) {
    console.log("Fila está vazia.");
} else {
    let consultado = filaDeEspera.shift();
    // console.log(`${consultado} saiu da fila.`);
}

if (filaDeEspera.length === 0) {
    console.log("Fila está vazia.");
} else {
    let consultado = filaDeEspera.shift();
    console.log(`${consultado} saiu da fila.`)}
