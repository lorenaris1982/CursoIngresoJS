function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var promedio;
	var notabaja;
	var notabajasexo;
	var varones;
	var varonesnotamayor6;

	while(contador<2)
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
			varones=sexo=="M";
			varonesnotamayor6=nota;
		}else
		{
			if(nota<notabaja)
			{
				notabaja=nota;
				notabajasexo=sexo;
			}
		}
		
			if(nota>=6)
			{
				varones=sexo=="M";
				varonesnotamayor6=nota;
			}
		


		
		contador++;
		acumulador=+nota;
		promedio=acumulador/contador;

	}
		alert("El promedio de las notas " + promedio);
		alert("La nota mas baja es " + notabaja + " y el sexo es " + notabajasexo);
		alert("La cantidad de varones " + varones + " nota " + varonesnotamayor6);
}

