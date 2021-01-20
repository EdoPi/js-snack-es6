

var bicycle = [

  bicletta1 = {
    'nome' : 'bianchi',
    'peso' : 5,

  },

  bicletta2 = {
    'nome' : 'BDM',
    'peso' : 7,

  },

  bicletta3 = {
    'nome' : 'mountain bike',
    'peso' : 3,

  },

]



function minorNum (array){

  var minor = array[0].key;

  for (var i = 0; i < array.length; i++) {
    if (array[i].key < minor) {
      console.log(array[i]);
    }
  }
}

minorNum(bicycle )
