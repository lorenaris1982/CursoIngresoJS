function mostrar()
{
	var numerouno;
	var numerodos;
	var resultado;

	numerouno=prompt("numerouno");
	numerodos=prompt("numerodos");

	if(numerouno==numerodos)
	{

		resultado= numerouno + numerodos;

	}else
	{
		if(numerouno>numerodos)
		{


			resultado=(numerouno - numerodos)


		}else
		{

			numerouno=parseInt(numerouno);
			numerodos=parseInt(numerodos);
			resultado=(numerouno + numerodos);

		}
			if(resultado>10)
		{
			resultado=("el resultado es " + resultado + " y supera los 10 ");


		}
	} alert(resultado);

