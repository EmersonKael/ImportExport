class niver {
    constructor(nome = '',dia, mes, ano = 0, idade = 0){
        this.nome = nome,
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.idade = idade
    }
}

class nascimento {
    constructor(dia, mes, ano = 0){
        this.dia = dia,
        this.mes = mes
        this.ano = ano
        this.festa = []
    }

    novoNiver(... festa){
        festa.forEach(
            lancamento => this.festa.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        this.festa.forEach( lancamento => {
            valorAtualizado += lancamento.idade
        })

        return valorAtualizado
    }
    
    resumo2(){
        let valorAtualizado = 0
        this.festa.forEach(lancamento => {
            valorAtualizado += lancamento.ano
        })

        return valorAtualizado
    }
}

const nv01 = new niver ('Emerson', 11, 08, 2023, 19)
const nv02 = new niver ('Emerson', 11, 08, 2023, 1)
const nv03 = new niver ('Emerson', 11 , 08, 2023, 1)
const ano01 = new niver ('Emerson', 11, 08, 2023)
const ano02 = new niver ('Emerson', 11, 08, 1)

const nascimento01 = new nascimento(11, 08, 2003)
const nascimento02 = new nascimento(11, 08, 2003)
const nascimento03 = new nascimento(11, 08, 2003)
nascimento01.novoNiver(nv01, nv02)
nascimento02.novoNiver(ano01, ano02)
nascimento03.novoNiver(nv01, nv02, nv03)

console.log('Você vai fazer ' + nascimento01.resumo() + ' anos de idade esse ano ' + ' e em ' + nascimento02.resumo2() + ' você vai fazer ' + nascimento03.resumo())