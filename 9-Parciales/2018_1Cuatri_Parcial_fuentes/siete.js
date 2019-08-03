function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var promedio;
	var notabaja;
	var notabajasexo;
	var varonescantidad=0;
	var acumulador=0;
	var varonesnota;
	

	while(contador<5)
	{
		
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);

	
		while(isNaN(nota)|| nota <0 || nota>10)
		{
		nota=prompt("Reingrese Nota");
		nota=parseInt(nota);
		}
		sexo=prompt("Ingrese sexo F o M ");
		while( sexo!="F" && sexo!="M")
		{
			sexo=prompt("Reingrese Sexo F o M");
		}

		if(contador==0)
		{
			notabaja=nota;
			notabajasexo=sexo;
			
			
		}else
		{
			if(nota<notabaja)
			{
				notabaja=nota;
				notabajasexo=sexo;
			}
		}
		
			if(nota>=6 && sexo=="M")
			{

				varonescantidad++;
				varonesnota=nota


			}
		


		
		contador++;
		acumulador=acumulador+nota;
		promedio= acumulador / contador;

	}
		alert("El promedio de las notas " + promedio);
		alert("La nota mas baja es " + notabaja + " y el sexo es " + notabajasexo);
		alert("La cantidad de varones " + varonescantidad + " que su nota es  " + varonesnota  );
}
