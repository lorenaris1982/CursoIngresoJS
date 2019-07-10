/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;

	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*ancho;

	multiplicar=perimetro*3;

	alert(multiplicar);

}
function Circulo () 
{
	var radio;

	radio=document.getElementById("Radio").value;

	radio=parseInt(radio);

	calculo=2*3.14*radio;

	multiplicar=calculo*3;

	alert(multiplicar);

}
function Materiales () 
{
	var largo;
	var ancho;

	largo=document.getElementById("Largo").value;
	ancho=document.getElementById("Ancho").value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*ancho;

	cemento=perimetro*2;

	cal=perimetro*3;

	alert("Bolsas de cemento " + cemento + " y Bolsas de cal " + cal );
	
}