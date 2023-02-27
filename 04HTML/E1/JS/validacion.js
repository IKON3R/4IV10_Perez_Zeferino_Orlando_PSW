function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron =/[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function inte(){

    var valor = document.getElementById("money").value;

    var resul = parseInt(valor);

    var inte = resul * 0.082;

    var total = resul + inte;

    document.getElementById("cantinte").value = "$ " + total;

    document.getElementById("maximom").value = "$ " + total * 36;
}

function borrard(){

    document.getElementById("money").value="";
    document.getElementById("cantinte").value="";
    document.getElementById("maximom").value="";
}