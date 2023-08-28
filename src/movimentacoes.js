class Movimentacao {
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(/picpay/i, 'Nubank')
            if(lancamento.banco.match(/picpay/i))
            valorAtualizado += lancamento.saldo
            tipo += lancamento.nome + ' | '
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Nubank', 'salario', 20000)
const m02 = new Movimentacao('Picpay', 'comissao', 2000)
const m03 = new Movimentacao('Nubank', 'imposto', -5000)
const m04 = new Movimentacao('Nubank', 'contas', -1000)

const Registro01 = new Registro(08,08,2023)
Registro01.novaMovimentacao(m01, m02, m03, m04)
console.log('O saldo do registro foi:' + Registro01.resumo())