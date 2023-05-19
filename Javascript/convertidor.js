function limpiar(){
	document.getElementById('miformulario').reset();
}

function convertir(){
	
	var x = parseInt(document.getElementById('valor1').value);
	const g = 1000; 
    var msj = " g";
	document.getElementById('resultado').innerHTML = x * g / 1 + msj;
}