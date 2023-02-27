function numma(){
    var num1p = document.getElementById("num1").value;
    var num2p = document.getElementById("num2").value;
    var num3p = document.getElementById("num3").value;
    var x = parseInt(num1p);
    var y = parseInt(num2p);
    var z = parseInt(num3p);

    document.getElementById("mayor").value = (Math.max(x,y,z));
}

function borrard(){
    //Borramos los elementos
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("num3").value="";
    document.getElementById("mayor").value="";
}