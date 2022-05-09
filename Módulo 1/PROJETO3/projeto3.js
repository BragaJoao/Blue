const prompt = require("prompt-sync")();


let day = 1;
let area = "area1";
let characterName;
let lvl = 0;
let direction;
let characterStr = 0;
let characterDef = 0;
let characterAgi = 0;
let d100;
let playAgain;
let tChoice;
let j = 1

//Apresentação do jogo e determinação do nome e atributos do personagem.
console.log(`Bem vindo!

Vamos jogar um jogo de aventura, onde você controlará um personagem que seu sonho é se tornar um herói, com esse objetivo em mente ele sai em uma jornada de aprimoramento pessoal.
Agora você deverá escolher um nome para ele, e seus valores de força, defesa e agilidade.

Força determinará seu dano em batalhas
Defesa irá te servir para diminuir o dano causado em você
E Agilidade será para você se esquivar de possíveis danos!

Você terá 30 pontos para gastar, seus atributos não devem ter valor menor do que 5 e a soma dos 3 abtributos (For, Def e Agi) não deve passar de 30!

Para ter uma experiência mais agradável, recomendo força 15, defesa 10, agilidade 5.

`);

do {
  let game = true;
  day = 1
  j = 1
  area = 'area1'
  

  do {
    characterName = prompt("Escreva o nome do seu personagem: ");
    characterStr = +prompt("Digite a força do seu personage: ");
    characterDef = +prompt("Digite a defesa do seu personagem: ");
    characterAgi = +prompt("Digite a agilidade do seu personagem: ");
    lvl = 1;
    if (
      characterStr + characterDef + characterAgi != 30 ||
      characterStr < 5 ||
      characterDef < 5 ||
      characterAgi < 5
    ) {
      console.log(
        " A soma dos valores não deve ser diferente de 30 e não podemos ter valores menores do que 5!"
      );
    }
  } while (
    characterStr + characterDef + characterAgi != 30 ||
    characterStr < 5 ||
    characterDef < 5 ||
    characterAgi < 5
  );

  console.log();

  //Determinação do objeto que vai "carregar" o status e as funções de modificação de atributos do mesmo.
  let hero = {
    name: characterName,
    level: lvl,
    lifeT: 100,
    life: 100,
    str: characterStr,
    def: characterDef,
    agi: characterAgi,
    reputation: 0,
    xp: 0,
    nextLvl: 20,
    equipment: [
      "Chapéu de aldeão",
      "Roupas de aldeão",
      "calças de aldeão",
      "Espada curta",
    ],
    items: [],

    // Janela de status
    status: function () {
      console.log("-----------");
      console.log("Janela de status do seu personagem:");
      console.log("-----------");
      console.log(`
                  Nome: ${this.name}
            Level:          ${this.level}
            HP:             ${this.life}/${this.lifeT}
            Força:          ${this.str}
            Defesa:         ${this.def}
            Agilidade:      ${this.agi}
            Experiência:    ${this.xp}/${this.nextLvl}

            Itens:       ${this.items}
            Equipamento:             `);
            // FOR para observar o equipamento de forma alinhada verticalmente.
      for (let i = 0; i < this.equipment.length; i++) {

        console.log(`            ${this.equipment[i]}  `);

      }
      console.log("-----------");
      console.log();
    },

    //Função responsável por calcular a experiência do personagem.
    experiencie: function (exp = 0) {
      this.xp = this.xp + exp;
      do {
        if (this.xp >= this.nextLvl) {
          this.xp = this.xp - this.nextLvl;
          this.nextLvl = this.nextLvl + Math.floor(this.nextLvl * 1.1);
          this.level++;
          this.lifeT += 10;
          this.str += 2;
          this.def += 2;
          this.agi += 2;
          console.log("Você conseguiu upar de level!");
        }
      } while (this.xp > this.nextLvl);
    },

    // Para calcular o dano sofrido pelo personagem.
    damage: function (dmg) {
      this.life = this.life - dmg;
      if (hero.life <= 0) {
        hero.life = 0;
      }
    },

    //Funções para incremento de status que podem ser definidos de acordo com a situação colocada.

    strUp: function (up = 1) {
      console.log(`Você aumentou sua força em ${up}`);
      this.str += up;
    },

    defUp: function (up = 1) {
      console.log(`Você aumentou sua defesa em ${up}`);
      this.def += up;
    },

    agiUp: function (up = 1) {
      console.log(`Você aumentou sua agilidade em ${up}`);
      this.agi += up;
    },

    reputationUp: function (up = 1) {
      this.reputation += up;
    },

    sleep: function () {
      this.life = this.lifeT;
    },

    addItems: function (itemName) {
      this.items.push(itemName);
    },

    addEquipment: function (helmet, armor, legs, weapon) {
      this.equipment.fill(helmet, 0);
      this.equipment.fill(armor, 1);
      this.equipment.fill(legs, 2);
      this.equipment.fill(weapon, 3);
    },
  };

  // Função para o controle do tempo
  let timeCourse = {
    time: "Dawn",

    changeTime: function () {
      if (this.time == "Dawn") {
        this.time = "Morning";
      } else if (this.time == "Morning") {
        this.time = "Afternoon";
      } else if (this.time == "Afternoon") {
        this.time = "Evening";
      } else if (this.time == "Evening") {
        this.time = "Night";
      } else if (this.time == "Night") {
        this.time = "Dawn";
      }
    },
  };
  
  // função Random, disponível no MDN, gera um valor aleatório inteiro entre dois números inteiros inclusos ( [a, b] ).
  function dado(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //Função que define o combate, nela se compara as agilidades para ver quem começa
  function combat(name, life, str, def, agi, xp) {
    let nameM = name;
    let lifeM = life;
    let lifeMT = life;
    let strM = str;
    let defM = def;
    let agiM = agi;
    let dmg;
    let dmg2;

    do {
      combatD100 = dado(1,100)
      if (hero.agi >= agiM) {
        console.log(`É a vez de ${hero.name}`);
        console.log(" Você atacou!");
        console.log();
        prompt("APERTE ENTER PARA CONTINUAR");
        if (combatD100 <= agiM) {
          console.log(` ${nameM} conseguiu se desviar!`);
          console.log();
        } else {
          dmg = hero.str - defM;
          if (dmg <= 0) {
            dmg = 0;
          }
          console.log("Você acertou!");
          prompt("APERTE ENTER PARA CONTINUAR");
          console.log();
          lifeM = lifeM - dmg;
          if (lifeM <= 0) {
            console.log(
              `Você derrotou ${nameM} e ganhou ${xp} de experiência!`
            );
            hero.experiencie(xp);
            prompt("APERTE ENTER PARA CONTINUAR");
            break;
          }
        }
        console.log(`Agora é a vez de ${nameM}`);
        console.log(`${nameM} está se preparando para atacar`);
        prompt("APERTE ENTER PARA CONTINUAR");
        console.log();
        if (combatD100 <= hero.agi) {
          console.log(`${hero.name} conseguiu se desviar!`);
          console.log();
          prompt("APERTE ENTER PARA CONTINUAR");
        } else {
          dmg2 = strM - hero.def;
          if (dmg2 <= 0) {
            dmg2 = 0;
          }
          console.log(`${nameM} acertou!`);
          console.log();
          hero.damage(dmg2);
          prompt("APERTE ENTER PARA CONTINUAR");
          if (hero.life <= 0) {
            console.log(`${hero.name} foi derrotado por ${nameM}`);
            console.log(
              `${hero.name}  percebeu que seu destino não é ser um herói.`
            );
            console.log(`
            FIM DE JOGO
            
            Recomendo treinar da próxima vez
            `);

            process.exit(1);
          }
        }
        prompt(`
    ${hero.name}: ${hero.life}/ ${hero.lifeT}
    ${nameM}:     ${lifeM}/${lifeMT}
    APERTE ENTER PARA CONTINUAR`);
      } else if (agiM > hero.agi) {
        console.log(`É a vez de ${nameM}`);
        console.log(`${nameM} está se preparando para atacar`);
        prompt("APERTE ENTER PARA CONTINUAR");
        if (combatD100 <= hero.agi) {
          console.log(`${hero.name} conseguiu se desviar!`);
          prompt("APERTE ENTER PARA CONTINUAR");
        } else {
          dmg2 = strM - hero.def;
          if (dmg2 <= 0) {
            dmg2 = 0;
          }
          console.log(`${nameM} acertou!`);
          prompt("APERTE ENTER PARA CONTINUAR");
          hero.damage(dmg2);
          if (hero.life <= 0) {
            console.log(`Você foi derrotado por ${nameM}`);
            console.log(
              `${hero.name} percebeu que seu destino não é ser um herói.`
            );
            console.log(`
            FIM DE JOGO
            
            Recomendo treinar da próxima vez
            `);

            process.exit(1);
          }
        }
        console.log(`É a vez de ${hero.name}`);
        console.log(` ${hero.name} atacou!`);
        prompt("APERTE ENTER PARA CONTINUAR");
        if (combatD100 <= agiM) {
          console.log(` ${nameM} conseguiu se desviar!`);
          prompt("APERTE ENTER PARA CONTINUAR");
        } else {
          dmg = hero.str - defM;
          if (dmg <= 0) {
            dmg = 0;
          }
          console.log(`${hero.name} acertou!`);
          prompt("APERTE ENTER PARA CONTINUAR");
          lifeM = lifeM - dmg;
          if (lifeM <= 0) {
            console.log(
              `${hero.name} derrotou ${nameM} e ganhou ${xp} de experiência!`
            );
            hero.experiencie(xp);
            prompt("APERTE ENTER PARA CONTINUAR");
            break;
          }
        }
        prompt(`
    ${hero.name}: ${hero.life}/ ${hero.lifeT}
    ${nameM}:     ${lifeM}/${lifeMT}
    APERTE ENTER PARA CONTINUAR
    `);
      }
    } while (hero.life != 0);
  }


  function firstDay() {
    console.log(
      `${hero.name}, um jovem garoto no auge da sua juventude, sempre sonhou em sair pelo mundo e se aventurar, desbravar o continente e ser um grande herói. Para isso ele resolveu começar o seu treinamento pelo reino.`
    );
    console.log(
      "Após passar toda a primeira parte da manhã planejando onde começaria seus primeiros passos para ser um herói, ele decidiu iniciar como um aventureiro e começar seu treinamento explorando a floresta nos arredores de sua casa, onde se sabia que existe certos mistérios que não foram resolvidos até hoje."
    );

    timeCourse.changeTime();
  }

  function training() {
    console.log(`Mas antes de sair em sua jornada, ${hero.name} resolve fazer o seu treino matinal. Qual treino você gostaria que ele realize:
  [1] Uma rotina de exercícios para treinar a força.
  [2] Uma rotina de exercícios para treinar a defesa.
  [3] Uma rotina de exercícios para treinar a agilidade.
  `);
    choice = +prompt();
    while (choice != 1 && choice != 2 && choice != 3) {
      console.log(
        "Digite novamente: 1 para força, 2 para destreza e 3 para agilidade."
      );
      choice = prompt();
    }
    if (choice == 1) {
      hero.strUp();
    } else if (choice == 2) {
      hero.defUp();
    } else if (choice == 3) {
      hero.agiUp();
    }

    timeCourse.changeTime();
  }

  // PRIMEIRA ÁREA
  function jungle() {
    console.log(
      `A floresta de Eldeth, é local rodeado de mistérios, onde só se conhece sua periferia, muitos tentaram explora-la mas ninguem nunca retornou com sucesso, alguns disseram que andaram por dias acreditando que nunca mais retornariam para suas famílias mas pelo acaso do destino, conseguiram sair daquela escuridão incessante, enquanto outros nunca mais retornaram. E é para esse local que ${hero.name} pretende começar sua aventura. 
    [1] Treinar caçando monstros ao redor da floresta. 
    [2] Explorar a periferia da floresta.
    [3] Explorar a parte mais profunda da floresta.
    `
    );
    let jChoice = +prompt();
    while (jChoice != 1 && jChoice != 2 && jChoice != 3) {
      console.log("DIGITE NOVAMENTE.");
      jChoice = +prompt();
    }
    if (jChoice == 1) {
      if (d100 > 67) {
        combat("Kobold", 10, 4, 6, 10, 31);
      } else if (d100 >= 34) {
        combat("Goblin", 10, 15, 6, 4, 31);
      } else if (d100 < 34) {
        combat("Hobgoblin", 10, 10, 9, 4, 30);
      }
      console.log(
        `Após um combate intenso ${hero.name} decide voltar para casa descansar e esperar pelo dia seguinte.`
      );
      prompt("APERTE ENTER PARA CONTINUAR");
      timeCourse.changeTime();
      return;
    } else if (jChoice == 2) {
      if (hero.items.includes("Marreta") == false) {
        console.log(`
    ${hero.name} passa algum tempo explorando a parte externa, até que ele encontra uma raposa muito fofa, correndo em uma direção específica na floresta.
    O que ele deve fazer?
    [1] Ignorar a raposa e continuar explorando.
    [2] Perseguir ela, para ver se ela pode ir em algum lugar interessante.
    `);
        let anwser1 = +prompt();
        while (anwser1 != 1 && anwser1 != 2) {
          console.log("DIGITE NOVAMENTE.");
          anwser1 = +prompt();
        }
        if (anwser1 == 1) {
          console.log(
            `Após horas procurando explorando em vão, ${hero.name} decidiu ir para casa descansar.`
          );
          timeCourse.changeTime();
          return;
        } else if (anwser1 == 2) {
          console.log(`Após um tempo seguindo a raposa, é econtrada uma marreta com a ponta prateada encostada em uma árvore e ${hero.name} sente que ela pode ser útil mais tarde e decide guarda-la e voltar para sua casa. Mas antes de ir embora ele acaricia a raposa que fica muito contente e volta para sua toca. 
      `);
          hero.addItems("Marreta");
          timeCourse.changeTime();
          return;
        }
      } else {
        console.log(`
        Após ${hero.name} explorar por um tempo essa área novamente, ficou convencido que já explorou tudo que podia nessa área.
        `);
        timeCourse.changeTime();
      }
    } else if (jChoice == 3) {
      console.log(`
    Ao adentrar  no interior da floresta, a mata começa a ficar mais densa, com o tempo a estrada que era havia para o guiar o caminha acaba, mas ${hero.name} continua em frente os raios de luz começam a desaparecer sobrando apenas pequenos filetes de luz, deixando-o desnorteado para qual caminho ele deve seguir
    `);
      prompt("APERTE ENTER PARA CONTINUAR");
      console.log(`
    ${hero.name} percebe que está perdido mas sente que há algo no fundo da floresta, como se estivesse o chamando. 
    `);

      do {
        console.log(`
      .
      ..
      ...
    Passou algum tempo em que ele está divagando, qual caminho ele deve tomar a seguir?
    [1] Sul
    [2] Oeste
    [3] Norte
    [4] Leste
    `);
        direction = +prompt();
      } while (direction != 4);

      console.log(`
    Após andar por algum tempo, os feixes de luz começam a se juntar de de maneira quase que armoniosa em um local a uns 500 metros de distância, em uma espada de empunhadura de ouro e lâmina prateada. Ao se aproximar derrepende ele econtra surgindo das sombras um Troll que estava nos arredores e é a única coisa que separa ${hero.name} daquela maravilhosa espada.
    `);

      combat("Troll", 50, 30, 6, 9, 50);

      console.log(`
      A luta contra o troll foi muito intensa, mas satifatória pois próximo ao troll havia um equipamento de guerreiro que provavelmente era de alguma pobre alma que ali pereceu. 
    ${hero.name} sente que cresceu como um aventureito, e agora consegue retirar com sucesso a espada que estava infincada no chão, e parece que ao impunha-la parece estar mais poderoso`);
      area = "area2";
      hero.reputationUp(5);
      hero.addEquipment(
        "Elmo do guerreiro",
        "Armadura do guerreiro",
        "Calças do guerreiro",
        "Espada Mágica"
      );
      hero.strUp(5);
      hero.defUp(3);
      hero.agiUp(3);
      timeCourse.changeTime();
      prompt("APERTE ENTER PARA CONTINUAR");
      return;
    }
  }

  // SEGUNDA ÁREA
  function town() {
    if (j == 1){ 
    console.log(`
  Revigorado com seus novos equipamentos, ${hero.name} decide ir para a capital procurar por tarefas para ajudar outras pessoas e ficar cada vez mais próximo do seu sonho de ser um herói.
  `);
    if (hero.reputation < 5) {
      console.log(`
    Ao chegar na cidade ${hero.name} percebe que as pessoas estão o evitando, e o olhando com rancor, então ele reflete que eles sabem que ele não tomou uma atitude digna de um herói.
    `);
      prompt("APERTE ENTER PARA CONTINUAR");
    } else if (hero.reputation >= 5) {
      console.log(`
    Ao chegar na cidade ${hero.name}, fica deslumbrado com as pessoas andando de um lado para o outro em um ritmo deslumbrante, e ele percebe que as pessoas o olham com ternura fazendo com que ele se sinta acolhido naquele local.
    `);
      prompt("APERTE ENTER PARA CONTINUAR");
    }
    j++
  } 
    console.log(`
  Ao ir se aproximando do centro da cidade, ele começa a perceber que as pessoas estão nervosas e assustadas, até que encontra um soldado mais a frente gravemente ferido. Ele lhe conta que as vilas bárbaras que habitam nas proximades se uniram e na noite consiguiram se infiltrar no castelo de maneira furtiva e o tomaram, fazendo o rei e a rainha de reféns.
  `);
    console.log(`
  Que decisão ${hero.name} deve tomar?`);

    if (hero.items.includes("Marreta") == false) {
      console.log(`
    [1] Ajudar a pessoas que estão precisando de ajuda ao redor do castelo.
    [2] Invadir o castelo pela frente.
    `);
      tChoice = +prompt();

      while (tChoice != 1 && tChoice != 2) {
        console.log("DIGITE NOVAMENTE.");
        tChoice = +prompt();
      }
    } else if (hero.items.includes("Marreta") == true) {
      console.log(`
      [1] Ajudar a pessoas que estão precisando de ajuda ao redor do castelo.
      [2] Invadir o castelo pela frente.
      [3] Andar furtivamente ao redor do castelo.
      `);
      tChoice = +prompt();

      while (tChoice != 1 && tChoice != 2 && tChoice != 3) {
        console.log("DIGITE NOVAMENTE.");
        tChoice = +prompt();
      }
    }

    if (tChoice == 1) {
      if (hero.items.includes("Mapa") == false) {
        console.log(`
      ${hero.name} passa a tarde ajudando as pessoas que foram feridas pelos bárbaros e coletando informações, um dos soldados passa a confiar nele e o entrega o mapa do castelo. Agora só falta se preparar para a batalha.
      `);
        hero.addItems("Mapa");
        hero.reputationUp(2);
        timeCourse.changeTime();
      } else if (hero.items.includes("Mapa") == true) {
        console.log(`
        ${hero.name} já fez o que devia fazer, e gastou o resto do tempo se preparando mentalmente para a luta contra os bárbaros.
        `);
        timeCourse.changeTime();
      }
    } else if (tChoice == 2) {
      console.log(` 
      ${hero.name} vai para frente da entrada do castelo e desafia o soldado bárbaro que está protegendo a entrada.
      `);

      combat("Soldado bárbaro", 50, 33, 9, 11, 50);

      console.log(`
      Após uma luta árdua ele segue em frente. 
      `);

      if (hero.items.includes("Mapa") == true) {
        console.log(`
        Antes de seguir em frente ele abre o mapa e verifica que o caminho mais próximo para chegar na sala do trono é:
        1º NORTE
        2º LESTE
        3º NORTE
        `);

        prompt("APERTE ENTER PARA CONTINUAR");
      }

      console.log(`Ao entrar no castelo, ele se encontra no salão de entrada contendo 3 portas
      Qual caminho ${hero.name} deve seguir?
      [1] NORTE
      [2] OESTE
      [3] LESTE
      `);
      let castle1 = +prompt();

      while (castle1 != 1) {
        console.log(`
        Parece que essa porta não leva a sala do trono, mas um bárbaro foi avistado.
        `);

        combat("bárbaro", 25, 25, 6, 11, 30);

        console.log(`
      Qual caminho ${hero.name} deve seguir?
      [1] NORTE
      [2] OESTE
      [3] LESTE
      `);
        castle1 = +prompt();
      }

      console.log(`
      Entrou na sala correta, mas parece que temos que enfrentar um bárbaro antes de escolher pelo próximo caminho.
      `);
      combat("bárbaro", 25, 25, 6, 11, 30);

      console.log(`
      O bárbaro foi derrotado, agora ele deve escolher entre duas portas.
      Qual caminho ${hero.name} deve seguir?
      [1] OESTE
      [2] LESTE
      `);
      let castle2 = +prompt();

      while (castle2 != 2) {
        console.log(`
        Parece que essa porta não leva a sala do trono, mas um bárbaro foi avistado.
        `);

        combat("bárbaro", 25, 25, 6, 11, 30);

        console.log(`
      Qual caminho ${hero.name} deve seguir?
      [1] OESTE
      [2] LESTE
      `);
        castle2 = +prompt();
      }

      console.log(`
      Entrou em mais uma sala correta, mas terá que derrotar outro bárbaro que estava ocupando guardando aquele lugar.
      `);

      combat("bárbaro", 25, 25, 6, 11, 30);

      console.log(`
      Mais um bárbaro foi derrotado, e agora ele deve escolher entre 3 portas.
      Qual caminho ${hero.name} deve seguir?
      [1] OESTE
      [2] LESTE
      [3] NORTE
      `);
      let castle3 = +prompt();

      while (castle3 != 3) {
        console.log(`
        Parece que essa porta não leva a sala do trono, mas um bárbaro foi avistado.
        `);

        combat("bárbaro", 25, 25, 6, 11, 30);

        console.log(`
      Qual caminho ${hero.name} deve seguir?
      [1] OESTE
      [2] LESTE
      [3] NORTE
      `);
        castle3 = +prompt();
      }

      console.log(`
      ${hero.name} Finalmente conseguiu chegar na sala do trono e apenas o Rei Bárbaro falta ser derrotado para o reino ser salvo.
      `);

      combat("Rei Bárbaro", 100, 45, 9, 15, 100);

      console.log(`
      Graças a ${hero.name} o reino foi salvo e sua bravura foi cantada aos quatro ventos.
      `);
      hero.reputationUp(5);
      timeCourse.changeTime();
      game = false;
    } else if (tChoice == 3) {
      console.log(`
        ${hero.name} de maneira furtiva, começa a observar os arredores do castelo, e conforme ele vai andando ele econtrar uma brecha no muro o que permite que uma passagem, e provavelmente foi por lá que os bárbaros invadiram o castelo. Assim, após passar pelo muro, ele continua seu caminho furtivo pelo castelo, olhando de janela em janela onde pode ser que o Rei e a Rainha estão, até encontralos.
      `);
      console.log();
      prompt("APERTE ENTER PARA CONTINUAR");

      console.log(`
      Indentificando a localização deles, ${hero.name} olha intensamente para sua marreta que e decide usa-la para derrubar a parede que separa ele e o casal real.

      Derrubando a parede a única pessoa que separa de salva-los é o Rei Bárbaro.
      `);

      combat("Rei Bárbaro", 100, 25, 9, 15, 100);

      console.log(`
      Graças a ${hero.name} o reino foi salvo e sua bravura foi cantada aos quatro ventos.
      `);
      hero.reputationUp(5);
      timeCourse.changeTime();

      //Variável que controla o jogo, quando definida falsa, o jogo vai se encerrar.
      game = false;
    }
  }

  while (game) {
   
    d100 = dado(1,100);

    // AMANHECENDO
    if (timeCourse.time == "Dawn") {
      if (day == 1) {
        firstDay();
      } else if (day > 1) {
        console.log(
          `Após descansar a noite toda ${hero.name} suas forças e está pronto(a) para mais um dia`
        );
        timeCourse.changeTime();
      }
    }

    // PERÍODO DA MANHÃ
    if (timeCourse.time == "Morning") {
      training();
    }

    //PERÍODO DA TARDE
    if (timeCourse.time == "Afternoon") {
      if (area == "area1") {
        jungle();
      } else if (area == "area2") {
        town();
      }
     if (game == false){
       break
     }
    }

    // COMEÇO DA NOITE
    if (timeCourse.time == "Evening") {
      if (d100 > 75) {
        //evento 1
        console.log(`
      ${hero.name} está voltando para a sua casa e encontra uma senhora perdida no caminho carregando muito peso.
      Qual opção você escolhe:
      [1] Ajuda ela a voltar para casa.
      [2] Finge que não viu e continua seu trajeto.
      [3] Derruba seus pertences e sai correndo.
      `);
        let anwser = +prompt();
        while (choice != 1 && choice != 2 && choice != 3) {
          console.log("Tente novamente.");
        }
        if (anwser == 1) {
          console.log(
            `${hero.name} acompanhou a senhora até a casa dela, que ficou muito agradecida.`
          );
          hero.reputationUp(1);
        } else if (anwser == 2) {
          console.log(
            `A senhora ficou o encarando com olhos de que ansiavam por ajuda, e na medida que você se afastava uma lágrima de tristeza escorreu pelo rosto dela.`
          );
          hero.reputationUp(-1);
        } else if (anwser == 3) {
          console.log(
            " Ela ficou furiosa com a sua atitude, correu alguns metros atrás de você antes de cair e tropeçar no chão, certamente essa não é a atitude que um herói não devia tomar."
          );
          hero.reputationUp(-3);
        }
      } else if (d100 > 50) {
        console.log(`
      No caminho, ${hero.name} encontrou um lenhador que precisava de ajuda para terminar seu serviço o quanto antes, já que estava escurecendo.
      Qual opção você escolhe:
      [1] ${hero.name} deve ajudar o lenhador com seu serviço.
      [2] Falar que não entende nada sobre cortar árvores e continuar seu caminho.
      [3] Pegar o machado do lenhador e jogar para bem longe.
      `);
        let anwser = +prompt();
        while (anwser != 1 && anwser != 2 && anwser != 3) {
          console.log("Tente novamente.");
          anwser = +prompt();
        }
        if (anwser == 1) {
          console.log(
            `O Lenhador ficou muito feliz com sua ajuda, e contente que sonseguiu voltar mais cedo para ver sua família hoje.`
          );
          hero.reputationUp(1);
        } else if (anwser == 2) {
          console.log(
            `Entendendo a sua recusa, ele não continuou insistindo, apesar de ficar bem desapontado`
          );
          hero.reputationUp(-1);
        } else if (anwser == 3) {
          console.log(
            "O lenhador ficou furioso e te revidou um soco na cara antes de você sair correndo. Essa não é uma atitude que um herói tomaria."
          );
          hero.reputationUp(-3);
          hero.damage(10);
        }
      } else {
        console.log(` 
      Nada de incomum aconteceu no caminho de volta hoje
      `);
      }
      timeCourse.changeTime();
    }

    // FIM DA NOITE e consequentemente FIM DO DIA
    if (timeCourse.time == "Night") {
      day++;
      timeCourse.changeTime();
      //Ao término do dia, o personagem vai descansar e recuperar a sua vida.
      hero.sleep();
      hero.status();
      prompt("APERTE ENTER PARA CONTINUAR");
    }
  }

  if (hero.reputation >= 12) {
    console.log(
      `${hero.name} fez suas tarefas de forma majestosa, e agora todos do reino o consideram um herói em ascensão.
      
      Você concluiu a história em ${day} dias.
      `);
      prompt(' Aperte ENTER para ver a janela de status final do seu personagem.');

      hero.status()
  } else if (hero.reputation >= 7) {
    console.log(
      `${hero.name} conseguiu concluir suas tarefas e salvou o reino, mas ainda há como melhorar para ser um herói.
      
      Você concluiu a história em ${day} dias.
      `);
      prompt(' Aperte ENTER para ver a janela de status final do seu personagem.');

      hero.status()
  } else {
    console.log(
      `${hero.name} salvou o reino, mas ainda tem um longo caminho para ser um herói. 
      
      Você concluiu a história em ${day} dias. 
      `);
      prompt(' Aperte ENTER para ver a janela de status final do seu personagem.');

      hero.status()
  }

console.log()

  playAgain = prompt(" Deseja jogar novamente? sim ou nao?").toLowerCase();
} while (playAgain == "sim");
