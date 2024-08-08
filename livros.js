let meta = 5;
let livros = ["É assim que acaba", "O pequeno príncipe", "Romeu E Julieta"];
let faltam = 2;

for (let i = 0; i < livros.length; i++){
    if (livros.length >= meta) {
        console.log("Meta atingida: Parabéns, você atingiu sua meta de leitura!");
    } else {
        faltam = meta - livros.length;
        console.log(`Meta Não Atingida: Você está progredindo! Faltam ${faltam} livros para atingir sua meta!`);
    }
}
