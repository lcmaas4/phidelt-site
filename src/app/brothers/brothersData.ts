export type Brother = {
  name: string;
  src: string;
  alt: string;
  role?: string;
};

export type Class = {
  symbol: string;
  brothers: Brother[];
};

export const execBoard: Brother[] = [
  {
    name: "Daniel Ciejek",
    role: "President",
    src: "/composites/303ciejek.jpg",
    alt: "Ciejek",
  },
  {
    name: "Ashton Daniels",
    role: "Vice President",
    src: "/composites/304daniels.jpg",
    alt: "Daniels",
  },
  {
    name: "Connor Oates",
    role: "VP of Standards",
    src: "/composites/321oates.jpg",
    alt: "Oates",
  },
  {
    name: "Zach Ferdico",
    role: "VP of Brotherhood",
    src: "/composites/306ferdico.jpg",
    alt: "Ferdico",
  },
  {
    name: "Oliver Cooke",
    role: "VP of Finance",
    src: "/composites/317cooke.jpg",
    alt: "Cooke",
  },
  {
    name: "Justin Zahler",
    role: "VP of Socials",
    src: "/composites/314zahler.jpg",
    alt: "Zahler",
  },
  {
    name: "Andrew Dubanowitz",
    role: "VP of Community",
    src: "/composites/318dubanowitz-a.jpg",
    alt: "A Dubanowitz",
  },
  {
    name: "Reece DiGiacomo",
    role: "Secretary",
    src: "/composites/305digiacomo.jpg",
    alt: "DiGiacomo",
  },
  {
    name: "Bobby Goyette",
    role: "Phikeia Educator",
    src: "/composites/308goyette.jpg",
    alt: "Goyette",
  },
  {
    name: "Andrew Ow",
    role: "Recruitment Chairman",
    src: "/composites/299ow.jpg",
    alt: "Ow",
  },
];

export const council: Brother[] = [
  {
    name: "Arnav Sharma",
    role: "Risk Management Chairman",
    src: "/composites/311sharma.jpg",
    alt: "Sharma",
  },
  {
    name: "Teddy Gray",
    role: "Warden",
    src: "/composites/293gray.jpg",
    alt: "Gray",
  },
  {
    name: "Conor Kilcullen",
    role: "Alumni Secretary",
    src: "/composites/9kilcullen.jpg",
    alt: "Kilcullen",
  },
  {
    name: "Jack Marino",
    role: "Chaplain",
    src: "/composites/298marino.jpg",
    alt: "Marino",
  },
  {
    name: "Carter Olson",
    role: "Public Relations Chairman",
    src: "/composites/340olson.jpg",
    alt: "Olson",
  },
  {
    name: "Mason Dubanowitz",
    role: "Scholarship Co-Chairman",
    src: "/composites/272dubanowitz-m.jpg",
    alt: "M Dubanowitz",
  },
  {
    name: "Andreas Gesser",
    role: "Scholarship Co-Chairman",
    src: "/composites/307gesser.jpg",
    alt: "Gesser",
  },
  {
    name: "Gaurav Koratagere",
    role: "Philanthropy Chairman",
    src: "/composites/335koratagere.jpg",
    alt: "Koratagere",
  },
  {
    name: "Jake Eisner",
    role: "Community Service Chairman",
    src: "/composites/331eisner.jpg",
    alt: "Eisner",
  },
  {
    name: "Mitchell Petrecca",
    role: "Chorister",
    src: "/composites/341petrecca.jpg",
    alt: "Petrecca",
  },
  {
    name: "Theo Smith",
    role: "Awards Chairman",
    src: "/composites/325smith.jpg",
    alt: "Smith",
  },
  {
    name: "Grey Vachon",
    role: "SVP Chairman",
    src: "/composites/313vachon.jpg",
    alt: "Vachon",
  },
  {
    name: "Vivek Singh",
    role: "Merchandise Chairman",
    src: "/composites/343singh.jpg",
    alt: "Singh",
  },
  {
    name: "Ben Irvine",
    role: "DEI Chairman",
    src: "/composites/309irvine.jpg",
    alt: "Irvine",
  },
];

export const classes: Class[] = [
  {
    symbol: "Ω",
    brothers: [
      { name: "Vivek Singh", src: "/composites/343singh.jpg", alt: "Singh" },
      {
        name: "Maximum Schaefer",
        src: "/composites/342schaefer-m.jpg",
        alt: "M Schaefer",
      },
      {
        name: "Mitchell Petrecca",
        src: "/composites/341petrecca.jpg",
        alt: "Petrecca",
      },
      { name: "Carter Olson", src: "/composites/340olson.jpg", alt: "Olson" },
      {
        name: "Dante Maravell",
        src: "/composites/339maravell.jpg",
        alt: "Maravell",
      },
      { name: "Brad Lyon", src: "/composites/338lyon-b.jpg", alt: "Lyon" },
      { name: "Justin Liao", src: "/composites/337liao-2.jpg", alt: "Liao 2" },
      { name: "Matt Lawson", src: "/composites/336lawson.jpg", alt: "Lawson" },
      {
        name: "Gaurav Koratagere",
        src: "/composites/335koratagere.jpg",
        alt: "Koratagere",
      },
      { name: "Maximum Kirk", src: "/composites/334kirk.jpg", alt: "Kirk" },
      { name: "Marty Graw", src: "/composites/333graw.jpg", alt: "Graw" },
      { name: "Etienne Groom", src: "/composites/332groom.jpg", alt: "Groom" },
      {
        name: "Jake Queefner",
        src: "/composites/331eisner.jpg",
        alt: "Eisner",
      },
      {
        name: "Nick Cortese",
        src: "/composites/330cortese.jpg",
        alt: "Cortese",
      },
      {
        name: "Noel Burra",
        src: "/composites/329burra-noel.jpeg",
        alt: "Noel Burra",
      },
      {
        name: "Maximum Brothers",
        src: "/composites/328brothers.jpeg",
        alt: "Brothers",
      },
      { name: "Nate Beland", src: "/composites/327beland.jpeg", alt: "Beland" },
    ],
  },
  {
    symbol: "Ψ",
    brothers: [
      {
        name: "Griffin Wright",
        src: "/composites/326wright.jpg",
        alt: "Wright",
      },
      { name: "Theo Smith", src: "/composites/325smith.jpg", alt: "Smith" },
      {
        name: "Marco Sciamanda",
        src: "/composites/324sciamanda.jpg",
        alt: "Sciamanda",
      },
      {
        name: "Satvik Repaka",
        src: "/composites/323repaka.jpg",
        alt: "Repaka",
      },
      {
        name: "Mike Pirozzi",
        src: "/composites/322pirozzi.jpg",
        alt: "Pirozzi",
      },
      { name: "Connor Oates", src: "/composites/321oates.jpg", alt: "Oates" },
      { name: "JT Liao", src: "/composites/320liao.jpg", alt: "JT Liao" },
      {
        name: "Jack Haythorn",
        src: "/composites/319haythorn.jpg",
        alt: "Haythorn",
      },
      {
        name: "Andrew Dubanowitz",
        src: "/composites/318dubanowitz-a.jpg",
        alt: "A Dubanowitz",
      },
      {
        name: "Andrew D'Avanzo",
        src: "/composites/317d'avanzo.jpg",
        alt: "D'Avanzo",
      },
      { name: "Oliver Cooke", src: "/composites/317cooke.jpg", alt: "Cooke" },
      {
        name: "Dan Cibbarelli",
        src: "/composites/316cibbarelli.jpg",
        alt: "Cibbarelli",
      },
      {
        name: "Tej Chakravarthy",
        src: "/composites/315chakravarthy.jpg",
        alt: "Chakravarthy",
      },
    ],
  },
  {
    symbol: "Χ",
    brothers: [
      { name: "Aiden Sprole", src: "/composites/312sprole.jpg", alt: "Sprole" },
      { name: "Ethan Oh", src: "/composites/310oh.jpg", alt: "Oh" },
      { name: "Xander Au", src: "/composites/302au.jpg", alt: "Au" },
    ],
  },
  {
    symbol: "Φ",
    brothers: [
      {
        name: "Matt Shields",
        src: "/composites/301shields.jpg",
        alt: "Shields",
      },
      { name: "Ishaan Vora", src: "/composites/300vora.jpg", alt: "Vora" },
      { name: "Diego Klish", src: "/composites/297klish.jpg", alt: "Klish" },
      { name: "Wes Rising", src: "/composites/296rising.jpg", alt: "Rising" },
      {
        name: "James Jankunas",
        src: "/composites/295jankunas.jpg",
        alt: "Jankunas",
      },
      { name: "Nick Hughes", src: "/composites/294hughes.jpg", alt: "Hughes" },
      {
        name: "Jorge Gutierrez",
        src: "/composites/292gutierrez.jpg",
        alt: "Gutierrez",
      },
      {
        name: "Matt Gonzalez",
        src: "/composites/291gonzalez.jpg",
        alt: "Gonzales",
      },
      { name: "Jake Grim", src: "/composites/290grim.jpg", alt: "Grim" },
      { name: "Sam Foley", src: "/composites/289foley.jpg", alt: "Foley" },
      { name: "Dan Fifolt", src: "/composites/288fifolt.jpg", alt: "Fifolt" },
      { name: "Alex Dagher", src: "/composites/287dagher.jpg", alt: "Dagher" },
      {
        name: "Taj Clachar",
        src: "/composites/286clachar.jpeg",
        alt: "Clachar",
      },
      {
        name: "Kirk Chayevsky",
        src: "/composites/285chayevsky.jpg",
        alt: "Chayevsky",
      },
      {
        name: "Sam Barrett",
        src: "/composites/284barrett.jpg",
        alt: "Barrett",
      },
      {
        name: "Jack Anderson",
        src: "/composites/283anderson.jpg",
        alt: "Anderson",
      },
    ],
  },
  {
    symbol: "Υ",
    brothers: [
      {
        name: "Andre Vignier",
        src: "/composites/282vignier.jpg",
        alt: "Vignier",
      },
      { name: "Luka Okuzu", src: "/composites/281okuzu.jpg", alt: "Okuzu" },
      {
        name: "Cooper Norton",
        src: "/composites/280norton.jpg",
        alt: "Norton",
      },
      {
        name: "Hari Narayanam",
        src: "/composites/279narayanam.jpg",
        alt: "Narayanam",
      },
      {
        name: "James Middleton",
        src: "/composites/278middleton.jpg",
        alt: "Middleton",
      },
      {
        name: "Max Manganiello",
        src: "/composites/277manganiello.jpg",
        alt: "Manganiello",
      },
      { name: "Louie Maas", src: "/composites/276maas.jpg", alt: "Maas" },
      { name: "Aidan Lareau", src: "/composites/275lareau.jpg", alt: "Lareau" },
      { name: "Jackson Jones", src: "/composites/274jones.jpg", alt: "Jones" },
      { name: "Josh Cohen", src: "/composites/271cohen.jpg", alt: "Cohen" },
      { name: "Ian Carter", src: "/composites/270carter.jpg", alt: "Carter" },
      {
        name: "Martin Androssenko",
        src: "/composites/269androssenko.jpg",
        alt: "Androssenko",
      },
    ],
  },
  {
    symbol: "Τ",
    brothers: [
      {
        name: "Justin Vassallo",
        src: "/composites/268vassallo.jpg",
        alt: "Vassallo",
      },
      {
        name: "Alex Turkienicz",
        src: "/composites/266turkienicz.jpg",
        alt: "Turkienicz",
      },
      { name: "Leo Pruthi", src: "/composites/16pruthi.jpg", alt: "Pruthi" },
      { name: "Dylan Perez", src: "/composites/15perez.jpg", alt: "Perez" },
      {
        name: "Dhillon Murphy",
        src: "/composites/14murphy.jpg",
        alt: "Murphy",
      },
      { name: "Ben Metzger", src: "/composites/13metzger.jpg", alt: "Metzger" },
      {
        name: "Ben Goldfarb",
        src: "/composites/12goldfarb.jpg",
        alt: "Goldfarb",
      },
      { name: "Jack Leach", src: "/composites/11leach.jpg", alt: "Leach" },
      { name: "Lucas Deeb", src: "/composites/10deeb.jpg", alt: "Deeb" },
    ],
  },
  {
    symbol: "Σ",
    brothers: [
      {
        name: "Aiden Szewczyk",
        src: "/composites/3szewczyk.jpg",
        alt: "Szewczyk",
      },
      { name: "Chris Keaney", src: "/composites/8keaney.jpg", alt: "Keaney" },
      { name: "Nate Casey", src: "/composites/7casey.jpg", alt: "Casey" },
      {
        name: "Joe Grammatica",
        src: "/composites/6grammatica.jpg",
        alt: "Grammatica",
      },
      {
        name: "Mike Stottlemeyer",
        src: "/composites/5stottlemeyer.jpg",
        alt: "Stottlemeyer",
      },
      { name: "Jake Carlson", src: "/composites/4carlson.jpg", alt: "Carlson" },
      { name: "Jack Conger", src: "/composites/1conger.jpg", alt: "Conger" },
      {
        name: "Jake Blachford",
        src: "/composites/2blachford.jpeg",
        alt: "Blachford",
      },
    ],
  },
];
