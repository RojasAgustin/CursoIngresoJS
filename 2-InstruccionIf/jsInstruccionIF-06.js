function mostrar()
{
	//tomo la edad  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad >=18) 
	{
		alert("Mayor de edad");
	}
	else if (edad >= 13 && edad <= 17) 
	{
	alert("Es adolescente");
	}
	else if (edad < 13) 
	{
		alert("Es niño");
	}



}//FIN DE LA FUNCIÓN