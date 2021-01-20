/* ES5
alert ('ciao');

var myArray = ['tom','jerry','franco','giulio','francesca','chiara'];
var positionMin = parseInt(prompt('scegli la posizione minima da cui partire tra 1 e 5'));
var positionMax = parseInt(prompt('scegli la posizione massima tra ' + positionMin + ' e 6'));



function rangePosition ( array, min , max){

var newArray = [];

for (var i = 0; i < array.length; i++) {
  if (i >= (min-1 ) && i <= (max-1)) {
    console.log(array[i]);
    newArray.push(array[i]);
  }
}
  return newArray;
}

rangePosition(myArray, positionMin, positionMax);

*/




//Ecma6

const myArray = ['tom','jerry','franco','giulio','francesca','chiara'];
const positionMin = parseInt(prompt('scegli la posizione minima da cui partire tra 1 e 5'));
const positionMax = parseInt(prompt('scegli la posizione massima tra ' + positionMin + ' e 6'));



function rangePosition ( array, min , max){

  const newArray = array.filter((elemento, index) => {
    return index >= min && index <= max;
  })
  return newArray;
}


console.log(rangePosition(myArray, positionMin, positionMax));
