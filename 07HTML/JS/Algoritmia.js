function problema1(){
    var valo = document.getElementById("p1-input").value;
    var arr = valo.split('').reverse();
    var resl = '';

    spt.forEach(function (palabras, i){//Evaluamos el array  

        if(i != 0 || i != arr.length) resultado += '';
        resultado += palabras;
    });

    document.querySelector('#p1-output').textContent = resl;
}

function problema2(){
    let VectX1 = document.querySelector("#p2-x1 ").value;
    let VectX2 = document.querySelector("#p2-x2").value;
    let VectX3 = document.querySelector("#p2-x3").value;
    let VectX4 = document.querySelector("#p2-x4").value;
    let VectX5 = document.querySelector("#p2-x5").value;

    let VectY1 = document.querySelector("#p2-y1").value;
    let VectY2 = document.querySelector("#p2-y2").value;
    let VectY3 = document.querySelector("#p2-y3").value;
    let VectY4 = document.querySelector("#p2-y4").value;
    let VectY5 = document.querySelector("#p2-y5").value;

    //hacemos 2 arrays para guardar cada vector introducido
    
    let ArrX = []
    let ArrY = []

    //Utilizando el metodo push introducimos los valores dentro de los arrays

    ArrX.push(VectX1,VectX2,VectX3,VectX4,VectX5)
    ArrY.push(VectY1,VectY2,VectY3,VectY4,VectY5)

    //Recordemos que todo lo que se introduce por medio del teclado es de tipo cadena por ende se tiene que parsear
    let Arrx = ArrX.map((ArrX) => parseInt(ArrX));
    let Arry = ArrY.map((ArrY) => parseInt(ArrY));

    const odioFisica = (h, k) => h.map((Arrx, i) => h[i]).reduce((a, b) => a = b)

    document.querySelector("#p2-output").textContent = odioFisica(h, k)
}



function problema3()
{
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'];
    //Vamos a obtener la entrada de los datos
    var p3_input= document.querySelector('#p3-input').value;

    //Separar todo por comas
    var p3_palabras= p3_input.split(',');
    //necesitamos una funcion que se encargue de recuperar cada palabra
    //Eliminar espacios
    p3_palabras=p3_palabras.map(function(palabras)
    {
        return palabras.replace(/\s/g, '').toUpperCase();
    });
     //Calcular los caracteres únicos
    var p3_res='';
    //funcion que se encargue de calcular que contienen el arreglo y seprara para 
    //cada caracter contarlo
   p3_palabras.forEach(function(palabra, i)
   {
    var letras_unicas = [];
    var palabra_array= palabra.split('');

    //iterar el alfabeto
    alfabeto.forEach(function (letra, j)
    {
        //itero cada palabra
        palabra_array.forEach(function(letras_palabras, k)
        {
            //comprobar que la letra este dentro del alfabeto
            if(letras_palabras==letra)
            {
                //si la letra no la hemos contado la agregamos a un array para contar la letras unicas
                if(letras_unicas.indexOf(letra)<0)
                {
                    letras_unicas.push(letra);

                }
            }
        });
    });
    //vammos a contar la salida 
    p3_res+= 'Palabras: ' + palabra + '='+ letras_unicas.length +' \n';
   });
   //imprimir salida
   document.querySelector('#p3-output').textContent =p3_res;
}
function borrar1()
{
    document.querySelector("#p1-output").textContent="";
}
function borrar2()
{
    document.querySelector("#p2-output").textContent="";
    document.getElementById("p2--x1").value="";
    document.getElementById("p2--x2").value="";
    document.getElementById("p2--x3").value="";
    document.getElementById("p2--x4").value="";
    document.getElementById("p2--x5").value="";
    document.getElementById("p2--y1").value="";
    document.getElementById("p2--y2").value="";
    document.getElementById("p2--y3").value="";
    document.getElementById("p2--y4").value="";
    document.getElementById("p2--y5").value="";
}
function borrar3()
{
    document.querySelector("#p3-output").textContent="";
}