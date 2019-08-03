function mostrar()
{
	var letra;
	var numero=0;
	var numerospares=0;
	var cantidadceros=0;
	var numerosimpares=0;
	var numerospositivos;
	var numerosnegativos;
	var contadornumerospositivos=0;
	var acumuladornumerospositivos=0;
	var contadornumerosnegativos=0;
	var acumuladornumerosnegativos=0;



	var respuesta="si";

	while(respuesta!="no")
	{
		letra=prompt("Ingrese una letra");

		while((letra<"A" || letra>"Z")&&(letra<"a" || letra>"z"))
		{	
		letra=prompt("Reingrese una letra");
		}
	

		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);


	 while(isNaN(numero) || numero<-100 || numero>100)
	 {
	 	numero=prompt("Reingrese numero");
	 	numero=parseInt(numero);
	 }
	 if(numero%2==0)
	 {
	 	numerospares++;

	 }else
	 {
	 	numerosimpares++;
	 }
	 if(numero>0)
	 {
	 	contadornumerospositivos++;
	 	acumuladornumerospositivos+=numero;

	 }else
	 if(numero<0)
	 {
	 	contadornumerosnegativos++;
	 	acumuladornumerosnegativos+=numero;

	 }else
	 {
	 	cantidadceros++;
	 }







	 	respuesta=prompt("Escriba si para continuar, no para terminar")
	}
		document.write("La cantidad de numeros pares es " + numerospares + "<br>");
		document.write("La cantidad de numeros impares es" + numerosimpares + "<br>");
		document.write("La cantidad de ceros es " + cantidadceros + "<br>");
}
