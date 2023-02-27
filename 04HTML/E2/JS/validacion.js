

function cantifinal(){
    var val1 = document.getElementById("V1").value;
    var val2 = document.getElementById("V2").value;
    var val3 = document.getElementById("V3").value;
    var val4 = document.getElementById("V4").value;
    var val5 = document.getElementById("V5").value;
    var resul1 = parseFloat(val1);
    var resul2 = parseFloat(val2);
    var resul3 = parseFloat(val3);
    var resul4 = parseFloat(val4);
    var resul5 = parseFloat(val5);
    let lista = [resul1,resul2,resul3,resul4,resul5];
    var suma = resul1 + resul2 + resul3 + resul4 + resul5;

    if(suma < 0){
        document.getElementById("totalc") = (suma + (suma * .35)) * .88;
    }
    else{
        if(lista < 0){
            alert("Algunos de los campos son menores a 0 porfavor corrigelo")
        }
    }   
        
}

function borrard(){
    //Borramos los elementos
    document.getElementById("V1").value="";
    document.getElementById("V2").value="";
    document.getElementById("V3").value="";
    document.getElementById("V4").value="";
    document.getElementById("V5").value="";
}