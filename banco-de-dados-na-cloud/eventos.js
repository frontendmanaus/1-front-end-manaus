var Firebase = require("firebase");

var ref = new Firebase("https://frontendmanaus.firebaseio.com/");

// Quando for inserido
ref.child("herois").on("child_added", function(snapshot, prevChildKey) {

  var heroi = snapshot.val();

  console.log("Heroi inserido: " + heroi.nome);

});

// Quando for atualizado
ref.child("herois").on("child_changed", function(snapshot) {

	var heroi = snapshot.val();

	var key = snapshot.key();

	console.log("Heroi atualizado: " + key + ' - ' + heroi.nome);

});