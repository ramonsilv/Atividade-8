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

// console.log(mapaSala)    //(EXERCICIO 4)

// console.log('A Nota do 5º aluno- Pepe é: ', mapaSala.get("Pepe").nota) //(EXERCICIO 5)

mapaSala.delete('Woshinton')
// console.log(mapaSala)   //(EXERCICIO 6)
const valorRemovido = mapaSala.delete('Woshinton')
// console.log("O Aluno Woshinton foi removido: ", valorRemovido)   //(EXERCICIO 6)

jhonAluno = mapaSala.has('Jhon snow')
// console.log("Existe algum aluno chamado Jhon Snow: " +jhonAluno)//(EXERCICIO 7)

chaves = ""
for (const x of mapaSala.keys()) {
    chaves += x
    if (x !== [...mapaSala.keys()][mapaSala.size - 1]) {
        chaves += ", "
    }
}
// console.log('A chaves do Mapa são: ', chaves)    //(EXERCICIO 8)

// valores = Array.from(mapaSala.values())  //MODO 1(EXERCICIO 9)
// console.log('Os valores das chaves são: ', valores)  //MODO 1(EXERCICIO 9)

// valores = ""
// for (const value of mapaSala.values()) {
//     valores += value.alunos
//     if (value !== [...mapaSala.values()][mapaSala.size - 1]) {
//         valores += ", "
//     }
// }
// console.log('Os valores das chaves são: ', valores)      //MODO 2(EXERCICIO 9)

// for (const [chave, valor] of mapaSala) {
//     console.log(`Chave: ${chave}`)
//     console.log(`Alunos: ${valor.alunos}`)
//     console.log(`Nota: ${valor.nota}`)
//     console.log(`Situação: ${valor.situação}`)
//     console.log('---------------------------')
// }                                               //MODO 3(EXERCICIO 9)

// valores = ''
// for (const value of mapaSala.values()) {
//     valores += JSON.stringify(value) + ", "
// }
// valores = valores.slice(0, -2)
//
// console.log('Os valores das chaves são:', valores)      //MODO 4(EXERCICIO 9)

entradas = Array.from(mapaSala.entries())
// console.log("A entrada do Mapa da sala é: ", entradas)  //MODO 1(EXERCICIO 10)

// for (const [chave, valor] of mapaSala.entries()) {
//     console.log(`Chave: ${chave}`)
//     console.log(`Alunos: ${valor.alunos}`)
//     console.log(`Nota: ${valor.nota}`)
//     console.log(`Situação: ${valor.situação}`)
//     console.log('---------------------------')
// }                                                //MODO 2 (EXERCICIO 10)

console.log(mapaSala)