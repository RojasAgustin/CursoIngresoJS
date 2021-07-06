/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambreNecesario;
	largo = txtIdLargo.value;
	largo = parseInt(largo);
	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);
	perimetro = 2*ancho + 2*largo;
	alambreNecesario = perimetro * 3;
	alert("Se necesitan: " + alambreNecesario + " metros de alambre.")
}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambreNecesario;
	radio = txtIdRadio.value;
	radio = parseInt(radio);
	perimetro = 2 * radio * 3.1415;
	alambreNecesario = perimetro * 3;
    alert("Se necesitan: " + alambreNecesario + " metros de alambre.")
}
function Materiales () 
{
	var largo;
	var ancho;
	var perimetro;
	var cantidadCemento;
	var cantidadCal;
	largo = txtIdLargo.value;
	largo = parseInt(largo);
	ancho = txtIdAncho.value;
	ancho = parseInt(ancho);
	perimetro = 2*ancho + 2*largo;
	cantidadCemento = (perimetro * 2)/4;
	cantidadCal = (perimetro * 3)/4;
	alert("Se necesitan: " + cantidadCal + " bolsas de cal y " + cantidadCemento + " bolsas de cemento");
}