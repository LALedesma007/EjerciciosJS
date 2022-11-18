
//1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el
 //número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

 const userNumber = parseInt(prompt("ingrese un numero"));

 function parity (number){
 if (number % 2 == 0) {
    console.log(`El numero es par`);
 }else
    console.log(`el numero es impar`);
   return
 }
 parity()

//- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa 
//cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

const texto = prompt("ingrese un texto");

function informacion (cadena){
    if (cadena == cadena.toUpperCase()) {
        console.log("la cadena ingresada esta en mayuscula");
    }else if (cadena == cadena.toLowerCase()) {
        console.log("la cadena ingresada esta en minuscula");
    } else {
        console.log("la cadena ingresada tiene ambas mayusculas y minusculas");
    }

}
informacion()

if (condition) {
    
} else {
    
}

//3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

//La fórmula del perímetro  es p = 2*(a +b)



const perimetro = function (calculoUno, calculoDos) {
    let lado1 = parseFloat(prompt("Ingrese el primer valor del rectangulo a calcular"));
    let lado2 = parseFloat(prompt("Ingrese el segundo valor del rectangulo a calcular"));
    console.log(lado1, lado2);
    let formulaPerimetro = 0;
    formulaPerimetro = 2*(lado1 + lado2);
    alert(`El perimetro de un rectangulo de lados ${lado1} y ${lado2} es: ${formulaPerimetro}`);
    
}
perimetro()
    

//4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe 
//ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.



function multiplicacion () {
 let multiplicar = parseInt(prompt("ingrese el numero a multilicar"));   
 document.write(`La tabla de multiplicar por ${multiplicar} es: <br><br>`);
    for ( i = 0; i<=10; i++) {
       document.write(`${multiplicar} x ${i} = ${multiplicar*i} <br>`);
       
   }   
    }       
    multiplicacion()
