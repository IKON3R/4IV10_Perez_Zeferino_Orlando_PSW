function validar(formulario){
    if(formulario.nombre.value.length <= 3){
        alert("Favor de ingresar más de 3 carácteres en el campo nombre");
        formulario.nombre.focus();//posiciona el puntero
        return false;
    }

    var checarABC = "[Aa-Zz]" + "áéíóú" + "ÁÉÍÓÚ";

    var cadenaNombre = formulario.nombre.value;

//alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j==checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo letras en el campo de nombre");
        formulario.nombre.focus();
        return false;
    }

    var edad = parseInt(formulario.edad.value);

    //alert(edad);

    if((edad < 0) || (edad >= 99)){
        alert("Favor de ingresar una edad válida de entre 0 y 99 años");
        formulario.edad.focus();//posiciona el puntero
        return false;
    }

    var checarABC = "0123456789";

    var cadenaNombre = formulario.edad.value;

//alert(cadenaNombre);

    var todoesvalido = true;

    for(var i = 0; i < cadenaNombre.length; i++){
        var caracteres = cadenaNombre.charAt(i);
        for(var j = 0; j < checarABC.length; j++){
            if(caracteres == checarABC.charAt(j)){
                break;
            }
        }
        if(j==checarABC.length){
            todoesvalido = false;
            break;
        }
    }
    if(!todoesvalido){
        alert("Ingresa solo números en el campo de edad :<");
        formulario.edad.focus();
        return false;
    }

    //para la fecha
    var fechain = document.getElementById("miento");
    var fecha = fechain.valueAsDate;

    if(!fecha){
        alert("Ingrese una fecha de nacimiento por favor no seas troll >:c");
        formulario.miento.focus();
        return false;
    }

    if(fecha.getTime() >= Date.now()){
        alert("Ingrese una fecha de nacimiento válida por favor :3")
        formulario.miento.focus();
        return false;
    }

    //Para validar fecha de nacimiento con edad
    var fechaNac = document.getElementById("miento").value;
			var fechaNacimientoObj = new Date(fechaNac);
			var hoy = new Date();
			var edad = hoy.getFullYear() - fechaNacimientoObj.getFullYear();
			var mes = hoy.getMonth() - fechaNacimientoObj.getMonth();

			if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoObj.getDate())) {
				edad--;
			}

			var edadIngresada = parseInt(document.getElementById("edad").value);

			if (edad !== edadIngresada) {
				alert("La edad ingresada no coincide con la fecha de nacimiento");
				return false;
			}

    //es para obtener el campo del correo
    var email = formulario.correo.value;

    //Vamos a crear una expresión regular
    let prueba = /([Aa-Zz]+[0-9]+\.){10}\@([Aa-Zz]+[0-9]){8}\.([Aa-Zz]+[0-9]){3}/g;
    alert("Email " + (prueba.test(email) ? " " : "no ") + "válido");
    formulario.correo.focus();
    return prueba.test;

}