function mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivilIngresado
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCivilIngresado = estadoCivil.value;
	if(edad < 18 && estadoCivilIngresado != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero");
	}	


}//FIN DE LA FUNCIÓN