/* Rojas Agustin DIV D
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
    var resultado;
    var aumento;
	importe = txtIdSueldo.value;
	importe = parseFloat(importe);
	aumento = importe * (10/100);
	resultado = importe + aumento;
    txtIdResultado.value = resultado.toFixed(2);
}
 


 