import randomItem from "random-item";
import { getName } from "./name-service";

let race, gender, name, mannerisms, interactions, ideals, 
bonds, secrets, talents, appearances, abilities_low, abilities_baixa,
abilities_high, abilities_alta, higth, low;

const GENDERS_F = ["feminino", "ela", "sua", "dela", "Ela", "a", 'Feminino'],

  GENDERS_M = ["masculino", "ele", "sua", "dele", "Ele", "o", 'Masculino'],

  RACA = ["Humano", "Anão", "Elfo", "Hobbit", "Meio-elfo", "Gnomo", "Meio-orck"],

  APPEARANCES = ["pelos seus brincos ornamentados", "pelo seu colar ornamentado", "pelos seus anéis ornamentados",
    "pelas suas pulseiras ornamentadas", "por ter muitos piercings", "pelas suas roupas estranhas",
    "pelas suas roupas impecáveis", "pelas suas roupas esfarrapadas", "por conta de uma cicatriz proeminente",
    "por alguns dentes faltando", "por ter perdido alguns dedos", "por conta de uma cor incomum dos olhos",
    "pelos seus olhos bicromáticos", "pelas suas tatuagens", "por conta de uma marca de nascença",
    "por conta de uma cor de pele incomum", "pela sua cabeça careca", "pelo seu cabelo trançado",
    "por conta de uma cor de cabelo incomum", "por um tique nos olhos", "pelo seu nariz estranho",
    "pela sua postura rígida", "por conta de uma beleza excepcional", "pela sua feiura perturbadora",],

  ABILITIES = ["força", "destreza", "constituição", "inteligência", "sabedoria", "carisma",],

  ABILITIES_HIGH = ["corajoso e forte", "ágil e gracioso", "resistente e saudável", "inteligente e curioso",
    "perceptivo e perspicaz", "persuasivo e manipulador",],

  ABILITIES_LOW = ["um pouco fraca", "um pouco desajeitada", "um pouco frágil", "meio idiota",
    "um pouco avoada", "meio entediante",],

  TALENTS = ["tocar violino", "tocar piano", "tocar o alaúde", "escrever mapas", "encontrar armadilhas",
    "fazer rastreamento de pessoas ou seres", "encontrar ingredientes raros", "obter informações",
    "falar em anão", "falar élfico", "falar em angelical", "falar em abissal", "ler runas", "criar armadilhas",
    "criar falsificações", "apostar", "memorização", "manipulação de animais", "manipular as pessoas",
    "resolução de quebra-cabeças", "jogar facas", "jogar xadrez", "jogar cartas", "realizar imitações",
    "desenhar", "pintar", "cantar", "transcrever magias", "consertar armas", "cozinhar", "enganar",
    "roubar", "malabarismo", "atuar", "criar antídotos e venenos",],

  MANNERISMS = ["cantar baixinho", "assobiar baixinho", "roer as unhas", "falar em rima", "falar em alto",
    "falar em baixo", "falar choramingando", "gaguejar", "ser enfático", "falar de coisas que não conhece",
    "sussurrar", "usar palavras complicadas", "escrever errado", "mentir", "ser exagerado", "fazer piadas",
    "falar pelas costas", "observar os arredores", "apertar os olhos", "ler", "mastigar tabaco",
    "ficar andando a esmo", "tamborilar com os dedos", "comer demais", "enrolar o cabelo nos dedos",
    "polir suas armas",],

  INTERACTIONS = ["argumentativa", "arrogante", "barulhenta", "rude", "curiosa", "amigável", "honesta",
    "explosiva", "tranquila", "suspeita",],

  IDEALS = ["a beleza", "a caridade", "o bem maior", "a vida", "o respeito", "o auto sacrifício",
    "a dominação dos fracos", "a ganância", "o poder", "o trabalho duro", "a retribuição",
    "o derramamento de sangue", "a comunidade", "a justiça", "a honra", "a lógica", "a responsabilidade",
    "a tradição", "a natureza", "a criatividade", "a liberdade", "a perfeição", "a autonomia",
    "o dinheiro", "o equilíbrio", "o conhecimento", "a lealdade", "a moderação", "a neutralidade",
    "as pessoas", "a ambição", "a curiosidade", "a glória", "o patriotismo", "a redenção", "a alma",],

  BONDS = ["a dedicação ao cumprimento de um objetivo pessoal", "a proteção de familiares próximos",
    "a proteção de colegas ou compatriotas", "a lealdade a um benfeitor", "a lealdade a um patrono",
    "um interesse romântico", "a proteção de um lugar específico", "a proteção de um legado",
    "a proteção de um item valioso", "a busca por vingança",],

  FLAWS_AND_SECRETS = ["tem uma suscetibilidade ao romance", "vem secretamente desfrutando de prazeres decadentes",
    "age de forma arrogante", "tem secretamente inveja da posse de outra criatura", "possui uma ganância avassaladora",
    "tem propensão a raiva", "tem um inimigo poderoso", "tem uma fobia específica", "tem uma história escandalosa",
    "cometeu um crime", "está na posse de um conhecimento proibido", "tem bravura imprudente",];

export function getNPC() {
  //Raça
  race = randomItem(RACA);
  //Gênero
  let genderAux = Math.floor(Math.random() * 2);
  if (genderAux === 0) {
    gender = GENDERS_F;
    name = getName(race, gender[6]);
  } else {
    gender = GENDERS_M;
    name = getName(race, gender[6]);
  }

  //configurando skills
  higth = Math.floor(Math.random() * ABILITIES.length);
  abilities_alta = ABILITIES[higth];
  abilities_high = ABILITIES_HIGH[higth];
  do {
    low = Math.floor(Math.random() * ABILITIES.length);
  } while (low === higth);

  abilities_baixa = ABILITIES[low];
  abilities_low = ABILITIES_LOW[low];
  //fim configurando skills

  appearances = randomItem(APPEARANCES);
  mannerisms = randomItem(MANNERISMS);
  interactions = randomItem(INTERACTIONS);
  ideals = randomItem(IDEALS);
  bonds = randomItem(BONDS);
  secrets = randomItem(FLAWS_AND_SECRETS);
  talents = randomItem(TALENTS);

  return (
    "Do sexo " + gender[0] + " e da raça " + race + ", " + name + " se destaca " + appearances +
    " e apresenta excepcional " + abilities_alta + " o que " + gender[5] + " torna um ser notoriamente " +
    abilities_high + ". Porem, " + gender[1] + " também pode ser uma criatura " + abilities_low +
    " por conta de " + gender[2] + " falta de " + abilities_baixa + ". Mostrando talento em " +
    talents + ", " + name + ", tem o hábito de " + mannerisms + " e normalmente age de forma " +
    interactions + ". Tendo como prioridade " + ideals + " e como motivação " + bonds + ", " +
    gender[1] + " " + secrets + "."
  );
}
