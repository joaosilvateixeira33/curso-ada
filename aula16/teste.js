class Carro {
	constructor(modelo, ano, cor) {
		this.modelo = modelo;
		this.ano = ano;
		this.cor = cor;
  	}

  info() {
    console.log(`"${this.modelo} ${this.cor} ano ${this.ano}."`);
  }
}

new Carro('Ferrari', 2022, 'Vermelho').info()