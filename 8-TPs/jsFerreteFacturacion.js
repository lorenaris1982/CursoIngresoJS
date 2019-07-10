/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	Sumar=PrecioUno+PrecioDos+PrecioTres;

	alert(Sumar);

}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	Sumar=PrecioUno+PrecioDos+PrecioTres;

	PrecioFinal=Sumar/3;

	alert(PrecioFinal);

}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;

	PrecioUno=document.getElementById("PrecioUno").value;
	PrecioDos=document.getElementById("PrecioDos").value;
	PrecioTres=document.getElementById("PrecioTres").value;

	PrecioUno=parseInt(PrecioUno);
	PrecioDos=parseInt(PrecioDos);
	PrecioTres=parseInt(PrecioTres);

	Sumar=PrecioUno+PrecioDos+PrecioTres;

	IVA=Sumar+Sumar*21/100;

	alert(IVA);
}