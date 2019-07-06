/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var mostrarAumento;
    
    sueldo =document.getElementById("sueldo").value;
    sueldo =parseInt(sueldo);

    mostrarAumento =sueldo+sueldo*10/100;

    document.getElementById("resultado").value =mostrarAumento;
    




    

	
}
