// output html

$(document).ready(function() {

  const fieldCodes = [
    'W', 'U', 'B', 'R', 'G'
  ]

  const cardTypes = [
    'terre',
    'creature',
    'incantesimi',
    'artefatti',
    'instantanei',
    'stregonerie'
  ];


  const powerValues = [1,2,3,4,5];
// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
  const editions = {

    'BL': {
        edition: 'Boolean',
        rarity: 'blue'
    },

    'SP': {
        edition: 'Special',
        rarity: 'red'
    }

  }


  const cards = [{

// prima carta --------------------------------
    cardName: 'Grizzly Bears',

    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],  // 'W',  - un suo riferimento
        fieldCodes[2]   // 'B'
      ],
    },

    picture: 'images/i.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',

    score: {
      power: 2,  // filtrarlo per power
      toughness: 2
    }

  },


// seconda carta ---------------------------------
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,  // r
      toughness: 3
    }

  },


// terza carta -----------------------------------
  {

    cardName: 'Mewtwo',

    cost: {
      genericCostNumber: 6,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],
        fieldCodes[0],
        fieldCodes[0]
      ],
    },

    picture: 'images/mewtwo.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Pokemon',

    editionType: editions['BL'],

    description: 'Il potere della mente più forte del mondo',
    story: 'Il pokemon clonato dalla leggenda di Mew',

    score: {
      power: 5,  // r
      toughness: 5
    }

  },

// quarta carta ------------------------------------
  {

    cardName: 'Kelenvorita mascherato',

    cost: {
      genericCostNumber: 2,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],
        fieldCodes[2]
      ],
    },

    picture: 'images/kelenvorita.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Mezz\'orco',

    editionType: editions['SP'],

    description: 'quando arriva a 0 punti ferita acquista un punto ferita invece di finire al cimitero e recupera forza',
    story: 'Kelenvor predica la grigia ed imparziale giustizia della morte',

    score: {
      power: 1,  // r
      toughness: 4
    }

  },


// quinta carta ------------------------------------
  {

    cardName: 'carta trappola',

    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[1],
        fieldCodes[2]
      ],
    },

    picture: 'images/cartatrappola.png',  // da inserire immagine
    cardType: cardTypes[2],
    cardObject: 'Carta trappola',

    editionType: editions['SP'],

    description: 'Quando il nemico attacca, si attiva questa carta trappola, riducendo il danno inflitto del 90%',
    story: 'Questa carta è stata creata con lo scopo di far ragequittare il nemico',

    score: {
      power: 0,  // r
      toughness: 1
    }

  },

// sesta carta -------------------------------------
  {

    cardName: 'Cristallo della libertà',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[0]
      ],
    },

    picture: 'images/cristallo.png',  // da inserire immagine
    cardType: cardTypes[3],
    cardObject: 'Cristallo',

    editionType: editions['SP'],

    description: 'Il cristallo della libertà permette, all\'uso, di scongelare i tuoi alleati e di infliggere danni ai nemici ',
    story: 'Cristallo creato con le lacrime degli dei',

    score: {
      power: 0,  // r
      toughness: 0
    }
  }
  ];
  console.log(cards);

// funzione che filtra cercando il "power" -> "score" = al numero che gli abbiamo dato
  function filterByPower(powerValue, array) {

    return array.filter((element) => {
      return element.score.power === powerValue;
    });
  }
  console.log(' >>> CARTE FILTRATE PER POWER 3', filterByPower(5,cards));

// funzione che prende tutto l'array e lo inserisce in un LI
  function render(DOMElementId, array) {
    const cardListHTMLElement = document.getElementById(DOMElementId);
    cardListHTMLElement.innerHTML = '';

    array.forEach((element) => {
      cardListHTMLElement.innerHTML += `<li> ${element.cardName}</li>`;
    });
  }

// funzione per fare il select per valore potere
  function renderSelect(DOMElementId, array) {
    const select = document.getElementById(DOMElementId);

    array.forEach((element) => {
      select.innerHTML += `<option value=${element}> ${element} </option>`;
    });

  }
  render('listaCarte', cards);
  renderSelect('powerSelect', powerValues);


// eventi da registrare

  $("#powerSelect").change(function () {
    console.log('>> Power Select Change');
    const selectValue = parseInt($(this).val());
    const filteredArray = filterByPower(selectValue, cards);

    render('listaCarte', filteredArray);
  });
});
