function mostrar()
{
	var precio;
	var porcentaje;

	precio=prompt("precio");
	porcentaje=prompt("porcentaje");

	precio=parseInt(precio);
	porcenjate=parseInt(porcentaje);

	cuenta=precio-precio*porcentaje/100;

	document.getElementById("elPrecioFinal").value=cuenta;
}
