function mostrar()
{
	var marca;
	var peso=0;
	var temperatura;

	var respuesta="Si";

	while(respuesta!= "No")
	{
		marca=prompt("Ingrese la marca");
		

		while(isNan (peso) ||  peso>=1 || peso<=100 )
		{
			peso=prompt("Ingrese peso");
			peso=parseInt(peso);


		}while(isNan (temperatura) || temperatura>= -30 || temperatura<=30)
		{
			temperatura=prompt("Ingrese tempera");
			temperatura=parseInt(temperatura);
		}








		respuesta=prompt("Escriba No para terminar");
	}










	document.write("La cantidad de temperaturas pares: " )
}
