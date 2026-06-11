# RPG POO JS

Protótipo inicial de um sistema de RPG criado com JavaScript para praticar Programação Orientada a Objetos.

O projeto simula uma batalha automática por turnos entre um personagem e inimigos, utilizando classes, objetos, métodos e interação entre instâncias.

## Objetivo

O objetivo deste projeto é estudar e aplicar os principais conceitos de Programação Orientada a Objetos em JavaScript, criando a base lógica de um mini RPG.

## Funcionalidades atuais

* Criação de personagem com nome e classe
* Criação de inimigos com vida, ataque e recompensa de XP
* Sistema de ataque
* Sistema de dano
* Sistema de vida
* Sistema de cura
* Sistema de experiência
* Sistema de level up
* Batalha automática por turnos
* Verificação de vitória e derrota
* Exibição de status do personagem e dos inimigos

## Conceitos praticados

* Classes
* Objetos
* Constructor
* Métodos
* Atributos
* Parâmetros
* Condicionais
* Loops com `while`
* Retorno booleano com `true` e `false`
* Interação entre objetos
* Separação de responsabilidades entre classes

## Classes do projeto

### `Personagem`

Representa o herói principal do jogo.

Atributos principais:

* `nome`
* `classe`
* `vida`
* `vidaMaxima`
* `ataque`
* `nivel`
* `experiencia`

Métodos principais:

* `atacar(alvo)`
* `receberDano(dano)`
* `curar(valor)`
* `ganharExperiencia(xp)`
* `subirNivel()`
* `estaVivo()`
* `exibirStatus()`

### `Inimigo`

Representa os inimigos que enfrentam o personagem.

Atributos principais:

* `nome`
* `vida`
* `ataque`
* `xpRecompensa`

Métodos principais:

* `atacar(alvo)`
* `receberDano(dano)`
* `estaVivo()`
* `exibirStatus()`

### `Batalha`

Controla o combate entre um personagem e um inimigo.

Responsabilidades:

* Iniciar a batalha
* Controlar os turnos
* Verificar se alguém morreu
* Definir o vencedor
* Conceder XP ao personagem em caso de vitória

## Exemplo de uso

```js
const heroi = new Personagem("Gilbar", "Bárbaro");
const goblin = new Inimigo("Goblin", 20, 5, 50);

const batalha = new Batalha(heroi, goblin);

batalha.iniciar();

console.log(heroi.exibirStatus());
```

## Estrutura atual

```txt
rpg-poo-js/
│
├── rpg.js
└── README.md
```

## Próximas etapas

* Criar a classe `Item`
* Criar a classe `Inventario`
* Criar a classe `Missao`
* Separar as classes em arquivos diferentes
* Criar uma interface com HTML e CSS
* Adicionar botões de ação, como atacar, curar e usar item
* Evoluir o projeto para um mini jogo jogável no navegador

## Status do projeto

Projeto em desenvolvimento.

Esta é a primeira versão do sistema, focada na lógica principal do RPG e no aprendizado de Programação Orientada a Objetos com JavaScript.
