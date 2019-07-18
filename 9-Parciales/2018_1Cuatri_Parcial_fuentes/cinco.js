function mostrar()
{
	var planetas;

	planetas=prompt("planetas");

	switch(planetas){

		case "tierra":

		mensaje= " Aca vivimos";

		break;

		case "mercurio":
		case "venus":

		mensaje=" Aca hace mas calor";

		break;

		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":

		mensaje= " Aca hace frio";

		break;

		default:

		mensaje= " No es un planeta valido";

		break;



	}

		alert(mensaje);
}
