function mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById("edad").value;

	/*if(edad>=18 ){

		alert("Es mayor de edad")

	}else if(edad<13){

		alert("Es menor de edad")
	}else{

		alert("Es adolescente")
	}*/


	if(edad>=18){

		alert("mayor")
	}else{

		//menor o adolescente

		if(edad<13){

			alert("menor")

		}else{

			alert("adolescente")
		}
	}

}//FIN DE LA FUNCIÓN