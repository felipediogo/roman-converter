const isNumberToBigToConvert = (number) => {
  if (number >= 4000) {
    throw new RangeError('the biggest number my master designed to convert is 3999, sorry!')
  }
};

const isNegative = (number) => {
  if (number < 0) {
    throw new RangeError('It\'s unknown how to convert negative numbers');
  }
};

const isZero = (number) => {
  if (number === 0) {
    throw new RangeError('It\'s unknown how to convert the zero number');
  }
};

const isNumber = (number) => {
  if (isNaN(number)) {
    throw new TypeError('We just convert numbers, sorry!');
  }
}

const isInteger = (number) => {
  if (!(number % 1 === 0)) {
    throw new TypeError('It\'s unknown how to convert float values');
  }
}

const validateNumber = (number) => {
  isNumber(number);
  isInteger(number);
  isNumberToBigToConvert(number);
  isNegative(number);
  isZero(number);
};

const romansLookup = { M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 };

const convert = (numberToConvert) => {
    let roman='';
    let iterator;
    let number = numberToConvert;

    for (iterator in romansLookup) {
      while (number >= romansLookup[iterator]) {
        roman += iterator;
        number -= romansLookup[iterator];
      }
    }

    return roman;
}

const convertToRoman = (numberToConvert) => {
  validateNumber(numberToConvert);
  return convert(numberToConvert);
};

module.exports = convertToRoman;
