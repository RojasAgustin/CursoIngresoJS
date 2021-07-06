/* Rojas Agustin DIV D
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{   
	var numero1;
    var numero2;
    var resultado;
	numero1 = parseInt(txtIdNumeroUno.value);
	numero2 = parseInt(txtIdNumeroDos.value);
	// alert("La suma es: " + (numero1 + numero2));
	resultado = numero1 + numero2;
    alert("La suma es: " + resultado);
}

