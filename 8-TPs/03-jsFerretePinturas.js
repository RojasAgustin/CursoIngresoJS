/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var temperaturaC;
	temperaturaF = txtIdTemperatura.value;
	temperaturaF = parseInt(temperaturaF);
	temperaturaC = temperaturaF - 32;
	alert(temperaturaF + " Farenheit son " + temperaturaC + " Centigrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaC;
	var temperaturaF;
	temperaturaC = txtIdTemperatura.value;
	temperaturaC = parseInt(temperaturaC);
	temperaturaF = temperaturaC + 32;
	alert(temperaturaC + " Centigrados son " + temperaturaF + " Farenheit");
}

