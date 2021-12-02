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