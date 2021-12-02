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
    case 'mang':
      break;
    case 'man':
      break;
    case 'mam':
      break;
    case 'i':
      break;
    case 'inhin':
      break;
    case 'anhan':
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