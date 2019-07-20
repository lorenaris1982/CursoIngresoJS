function mostrar()
{

	var contador=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero;
	var contadorPares=0;
	var acumuladorPositivo=0;
	var acumuladorNegativo=0;
	var promedioPositivo;
	var promedioNegativo;
	var numero;

	//declarar contadores y variables 
	
	var respuesta=true;

	while(respuesta==true)
	{
		
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		if(numero>0)
		{
			contadorPositivo++; // es igual a contadorPositivo=contadorPositivio+1;
			acumuladorPositivo += numero; // es igual acumuladorPositivo=acumuladorPositivo+numero
		}
		else
		{
			if(numero<0)
			{
				contadorNegativo++;
				acumuladorNegativo += numero;
			}
			else
			{
				contadorCero++
			}

		}
		if (numero%2==0)
		 {
		 	contadorPares++;
		 }



		respuesta= confirm("Desea ingresar otro numero");
	}
	if(contadorPositivo!=0)
	{
		promedioPositivo=acumuladorPositivo/contadorPositivo;
	}
	else
	{
		promedioPositivo="no se ingresaron promedios positivos";

	}
	if(contadorNegativo!=0)
	{
		promedioNegativo=acumuladorNegativo/contadorNegativo;
	}
	else
	{
		promedioNegativo=" no se ingresaron promedios negativos";
	}

	document.write("suma de positivo: " + acumuladorPositivo + "<br>" );
	document.write("suma de negativo: " + acumuladorNegativo + "<br>" );
	document.write("Cantidad de  Positivos: " + contadorPositivo + "<br>");
	document.write("Cantidad de Negativos: " + contadorNegativo + "<br>");
	document.write("Cantidad de ceros: " + contadorCero + "<br>");
	document.write("Cantidad de contadorPares: " + contadorPares + "<br>");
	document.write("Promedio de positivo : " + promedioPositivo + "<br>" );
	document.write("Promedio de negativo : " + promedioNegativo +  "<br>");
		
}//FIN DE LA FUNCIÓN