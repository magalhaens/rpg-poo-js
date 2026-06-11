// ==============================
// Classe Personagem
// ==============================

class Personagem{

    constructor(nome, classe){ // Cria os atributos
        this.nome = nome; 
        this.classe = classe;
        this.vida = 100;
        this.vidaMaxima = 100;
        this.ataque = 10;
        this.nivel = 1;
        this.experiencia = 0;
    }

    atacar(alvo){ // Causa dano e mostra ataque
        alvo.receberDano(this.ataque);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${this.ataque} de dano`);
    }

    receberDano(dano){ // reduz vida e limita em 0
        this.vida = this.vida - dano;
        if (this.vida <= 0) {
            this.vida = 0;
        }
    }

    curar(valor){ // cura a vida e limita ao atributo vidaMaxima
        let vidaAntes = this.vida;
        this.vida = this.vida + valor;

        if(this.vida >= this.vidaMaxima){
            let qtdCura = this.vidaMaxima - vidaAntes

            console.log(`${this.nome} recuperou ${qtdCura} pontos de vida!`)
            this.vida = this.vidaMaxima;
            console.log("Vida cheia");
        } else{
            console.log(`${this.nome} recuperou ${valor} de vida!`);
        }
    }

    ganharExperiencia(xp){ // ganha experiencia e caso tenha xp necessario, sobe de nivel e acumula o que ganhou
        let xpNecessario = 100;
        this.experiencia = this.experiencia + xp;

        while (this.experiencia >= xpNecessario){
            this.experiencia = this.experiencia - xpNecessario;
            this.subirNivel();
        }
    }

    subirNivel(){ // sobe de nivel e aumenta o valor dos atributos
        ++this.nivel;
        console.log('Subiu de nível!');

        this.vidaMaxima += 25;
        this.ataque += 5;
        this.vida = this.vidaMaxima;
    }

    estaVivo(){ // verifica se esta vivo com booleano
        if (this.vida > 0){
            return true;
        } else {
            return false;
        }
    }

    exibirStatus(){ // retorna status do personagem
        return `
        Nome: ${this.nome}
        Classe: ${this.classe}
        Vida: ${this.vida}/${this.vidaMaxima}
        Ataque: ${this.ataque}
        Nível: ${this.nivel}
        XP: ${this.experiencia}
        `
    }
}

// ==============================
// Classe Inimigo
// ==============================

class Inimigo{
    constructor(nome, vida, ataque, xpRecompensa){ // cria os atributos
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.xpRecompensa = xpRecompensa;
    }

    atacar(alvo){ // causa dano e mostra ataque
        alvo.receberDano(this.ataque);
        console.log(`${this.nome} atacou ${alvo.nome} causando ${this.ataque} de dano`);
    }

    receberDano(dano){ // reduz vida e limita a 0
        this.vida = this.vida - dano;

        if (this.vida <= 0) {
            this.vida = 0;
        }
    }

    estaVivo(){ // verifica se esta vivo com booleano
        if (this.vida > 0){
            return true;
        } else {
            return false;
        }
    }

    exibirStatus(){ // retorna status do inimigo
        return `
        Nome: ${this.nome}
        Vida: ${this.vida}
        Ataque: ${this.ataque}
        XP: ${this.xpRecompensa}
        `
    }
}

// ==============================
// Classe Batalha
// ==============================

class Batalha{
    constructor(personagem, inimigo){ // adiciona os personagens utilizando parâmetros
        this.personagem = personagem;
        this.inimigo = inimigo;
    }

    iniciar(){ // inicia batalha, inicia um loop enquanto personagens e estiverem vivos e quando um morre, verifica os resultados
        console.log('Início da batalha');

        while (this.personagem.estaVivo() && this.inimigo.estaVivo()){
            this.turnoPersonagem();
            if(this.inimigo.estaVivo() === false){
                break;
            }
            this.turnoInimigo();
            if(this.personagem.estaVivo() === false){
                break;
            }
        }

        this.verificarResultado();
    }

    turnoPersonagem(){ // turno de ataque do personagem
        this.personagem.atacar(this.inimigo);
    }
    turnoInimigo(){ // turno de ataque do inimigo
        this.inimigo.atacar(this.personagem);
    }

    verificarResultado(){ // verifica os resultados da batalha e concede xp para o jogador ou fala se ele morreu
        if(this.inimigo.estaVivo() === false && this.personagem.estaVivo() === true){
            this.personagem.ganharExperiencia(this.inimigo.xpRecompensa);
            console.log(`${this.personagem.nome} matou ${this.inimigo.nome}`);
            console.log(`${this.personagem.nome} venceu e ganhou ${this.inimigo.xpRecompensa} XP!`);
        } else {
            console.log(`${this.inimigo.nome} matou ${this.personagem.nome}`);
            console.log(`${this.personagem.nome} morreu`);
        }
    }
}

// ===========================================================
console.log("==== TESTE DE FUNCIONALIDADE ====");
// ===========================================================

const heroi = new Personagem("Gilbar", "Bárbaro"); // cria o heroi principal
const goblin = new Inimigo("Goblin", 20, 5, 50); // cria um inimigo
const lobo = new Inimigo("Lobo", 35, 8, 70); // cria um inimigo

console.log(`Status inicial: 
    ${heroi.exibirStatus()}`);

console.log("Batalha 1: Gilbar vs Goblin");
const batalha1 = new Batalha(heroi, goblin);
batalha1.iniciar();

console.log(`Status pós batalha 1: 
    ${heroi.exibirStatus()}`);

console.log("- - - - -  Teste de cura - - - - -");

heroi.curar(20);

console.log("- - - - - - - - - - - - - - - - - ");

console.log("Batalha 2: Gilbar vs Lobo");
const batalha2 = new Batalha(heroi, lobo);
batalha2.iniciar();

console.log(`Status final: 
    ${heroi.exibirStatus()}`);

// ==========================================================
console.log("==== FIM DO TESTE DE FUNCIONALIDADE ====");
// ==========================================================