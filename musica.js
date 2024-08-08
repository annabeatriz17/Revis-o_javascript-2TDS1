let quantidadePalmas = 13;  
let aplausos = '👏';

for (i = 1; i <= quantidadePalmas; i++) {
        aplausos += '👏';
        if (i % 5 === 0) {
            aplausos += '🎉';
        }
    }
console.log(aplausos);