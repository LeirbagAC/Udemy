function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        [prev, curr] = [curr, prev + curr];
        yield curr;
    }
}

// Usando o gerador de Fibonacci
let fib = fibonacci();
for (let i = 0; i < 10000; i++) {
    console.log(fib.next().value); // Saída: 1, 2, 3, 5, 8
}