
class ContaBancaria {

   constructor(agencia, numero, tipo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = 0;    // sublinhado: propriedade com getter/setter
   }

   get saldo() {
      return this._saldo;
   }

   set saldo(valor) {
      throw new ReferenceError('Saldo não pode ser atribuído');
   }

   sacar(valor) {
      if (valor > this._saldo) {
         throw new SaldoInsuficienteException();
      }

      this._saldo -= valor;
   }
    
   depositar(valor) {
      this._saldo += valor;
   }

}

class ContaCorrente extends ContaBancaria {

   constructor(agencia, numero, limiteCartaoCredito) {
      super(agencia, numero, 'corrente');
      this._limiteCartaoCredito = limiteCartaoCredito;
   }

   get limiteCartaoCredito() {
      return this._limiteCartaoCredito;
   }

   set limiteCartaoCredito(valor) {
      this._limiteCartaoCredito = valor;
   }

}

class ContaPoupanca extends ContaBancaria {

   constructor(agencia, numero) {
      super(agencia, numero, 'poupanca');
   }

}

class ContaUniversitaria extends ContaBancaria {

   constructor(agencia, numero) {
      super(agencia, numero, 'universitaria');
   }

   sacar(valor) {
      if (valor > 500) {
         throw new LimiteExcedidoException();
      }

      super.sacar(valor);
   }

}

function SaldoInsuficienteException(message) {

   if (!message)
      message = 'Valor excede o saldo disponível';

   this.message = message;
   this.name = 'SaldoInsuficiente';
}

function LimiteExcedidoException(message) {

   if (!message)
      message = 'Valor excede o limite permitido';

   this.message = message;
   this.name = 'SaldoInsuficiente';
}

