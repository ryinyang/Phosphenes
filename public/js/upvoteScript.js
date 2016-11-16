/*function modify_qty(val) {

	var qty = document.getElementById('qty').value;
	var new_qty = parseInt(qty,10) + val;



   /* if (new_qty < 0) {
		new_qty = 0;
	}*/
	 /*
	  $('button').on('click', function() {
	  $(this).prop('disabled', true);
	  });

	document.getElementById('qty').value = new_qty;
	

	return new_qty;
}*/

/*
var n = 0;
var flag = true;

function modify_qty(1){

  var qty = n + 1;

  document.getElementById('qty').value = 1;
  return 1;
  /*
  if( flag == true ) {
	document.getElementById('qty').value = qty;
	flag = false;
  }
*/

//}


var flags = new Array(1000);
flags.fill(0);

function modify_qty(id) {
	//var arrElements = document.getElementsByTagName('qty1');

	//for (var i = 1; i < 8; i++) {

	  var qty = document.getElementById(id).value;
	  /*
	  var new_qty = parseInt(qty,10) + 100;
	  document.getElementById(id).value = new_qty;
	  return new_qty;
	  */
	
	  /*
	  if(qty <= 0) {
		break;
	  }
	  */

	$('button').on('click', function() {
		$(this).prop('disabled', false);
	});

	  if( flags[id+1] == 0) {
		//document.flag = 1;
		//posts["flag"] = 1;

		//qty = qty.replace(0,1);
		var new_qty = parseInt(qty,10) + 1;
		document.getElementById(id).value = new_qty;
		flags[id+1] = 1;
		//prevId = id;
		return new_qty;
	  }

	  if(flags[id+1] == 1) {
		//document.flag = 0;
		//posts["flag"] = 1;
		//substr_replace(qty,0,qty.length()-1,1);
		var new_qty = parseInt(qty,10) - 1;
		document.getElementById(id).value = new_qty;
		flags[id+1] = 0;
		//prevId = id;
		return new_qty;
	  }
  //}
}

function reset() {
  document.getElementById(qty).value = 0;
  return 0;
}
