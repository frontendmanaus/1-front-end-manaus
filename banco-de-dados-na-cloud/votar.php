<?php

session_start();

$session = session_id();

?>

<!DOCTYPE html>
<html>
<head>
	<title>Exemplo 3</title>
</head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"></script>
<body>

<div class="container-fluid">
  <div class="row">
  	<div class="col-md-12" style="text-align: center;"><h1>Vote</h1></div>
  </div>
   <div class="row">
  	<div class="col-md-12">
  		<input type="button" class="btn btn-primary btn-lg btn-block" value="sim">
  	</div>
  </div>
   <div class="row">
  	<div class="col-md-12">
  		&nbsp;
  	</div>
  </div>
   <div class="row">
  	<div class="col-md-12">
  		<input type="button" class="btn btn-default btn-lg btn-block" value="nao">
  	</div>
  </div>
</div>



<script>


$( ":button" ).click(function() {

  	var voto =  $(this).val();

  	var ref = new Firebase("https://frontendmanaus.firebaseio.com/");

	ref.child("votar").child("<?= $session ?>").set({
	  voto: voto
	});

});

</script>



</body>
</html>