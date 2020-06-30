let imagemCenario;
let imagemPersonagem;
let imagemInimigo;
let imagemTroll;
let imagemGotinhaVoadora
let imagemGameOver;
let imagemTelaInicial;
let imagemPergaminho;
let imagemPlataforma;
let fonteTelaInicial;
let botaoGerenciador;
let somPulo;
let jogo;
let cenario;
let somDoJogo;
let personagem;
let imagemShuriken;
let imagemSilhueta;
let imagemVida;
let shuriken;
let inimigo;
let plataforma;
let troll;
let gotinhavoadora;
let pontuacao;
let efeitoArremesso;
let acerto;
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let vida;
let memory;
let bullets = new Array();
let velocMap = 8;
let inimigoGlobal;
let pontos = 0;
const plataformas = [];
let kunais = new Array();
let silhueta;
let somRun;
let imagemBamboo;
let imagemBamboo2;
let bamboo;
let bamboo2;
let somFloresta;
let trollSoundDash;
let slimeDash;
let kunai;

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

// const matrizPersonagem = [
//   [0, 0], [0, 0], [180, 0], [180, 0], [360, 0], [360, 0], [540, 0], [540, 0], [720, 0], [720, 0],
//   [0, 245], [0, 245], [180, 245], [180, 245], [360, 245], [360, 245], [540, 245], [540, 245], [720, 245], [720, 245]
// ]

// const matrizPersonagem = [
//   [0, 0],[180, 0], [360, 0], [540, 0], [720, 0],
//   [0, 243], [180, 243], [360, 243], [540, 243], [800, 243],
// ]

// const matrizPersonagem = [
//   [0,0],[0,0], [366,0],[366,0], [731,0],[731,0], [1096,0],[1096,0],
// [0,461],[0,461],[366,461],[366,461],[731,461],[731,461],[1096,461],[1096,461],
// [366,921],[366,921]
// ] //ninjafeio

const matrizPersonagem = [
  [0,0],[0,0], [183,0],[183,0], [365,0],[365,0], [547,0],[547,0],
  [0,218],[0,218],[183,218],[183,218],[365,218],[365,218],[547,218],[547,218],
  [0,435],[0,435],[183,435],[183,435]
]

const matrizPlataforma = [[0, 0]];

const matrizTroll = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizGotinhaVoadora = [
  [0, 0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];
const inimigos = [];