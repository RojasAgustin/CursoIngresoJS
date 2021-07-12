function mostrar()
{
	//tomo la edad  
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if(edad < 13 || edad > 17) 
	{
       alert("NO ES ADOLESCENTE");
	}

}//FIN DE LA FUNCIÓN