alert ('ciao');

var arrayNum = ['tom','jerry','franco','giulio','francesca','chiara'];
var positionMin = parseInt(prompt('scegli la posizione minima da cui partire tra 1 e 5'));
var positionMax = parseInt(prompt('scegli la posizione massima tra ' + positionMin + ' e 6'));
var newArrayNum = [];


function rangePosition ( array, min , max){

for (var i = 0; i < array.length; i++) {
  if (i >= (min -1 ) && i <= (max-1)) {
    console.log(array[i]);
    newArrayNum.push(array[i]);
  }
}
  console.log(newArrayNum);
}

rangePosition(arrayNum, positionMin, positionMax);
