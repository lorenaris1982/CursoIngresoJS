function mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador<5)
	{

		numero=prompt("ingrese hasta 5 numeros ");
		numero=parseInt(numero);
		
		contador=contador+1;

		acumulador=acumulador+contador;



	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN