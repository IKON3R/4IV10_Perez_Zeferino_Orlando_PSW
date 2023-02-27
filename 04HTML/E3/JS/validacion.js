function validar(formulario){

    //Validar nombre del producto
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en campo nombre");
        formulario.nombre.focus();
        return false;
    }

    else if(formulario.nombre.value.length >= 12){
        alert("Favor de ingresar menos de 12 caracteres en campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaNombre = formulario.nombre.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingrese solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    var checarABC = "12345687890";

    var cadenaNombre = formulario.precio.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    
    //Validar marca del producto
    if(formulario.marca.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en campo marca");
        formulario.marca.focus();
        return false;
    }

    else if(formulario.marca.value.length >= 12){
        alert("Favor de ingresar menos de 12 caracteres en campo marca");
        formulario.marca.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaMarca = formulario.marca.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaMarca.length; i++){
        var caracteres = cadenaMarca.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingrese solo letras en el campo marca");
        formulario.marca.focus();
        return false;
    }

    var checarABC = "12345687890";

    var cadenaMarca = formulario.precio.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaMarca.length; i++){
        var caracteres = cadenaMarca.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    //Validar tipo de producto
    if(formulario.tipo.value.length <= 3){
        alert("Favor de ingresar más de 3 caracteres en campo tipo");
        formulario.tipo.focus();
        return false;
    }

    else if(formulario.tipo.value.length >= 12){
        alert("Favor de ingresar menos de 12 caracteres en campo tipo");
        formulario.tipo.focus();
        return false;
    }

    var checarABC = "qwertyuiopasdfghjklñzxcvbnm"
    + "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaTipo = formulario.tipo.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaTipo.length; i++){
        var caracteres = cadenaTipo.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Ingrese solo letras en el campo tipo");
        formulario.tipo.focus();
        return false;
    }

    var checarABC = "12345687890";

    var cadenaTipo = formulario.precio.value;

    var todoesvalido = true;

    for(var i = 0; i < cadenaTipo.length; i++){
        var caracteres = cadenaTipo.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j == checarABC.length){
            todoesvalido = false;
            break;
        }
    }

    //Validar precio del producto
    if(!todoesvalido){
        alert("Ingrese solo numeros en el campo precio pofavo' individuo que no espio");
        formulario.precio.focus();
        return false;
    }


    var precio = parseInt(formulario.precio.value);

    if((precio < 0) || (precio >= 999)){
        alert("Porfavor ingresar un precio valido que este entre 1 y 999 pesositos :< cuide su economia y no mienta");
        formulario.precio.focus();
        return false;
    }
}

function cantifinal(){
   //Operaciones respecto a los descuentos y final

   var valor = document.getElementById("precio").value;
   var tipo = document.getElementById("tipo").value;
   var resul = parseInt(valor);
   var papas = resul * 0.02;
   var pastel = resul * 0.1;
   var lacteo = resul * 0.075;

   if(tipo == "papas" || tipo == "PAPAS" || tipo == "Papas"){
       document.getElementById("cantidad").value = "$ " + (resul - papas);
   } else if(tipo == "pastelito" || tipo == "PASTELITO" || tipo == "Pastelito"){
    document.getElementById("cantidad").value = "$ " + (resul - pastel);
   }else if(tipo == "lacteo" || tipo == "LACTEO" || tipo == "Lacteo"
    || tipo == "lácteo" || tipo == "LÁCTEO" || tipo == "Lácteo"){
        document.getElementById("cantidad").value = "$ " + (resul - lacteo);
    }
}

function borrard(){
    //Borramos los elementos
    document.getElementById("nombre").value="";
    document.getElementById("marca").value="";
    document.getElementById("tipo").value="";
    document.getElementById("precio").value="";
    document.getElementById("cantidad").value="";
}