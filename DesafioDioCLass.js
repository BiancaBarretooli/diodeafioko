class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Estrutura de decisão para definir o ataque com base no tipo
    switch (this.tipo.toLowerCase()) {
      case "arqueiro":
        ataque = "arco e flecha";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "mago":
        ataque = "magia";
        break;
      default:
        ataque = "atacou de forma desconhecida";
        break;
    }

    // Exibindo a mensagem
    console.log(`O ${this.tipo} atacou usando ${ataque}.`);
  }
}

// Criando uma lista de heróis
const herois = [
  new Heroi("Legolas", 150, "Arqueiro"),
  new Heroi("Gimli", 140, "Guerreiro"),
  new Heroi("Gandalf", 2019, "Mago"),
];

// Ataque
for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
