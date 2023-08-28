const user01 = new Object()
user01.id = 1
user01.nome = "Emerson"
user01.sobrenome = "Kael"
user01.idade = 20


Object.defineProperty(user01, 'cpf', {
    enumerable: true, // enumerable ele esconde ou não algo que é para ser privado
    writable: false, // writable é para ser algo pode ser alterador ou não
    value: '939.460.232-15'
})


const empresa = "MARVEL"
user01.empresa = empresa

user01.filhos = 0

console.log(Object.entries(user01))

const user02 = new Object()
user02.id = 2
user02.nome = "Enmanuelle"
user02.sobrenome = "Gomes"
user02.idade = 20

Object.defineProperty(user02, 'cpf', {
    enumerable: true,
    writable:  false,
    value: "000.000.000-00"
})
user02.empresa = "ufam"
user02.filhos = 0

console.log(Object.entries(user02))

const user03 = new Object()
user03.id = 3
user03.nome = "Emerson"
user03.sobrenome = "Neves"
user03.idade = 40

Object.defineProperty(user03, 'cpf', {
    enumerable: true,
    writable: false,
    value: "000.000.000-00"
})

user03.empresa = 'Autonomo'
user03.filhos = {
    filho : "Kael",
    filha : "Bruna",
}

console.log(Object.entries(user03))