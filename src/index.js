const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let strSize = 2;
    let res = '';
    let count = 0;
    let countLetter = 0;
    for (let i = 0; i < expr.length; i += strSize){
      if(expr.slice(i, i + strSize) === '10'){
        res += '.';
        countLetter += 1;
        if(countLetter === 5){
          res += ' ';
          countLetter = 0;
        }  
      }else if (expr.slice(i, i + strSize) === '11'){
        res += '-';
        countLetter += 1;
        if(countLetter === 5){
          res += ' ';
          countLetter = 0;
        }  
      }else if (expr.slice(i, i + strSize) === '**'){
        count += 1;
        if (count === 5){
          res += '   ';
          count = 0;
        }
      }else{
        countLetter += 1;
        if(countLetter === 5){
          res += ' ';
          countLetter = 0;
        }  
        continue;
      }
    }
    return res.split('   ').map(el => el.split(' ').map(i => MORSE_TABLE[i]).join('')).join(' ');
  }

module.exports = {
    decode
}