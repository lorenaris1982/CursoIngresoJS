function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	

	while (isNaN(numero) || numero<=0 || numero>=10)

	{
		numero=prompt("reingrese numero");
		

	}
		document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN


	/*var numero;
	var numeroDos;
	var suma;

	numeroDos=33;*/
	
