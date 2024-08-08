let quantidadeIngressos = 9;
let batatasPromocao = 0;
let nome = "Anna Beatriz";

for (let i= 1; i <= quantidadeIngressos; i++) {
    if (i % 3 == 0) {
        batatasPromocao++;
    }

}

console.log("Quantidade de porções de batata frita grátis: " + batatasPromocao);
