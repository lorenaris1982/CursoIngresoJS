/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
	var dos;

	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;

	uno=parseInt(uno);
	dos=parseInt(dos)

	sumar=uno+dos;

	alert("la suma es " + sumar);
	
}

function restar()
{
	var uno;
	var dos;

	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	restar=uno-dos;

	alert("la resta es "+ restar);

}

function multiplicar()
{ 
	var uno;
	var dos;

	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	multiplicar=uno*dos;

	alert(" la multiplicacion es " + multiplicar);


}

function dividir()
{
	var uno;
	var dos;

	uno=document.getElementById("numeroUno").value;
	dos=document.getElementById("numeroDos").value;

	uno=parseInt(uno);
	dos=parseInt(dos);

	dividir=uno/dos;

	alert("la division es " + dividir);
	
}

