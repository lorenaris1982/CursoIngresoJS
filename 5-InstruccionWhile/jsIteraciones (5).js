function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while ((sexo!="f") && (sexo!="m"))

{
	sexo=prompt("reingrese sexo");

}

if(sexo=="f")
	{
			sexo=("femenino");

	}else if  (sexo=="m")
		{
		  sexo=("masculino");
		}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN