let idadeMinima = 7;

let idadeAluno = 16; 

if (idadeAluno >= idadeMinima) {
    console.log("Matrícula realizada com sucesso");

    if (idadeAluno >= 7 == idadeAluno <= 9) {
        console.log("Categoria: Turma Infantil");
    } else if (idadeAluno >= 10 == idadeAluno <= 12) {
        console.log("Categoria: Turma Juvenil");
    } else if (idadeAluno >= 13 == idadeAluno <= 17) {
        console.log("Categoria: Turma Adolescente");
    } else {
        console.log("Categoria: Turma Adulto");
    }
} else {
    console.log("Desculpe, você ainda não pode se matricular nesta escola");
}
