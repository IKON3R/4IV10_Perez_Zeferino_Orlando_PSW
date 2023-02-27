function fechavalidar(){
    var fecha = new Date(formulario.fecha.value);

    var hoy = new Date();
    var mes = fecha.getMonth()+1;
    var dia = fecha.getDate();

    if(fecha > hoy){
        alert("Vienes del futuro?🤨");
        formulario.fecha.focus();
        return false;
    }

    if((dia<1) || (dia>31)){
        alert("El día ingresado no existe, porfavor prueba en un rango de 1-31 (TT)");
        formulario.fecha.focus();
        return false;
    }

    if((mes == 2) && (dia > 29)){
        alert("EL mes de Febrero solo cuenta con 29 dias, prueba en un rango de 1-29 (TT)");
        formulario.fecha.focus();
        return false;
    }

    var fechaInicio = hoy.getTime();
    var fechaFin = fecha.getTime();
    let dife = fechaInicio - fechaFin;
    var difeanios = dife / (1000*60*60*24*365);
    difeanios= Math.trunc(difeanios);

    document.getElementById("mientof").value = (difeanios);
}
function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function borrard(){

    document.getElementById("cantidad").value="";
    document.getElementById("cantidadi").value="";
}