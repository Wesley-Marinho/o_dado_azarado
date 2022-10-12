import randomItem from "random-item";

const dwarf_female = ["Amber", "Artin", "Audhild", "Bardryn", "Dagna", "Diesa", "Eldeth", "Falkrunn",
    "Finellen", "Gunkoda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa",
    "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra",],

  dwarf_male = ["Alberain ", "Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor",
    "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak",
    "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin",],

  dwarf_surname = ["Dwarny", "Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge",
    "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart",],

  elf_female = ["Lora", "Eveling", "Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua",
    "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth",
    "Keyleth", "Leshanna", "Lia", "Meriele", "Mialee", "Naivara", "Quelenna", "Quillathe",
    "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia",],

  elf_male = ["Elgoth", "Riardon", "Rolen", "Adran", "Aelar", "Aramil",
    "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan",
    "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian",
    "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Aelar",
    "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan",
    "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion",
    "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis",],

  elf_surname = ["Di Angelo", "Krokatun", "Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir",
    "Liadon", "Meliamne", "Nailo", "Siannodel", "Xiloscient",],

  gnome_female = ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell",
    "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil",
    "Tana", "Waywocket", "Zanna",],

  gnome_male = ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin",
    "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri",
    "Warryn", "Wrenn", "Zook",],

  gnome_surname = ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen",
    "Timbers", "Turen",],

  hobbit_female = ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla",
    "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna",],

  hobbit_male = ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle",
    "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby",],

  hobbit_surname = ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Lowe",
    "Tealeaf", "Thorngage", "Tosscobble", "Underbough",],

  human_female = ["Arveene", "Atala", "Ceidil", "Esvele", "Hama", "Jasmal", "Jhessail", "Kerri", "Lureene",
    "Meilil", "Miri", "Rowana", "Silka", "Shandri", "Tessele", "Yasheira", "Zasheida", "Alethra", "Kara", "Katernin",
    "Mara", "Natali", "Olma", "Tana", "Zora", "Amafrey", "Betha", "Cefrey", "Kethra", "Olga", "Silifrey", "Westra",
    "Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis", "Fyevarra", "Hulmarra",
    "Immith", "Imzel", "Navarra", "Shevarra", "Tammith", "Yuldra", "Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui",
    "Tai", "Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda", "Yue", "Jenn", "Hize",
    "Nostri", "Moriri", "Hizre", "Yafru", "Miam", "Hipah", "Mua", "Dei", "Bev", "Felmj", "Let", "Nue", "Celreh", "Rairra",
    "Ofal", "Relvarru", "Nala", "Callie", "Freia", "Meyla", "Gwendoline", "Gabrielle", "Denyse", "Mariella", "Freda",
    "Viktoria", "Joanna", "Aliya", "Frauwa", "Edolie", "Gwenivere",],

  human_male = ["Willun", "Opmet", "Aseir", "Bardeid", "Bor", "Darvin", "Dorn", "Evendur", "Fodel", "Gorstag", "Grim",
    "Haseid", "Helm", "Khemed", "Malark", "Mehmen", "Morn", "Randal", "Stedd", "Sudeiman", "Zasheir", "Glar", "Grigor", "Igan",
    "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor", "Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer",
    "Stor", "Taman", "Urth", "Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kuhur", "Thazar-De", "Urhur",
    "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak", "An", "Chen", "Chi", "Fai",
    "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen", "Anton", "Diero", "Marcon", "Pieron", "Rimardo",
    "Romero", "Salazar", "Umbero", "Seizem", "Hazum", "Rocredd", "Urstad", "Hirer", "En", "Ulder", "Gruth", "Thak-Mun-Duf",
    "Kumuen", "Hiem", "Sibebai", "Sibos", "Digrodd", "Fizal", "Vaf", "Streth", "Vilromij", "Rirdid", "Ornirvin", "Chedrel",
    "Kogen", "Gregom",],

  human_surname = ["Graybreard", "Zakar", "Amblecrown", "Basha", "Buckman", "Dumein", "Dundragon", "Evenwood", "Greycastle",
    "Jassan", "Khalid", "Mostana", "Pashar", "Rein", "Tallstag", "Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nametsk",
    "Shemov", "Starag", "Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver", "Ankhalab", "Anskuld",
    "Fezim", "Haphet", "Nathandem", "Sepret", "Uuthrakt", "Chergoba", "Dyernina", "Iltazyara", "Murnythara", "Stayanoga",
    "Ulmokina", "Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tan", "Wan", "Agron", "Astorio",
    "Calabra", "Domine", "Falone", "Marivaldi", "Pimandumv", "Ramondo", "Dhuhuror", "Shodal", "Seacleaver", "Starsk",
    "Glarnuv", "Sachob", "Evomrenzi", "Bagenzal", "Gisehur", "Passu", "Bhodar", "Mistoak", "Rorirsk", "Vathift", "Tugotvi",
    "Ahesqa", "Stodz", "Longsnout", "Gomitvi", "Reku", "Mishon", "Redwing", "Muryeva", "Damme", "Glowguard", "Cliffspark",
    "Mutsu", "Xing", "Stinorsk", "Vupraft", "Stuvzaku", "Destidron", "Marblesteam", "Gron", "Korkan", "Sildigin", "Bidruse",
    "Rakan", "Snowpike", "Nihle",],

  halfOrc_female = ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Suutha", "Vola",
    "Volen", "Yevelda",],

  halfOrc_male = ["Dench", "Gell", "Henk", "Hold", "Imsh", "Keth", "Krusk", "Mhurren",
    "Ront", "Shump", "Thokk",];

export function getName(Race: String, Gender: String) {
  let name = "";
  if (Gender === "Feminino") {
    if (Race === "Elfo") {
      name = randomItem(elf_female) + " " + randomItem(elf_surname);
    }
    if (Race === "Anão") {
      name = randomItem(dwarf_female) + " " + randomItem(dwarf_surname);
    }
    if (Race === "Gnomo") {
      name = randomItem(gnome_female) + " " + randomItem(gnome_surname);
    }
    if (Race === "Hobbit") {
      name = randomItem(hobbit_female) + " " + randomItem(hobbit_surname);
    }
    if (Race === "Humano") {
      name = randomItem(human_female) + " " + randomItem(human_surname);
    }
    if (Race === "Meio-elfo") {
      name = randomItem(elf_female) + " " + randomItem(human_surname);
    }
    if (Race === "Meio-orck") {
      name = randomItem(halfOrc_female);
    }
  } else {
    if (Race === "Elfo") {
      name = randomItem(elf_male) + " " + randomItem(elf_surname);
    }
    if (Race === "Anão") {
      name = randomItem(dwarf_male) + " " + randomItem(dwarf_surname);
    }
    if (Race === "Gnomo") {
      name = randomItem(gnome_male) + " " + randomItem(gnome_surname);
    }
    if (Race === "Hobbit") {
      name = randomItem(hobbit_male) + " " + randomItem(hobbit_surname);
    }
    if (Race === "Humano") {
      name = randomItem(human_male) + " " + randomItem(human_surname);
    }
    if (Race === "Meio-orck") {
      name = randomItem(halfOrc_male);
    }
    if (Race === "Meio-elfo") {
      name = randomItem(elf_male) + " " + randomItem(human_surname);
    }
  }

  return name;
}
