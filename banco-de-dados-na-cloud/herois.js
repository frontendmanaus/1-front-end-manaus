var Firebase = require("firebase");

var marvel = require('marvel-characters');

var ref = new Firebase("https://frontendmanaus.firebaseio.com");

var setIntervalSynchronous = function (func, delay) {
  var intervalFunction, timeoutId, clear;

  clear = function () {
    clearTimeout(timeoutId);
  };
  intervalFunction = function () {
    func();
    timeoutId = setTimeout(intervalFunction, delay);
  }

  timeoutId = setTimeout(intervalFunction, delay);

  return clear;
};


function inserirHeroi(){

	var heroi = marvel();

	console.log("Inserindo heroi: " + heroi)

	ref.child("herois").push({

	  nome: heroi,

	});

}

function atualizarHeroi(){

	var heroi = marvel();

	var key = '-KDF5FQqc8IQYCaiZXbI';

	console.log("Atualizando heroi: " + key + ' - ' + heroi)

	ref.child("herois").child(key).update({

	  nome: heroi,

	});
}

//setIntervalSynchronous(inserirHeroi, 5000);

setIntervalSynchronous(atualizarHeroi, 5000);
