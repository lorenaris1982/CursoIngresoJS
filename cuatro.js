function mostrar()
{
	var numerouno;
	var numerodos;
	var resultado;

	numerouno=prompt("numerouno");
	numerodos=prompt("numerodos");

	if(numerouno==numerodos)
	{
		resultado=numerouno+numerodos;
	}else
	{
		numerouno=parseInt(numerouno);
		numerodos=parseInt(numerodos);

		if(numerouno>numerodos)
		{
			resultado=numerouno-numerodos;

		}else
		{
			resultado=numerouno+numerodos;
		}if(resultado>10)
		{
			resultado="la suma es " + resultado + " y superior a 10 ";
		}
	}


			alert(resultado);
}	