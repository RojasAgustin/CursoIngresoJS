/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseInt(precio1);
	precio2 = txtIdPrecioDos.value;
	precio2 = parseInt(precio2);
	precio3 = txtIdPrecioTres.value;
	precio3 = parseInt(precio3);
	suma = precio1 + precio2 + precio3;
	alert("La suma es: " + suma);

}
function Promedio () 
{   var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseInt(precio1);
	precio2 = txtIdPrecioDos.value;
	precio2 = parseInt(precio2);
	precio3 = txtIdPrecioTres.value;
	precio3 = parseInt(precio3);
	suma = precio1 + precio2 + precio3;
	promedio = suma/3;
	alert("El promedio es: " + promedio);
}
function PrecioFinal () 
{
    var precio1;
	var precio2;
	var precio3;
	var suma;
	var precioFinal;
	precio1 = txtIdPrecioUno.value;
	precio1 = parseInt(precio1);
	precio2 = txtIdPrecioDos.value;
	precio2 = parseInt(precio2);
	precio3 = txtIdPrecioTres.value;
	precio3 = parseInt(precio3);
	suma = precio1 + precio2 + precio3;
	precioFinal = suma + (suma * (21/100));
	alert("Precio final con IVA es: " + precioFinal);
	}