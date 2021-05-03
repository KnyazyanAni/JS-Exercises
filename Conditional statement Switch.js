
function getLetter(s) {
    let letter;
    switch(true){
    case 
   ["a","o","i","u","e"].includes(s[0]):
    letter="A";
    break;
    case
    ["b","c","d","e","f"].includes(s[0]):
    letter="B";
    break;
    case
    ["h","j","k","l","m"].includes(s[0]):
    letter="C";
    break;
    case
    ["n","p","q","r","s","t","v","w","x", "z", "y"].includes(s[0]):
    letter="D";
    break;
  }
 return letter;
}