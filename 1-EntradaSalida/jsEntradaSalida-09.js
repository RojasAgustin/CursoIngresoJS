/* Rojas Agustin DIV D
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	importe = parseInt(txtIdSueldo.value);
	importe += importe * (10/100);
    txtIdResultado.value = importe;
}
