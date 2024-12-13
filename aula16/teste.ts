class Carro {
    private modelo: string;
    private ano: number;
    private cor: string;
	constructor(modelo: string, ano: number, cor: string) {
		this.modelo = modelo;
		this.ano = ano;
		this.cor = cor;
  	}

  info() {
    console.log(`O veículo é um ${this.modelo} de cor ${this.cor} e ano ${this.ano}.`); `O veículo é um ${this.modelo} de cor ${this.cor} e ano ${this.ano}.`;
  }
}


const car = new Carro('Ferrari', 2022, 'Vermelho').info()