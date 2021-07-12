function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	var nota;
	random = Math.random() * 10 + 1;
	nota = Math.floor(random);
	if(nota == 10 || nota == 9) 
	{
		alert("EXCELENTE");
	}
	else if(nota >= 4) 
	{
		alert("APROBÓ");
	}
	else if(nota < 4) 
	{
		alert("Vamos, la proxima se puede");
	}

}//FIN DE LA FUNCIÓN