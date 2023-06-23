let nomes = ['joão', 'david', 'Maria',
    'Woshinton', 'Pepe', 'andré',
    'Lucas', 'Raquel', 'antonio',
    'cleitin', 'onorio', 'Ana',
    'Madalena', 'Helena', 'Juliana',
    'Sandra', 'samuel', 'david',];
let notas = ['6.1', '3.8', '0.3',
    '5.8', '2.8', '9.5',
    '4.1', '3.1', '5.7',
    '6.5', '8.4', '6.0',
    '8.7', '1.8', '1.8',
    '9.4', '7.0', '5.2'];

alunos = [];

for (i = 0; i < nomes.length; i++) {

    Aluno = {
        "alunos": nomes[i],
        "nota": notas[i],

    }
    alunos.push(Aluno)
}
// console.log(alunos)

alunos.forEach(elemento => {
    elemento["situação"] = elemento["nota"] >= 7.0 ? "Aprovado" : "Reprovado"
});

// console.log(alunos) //(EXERCICIO 3 e EXERCIO 4)

mapaSala = new Map()

for (i = 0; i < alunos.length; i++) {
    Aluno = alunos[i]

    mapaSala.set(Aluno.alunos, Aluno);

}

// console.log(mapaSala)

// console.log(mapaSala.get("Pepe").nota);(EXERCICIO 5)

chave = Array.from(mapaSala.keys())
quartaElemento = chave[3]
mapaSala.delete(quartoElemento)
console.log(mapaSala)
