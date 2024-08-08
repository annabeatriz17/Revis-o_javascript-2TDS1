let armas = ["Pistola","Revolver","Rifle", "Fuzil","Laser"];
let ataques = [];

ataques.push("Eva");
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[4]);
ataques.push(armas[0]);


for (let i = 0; i < ataques.length; i++) {
    if (i == 0) {
        console.log(`Nome do Robô: ${ataques[i]}`);
    }else {
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}