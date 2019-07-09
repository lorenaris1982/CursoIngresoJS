/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    /*var valorImporte;
    var valorResultado;
    /*nombre="lalala";
    alert(valorImporte);*/
    /*valorImporte=document.getElementById("importe").value;
    console.info("el valor",valorImporte);
    //alert(valorImporte);

    var datoUno;
    var datoDos;
    var suma;
    datoUno=prompt"2";
    datoDos="3";

    datoUno=parseInt(datoUno);
    datoDos=parseInt(datoDos);

    suma=datoUno+datoDos;
    alert(suma);

    valorResultado=valorImporte+100;
    //alert(valorResultado);
    document.getElementById("resultado").value=valorResultado;*/

        var importe;
        var resultado;

        importe=document.getElementById("importe").value;

        importe=parseInt(importe);

        resultado=importe-importe*25/100;

        document.getElementById("resultado").value=resultado;


} 
