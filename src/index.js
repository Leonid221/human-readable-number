module.exports = function toReadable (number) {
  const numToStr = number.toString();

  let firstChar = '';
  let secondChar = '';
  let thirdChar = '';
  let teenChar = '';
  let dozens = '';
  let dozensCharTwo = '';

  switch (numToStr[0]) {
    case '0':
      firstChar += 'zero';
      break;
    case '1':
      firstChar += 'one';
      break;
    case '2':
      firstChar += 'two';
      break;
    case '3':
      firstChar += 'three';
      break;
    case '4':
      firstChar += 'four';
      break;
    case '5':
      firstChar += 'five';
      break;
    case '6':
      firstChar += 'six';
      break;
    case '7':
      firstChar += 'seven';
      break;
    case '8':
      firstChar += 'eight';
      break;
    case '9':
      firstChar += 'nine';
      break;
  }

  switch (numToStr[1]) {
    case '0':
      secondChar += '0';
      break;
    case '1':
      secondChar += 'ten';
      break;
    case '2':
      secondChar += 'twenty';
      break;
    case '3':
      secondChar += 'thirty';
      break;
    case '4':
      secondChar += 'forty';
      break;
    case '5':
      secondChar += 'fifty';
      break;
    case '6':
      secondChar += 'sixty';
      break;
    case '7':
      secondChar += 'seventy';
      break;
    case '8':
      secondChar += 'eighty';
      break;
    case '9':
      secondChar += 'ninety';
      break;
  }

  switch (numToStr[0]) {
    case '0':
      dozens += '0';
      break;
    case '1':
      dozens += 'ten';
      break;
    case '2':
      dozens += 'twenty';
      break;
    case '3':
      dozens += 'thirty';
      break;
    case '4':
      dozens += 'forty';
      break;
    case '5':
      dozens += 'fifty';
      break;
    case '6':
      dozens += 'sixty';
      break;
    case '7':
      dozens += 'seventy';
      break;
    case '8':
      dozens += 'eighty';
      break;
    case '9':
      dozens += 'ninety';
      break;
  }

  switch (numToStr[1]) {
    case '0':
      dozensCharTwo += 'zero';
      break;
    case '1':
      dozensCharTwo += 'one';
      break;
    case '2':
      dozensCharTwo += 'two';
      break;
    case '3':
      dozensCharTwo += 'three';
      break;
    case '4':
      dozensCharTwo += 'four';
      break;
    case '5':
      dozensCharTwo += 'five';
      break;
    case '6':
      dozensCharTwo += 'six';
      break;
    case '7':
      dozensCharTwo += 'seven';
      break;
    case '8':
      dozensCharTwo += 'eight';
      break;
    case '9':
      dozensCharTwo += 'nine';
      break;
  }

  switch (numToStr[2]) {
    case '0':
      thirdChar += '0';
      break;
    case '1':
      thirdChar += 'one';
      break;
    case '2':
      thirdChar += 'two';
      break;
    case '3':
      thirdChar += 'three';
      break;
    case '4':
      thirdChar += 'four';
      break;
    case '5':
      thirdChar += 'five';
      break;
    case '6':
      thirdChar += 'six';
      break;
    case '7':
      thirdChar += 'seven';
      break;
    case '8':
      thirdChar += 'eight';
      break;
    case '9':
      thirdChar += 'nine';
      break;
  }

  switch (numToStr[1], numToStr[2]) {
    case '1', '1':
      teenChar += 'eleven';
      break;
    case '1', '2':
      teenChar += 'twelve';
      break;
    case '1', '3':
      teenChar += 'thirteen';
      break;
    case '1', '5':
      teenChar += 'fifteen';
      break;
    case '1', '8':
      teenChar += 'eighteen';
      break;
  }

  let dozensTeen = '';
  switch (numToStr[0], numToStr[1]) {
    case '1', '1':
      dozensTeen += 'eleven';
      break;
    case '1', '2':
      dozensTeen += 'twelve';
      break;
    case '1', '3':
      dozensTeen += 'thirteen';
      break;
    case '1', '5':
      dozensTeen += 'fifteen';
      break;
    case '1', '8':
      dozensTeen += 'eighteen';
      break;
  }

  if (numToStr.length === 3 && thirdChar != '0' && secondChar != 'ten' && secondChar != 0) {
    return `${firstChar} hundred ${secondChar} ${thirdChar}`;
  } else if (numToStr.length === 3 && thirdChar == 0 && secondChar != '0') {
    return `${firstChar} hundred ${secondChar}`;
  } else if (numToStr.length === 3 && secondChar === 'ten' && teenChar != 'eleven' && teenChar != 'twelve' && teenChar != 'thirteen' && teenChar != 'fifteen' && teenChar != 'eighteen') {
    return `${firstChar} hundred ${thirdChar}teen`;
  } else if (numToStr.length === 3 && secondChar === 'ten' && (teenChar === 'eleven' || teenChar === 'twelve' || teenChar === 'thirteen' || teenChar === 'fifteen' || teenChar === 'eighteen')) {
    return `${firstChar} hundred ${teenChar}`;
  } else if (numToStr.length === 3 && thirdChar != '0' && secondChar === '0') {
    return `${firstChar} hundred ${thirdChar}`;
  } else if (numToStr.length === 3 && secondChar == 0 && thirdChar == 0) {
    return `${firstChar} hundred`;
  } else if (numToStr.length === 2 && dozensCharTwo != 'zero' && dozens != 'ten') {
    return `${dozens} ${dozensCharTwo}`;
  } else if (numToStr.length === 2 && dozensCharTwo === 'zero' && dozens != 'ten') {
    return `${dozens}`
  } else if (numToStr.length === 2 && firstChar === 'one' && dozensCharTwo != 'zero' && dozensTeen != 'eleven' && dozensTeen != 'twelve' && dozensTeen != 'thirteen' && dozensTeen != 'fifteen' && dozensTeen != 'eighteen') {
    return `${dozensCharTwo}teen`;
  } else if (numToStr.length === 2 && firstChar === 'one' && (dozensTeen === 'eleven' || dozensTeen === 'twelve' || dozensTeen === 'thirteen' || dozensTeen === 'fifteen' || dozensTeen === 'eighteen')) {
    return `${dozensTeen}`;
  } else if (numToStr.length === 2 && dozens === 'ten' && dozensCharTwo === 'zero') {
    return `${dozens}`;
  } else {
    return `${firstChar}`;
  }

}
