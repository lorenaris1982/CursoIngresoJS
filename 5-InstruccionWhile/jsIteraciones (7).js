function mostrar()
{

	var contador=0; //=0 es inicializarlo
	var acumulador=0;
	var respuesta;
	var numero;

	do
	{
		numero=prompt("Ingrese un numero");
		while(isNan(numero))
		{

		numero=parseInt(numero);
		acumulador+=numero;
		contador++;

		respuesta=prompt("¿Desea seguir? S/N");
		}
		while(respuesta != "S" && respuesta != "N") //esto es validar la respuesta
		{
			respuesta=prompt("Error. Ingrese S o N")
		}
	}while (respuesta == "S");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN