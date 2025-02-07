class Conta{
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    sacar(valor) {
        if(valor > this.saldo) {
            console.log(`Saldo insuficiente: ${this.saldo}`)
            return;
        }
    
        this.saldo -= valor;
        this.verSaldo();
    }
    
    depositar(valor) {
        this.saldo += valor;
        this.verSaldo();
    }

    verSaldo() {
        console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
    }
}

class ContaCorrente extends Conta{
    constructor(agencia, conta, saldo, limite){
        super(agencia, conta, saldo);
        this.limite = limite;
    }

    sacar(valor) {
        if(valor > (this.saldo + this.limite)) {
            console.log(`Saldo insuficiente: ${this.saldo}`)
            return;
        }

        this.saldo -= valor;
        this.verSaldo();
    }
}


// const c = new Conta(10, 11, 120);
// c.sacar(100);
// c.deposistar(0.99);

const cc = new ContaCorrente(11, 22, 0, 100);
cc.sacar(50);
cc.sacar(50);
cc.sacar(0.001);
