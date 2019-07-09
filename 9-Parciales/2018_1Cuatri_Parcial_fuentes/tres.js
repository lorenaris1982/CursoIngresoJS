function mostrar()
{
	var precio;
	var porcentaje;

	precio=prompt("precio");
	porcentaje=prompt("porcentaje");

	precio=parseInt(precio);
	porcentaje=parseInt(porcentaje);

	elPrecioFinal=precio-precio*porcentaje/100;

	document.getElementById("elPrecioFinal").value=elPrecioFinal;
	
}
