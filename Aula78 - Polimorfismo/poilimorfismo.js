function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};


// const conta1 = new Conta(11, 22, 10);
// conta1.depositar(11);
// conta1.depositar(10);
// conta1.sacar(30);
// conta1.sacar(0.01);

//            lINK PARA OS PROTOTYPES
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.costructor = ContaCorrente;

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor
    this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.sacar(50);
cc.sacar(50);
cc.sacar(0.001);