/* The conjugations */
var UmConjugation = {
  doNeutral   : function() {
    if (rootIndex === 0) {
      neutralResult = 'um' + rootWord;
    } else if (rootIndex === 1) {
      neutralResult = rootWord.charAt(0) + 'um' + rootWord.substring(1);
    } else {
      neutralResult = 'invalid root';
    }
  },
  doPast      : function() {
    if (rootIndex === 0) {
      pastResult = 'um' + rootWord;
    } else if (rootIndex === 1) {
      pastResult = rootWord.charAt(0) + 'um' + rootWord.substring(1);
    } else {
      pastResult = 'invalid root';
    }
  },
  doPresent   : function() {
    if (rootIndex === 0) {
      presentResult = 'um' + rootWord.charAt(0) + rootWord;
    } else if (rootIndex === 1) {
      presentResult = rootWord.charAt(0) + 'um' + rootWord.charAt(1) + rootWord;
    } else {
      presentResult = 'invalid root';
    }
  },
  doFuture    : function() {
    if (rootIndex === 0) {
      futureResult = rootWord.charAt(0) + rootWord;
    } else if (rootIndex === 1) {
      futureResult = rootWord.substring(0, 2) + rootWord;
    } else {
      futureResult = 'invalid root';
    }
  }
};

var MagConjugation = {
  doNeutral   : function() {
    if (rootIndex === 0) {
      neutralResult = 'mag-' + rootWord;
    } else if (rootIndex === 1) {
      neutralResult = 'mag' + rootWord;
    } else {
      neutralResult = 'invalid root';
    }
  },
  doPast      : function() {
    if (rootIndex === 0) {
      pastResult = 'nag-' + rootWord;
    } else if (rootIndex === 1) {
      pastResult = 'nag' + rootWord;
    } else {
      pastResult = 'invalid root';
    }
  },
  doPresent   : function() {
    if (rootIndex === 0) {
      presentResult = 'nag-' + rootWord.charAt(0) + rootWord;
    } else if (rootIndex === 1) {
      presentResult = 'nag' + rootWord.substring(0, 2) + rootWord;
    } else {
      presentResult = 'invalid root';
    }
  },
  doFuture    : function() {
    if (rootIndex === 0) {
      futureResult = 'mag-' + rootWord.charAt(0) + rootWord;
    } else if (rootIndex === 1) {
      futureResult = 'mag' + rootWord.substring(0, 2) + rootWord;
    } else {
      futureResult = 'invalid root';
    }
  }
};

var MaConjugation = {
  doNeutral   : function() {
    if (rootIndex === 0 || rootIndex == 1) {
      neutralResult = 'ma' + rootWord;
    } else {
      neutralResult = 'invalid root';
    }
  },
  doPast      : function() {
    if (rootIndex === 0 || rootIndex === 1) {
      pastResult = 'na' + rootWord;
    } else {
      pastResult = 'invalid root';
    }
  },
  doPresent   : function() {
    if (rootIndex === 0) {
      presentResult = 'na' + rootWord.charAt(0) + rootWord;
    } else if (rootIndex === 1) {
      presentResult = 'na' + rootWord.substring(0, 2) + rootWord;
    } else {
      presentResult = 'invalid root';
    }
  },
  doFuture    : function() {
    if (rootIndex === 0) {
      futureResult = 'ma' + rootWord.charAt(0) + rootWord;
    } else if (rootIndex === 1) {
      futureResult = 'ma' + rootWord.substring(0, 2) + rootWord;
    } else {
      futureResult = 'invalid root';
    }
  }
};

let rootWord = '';
let rootIndex = -1;

let neutralResult = 'invalid root';
let pastResult = 'invalid root';
let presentResult = 'invalid root';
let futureResult = 'invalid root';

let mode = UmConjugation;

/* root type selection */
let radios = document.getElementsByName('conjugationtype');
function setMode(event) {
  switch (event.target.value) {
    case 'um':
    default:
      mode = UmConjugation;
      break;
    case 'mag':
      mode = MagConjugation;
      break;
    case 'ma':
      mode = MaConjugation;
      break;
  }
  doConjugationAndUpdate();
}
for (let i = 0; i < radios.length; i++) {
  radios[i].addEventListener('change', setMode);
}

/* input listening */
let inputField = document.getElementsByName('inputfield');
inputField[0].addEventListener('input', function(event) {
  rootWord = inputField[0].value;
  doConjugationAndUpdate();
});

/* root index */
const rootIndexRegex = /[aeiouAEIOU]/;
function getRootIndex() {
  if (rootWord.length <= 1) {
    rootIndex = -1;
    return;
  }

  let found = rootWord.match(rootIndexRegex);
  if (!found) {
    rootIndex = -1;
  } else {
    rootIndex = found.index;
  }
}

/* update functions */
// Modify this later if we add new conjugations
function doConjugationAndUpdate() {
  getRootIndex(rootWord, rootIndex);
  switch (rootIndex) {
    case 0:
    case 1:
      conjugate();
      updateResultFields();
      break;
    default:
      invalidateResult();
      break;
  }
}

function invalidateResult() {
  neutralResult = 'invalid root';
  pastResult = 'invalid root';
  presentResult = 'invalid root';
  futureResult = 'invalid root';
  updateResultFields();
}

function updateResultFields() {
  document.getElementsByName('neutralfield')[0].value = neutralResult;
  document.getElementsByName('pastfield')[0].value = pastResult;
  document.getElementsByName('presentfield')[0].value = presentResult;
  document.getElementsByName('futurefield')[0].value = futureResult;
}

/* conjugation functions */
function conjugate() {
  mode.doNeutral();
  mode.doPast();
  mode.doPresent();
  mode.doFuture();
}