function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var mensaje;
	
	numero=Math.floor(Math.random()*(11-1))+1;

	if(numero==9||numero==10)
	{
		mensaje="Excelente";

	}else
	{
		if(numero>4)
		{
			mensaje="Aprobo";
		}else
		{
			mensaje= " Vamos, la proxima puede";
		}
	}
		alert(numero + mensaje);
} 
//FIN DE LA FUNCIÓN