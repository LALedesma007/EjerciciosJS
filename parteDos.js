//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. 

let edad = prompt('Ingrese la edad')

if (edad >= 18) {
    document.write('puedes conducir');
    
}else
    document.write('no puedes conducir')


//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

   // 0-2: Muy deficiente
    //3-4: Insuficiente
    //5-6: Suficiente
   // 7: Bien
   // 8-9: Notable
   // 10: Sobresaliente
    
    //Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
    

let nota = prompt('Ingrese una nota',('Entre 0 y 10'));

if (nota >= 0 && nota <= 2) {
    alert('Muy deficiente');
}else if (nota >= 3 && nota <= 4) {
    alert('Insuficiente');
}else if (nota >= 5 && nota <= 6) {
    alert('Suficiente');
}else if (nota == 7) {
    alert('Bien');
}else if (nota >= 8 && nota <= 9) {
    alert('Notable');   
}else if (nota == 10) {
    alert('sobresaliente');
}else
    alert('Introduce un numero valido')

     
//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
    
    //Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
    
let resultado ="";

do {
    let cadena = prompt('Introduzca una cadena de caracteres');
    if (resultado == "") {
        resultado = resultado + cadena;
        
    }else{
        resultado = resultado + "-" + cadena
    }
} while (confirm('desea seguir'));
document.write(resultado);

   
//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” 
//deberá indicarse la suma total de los números introducidos.

let suma = parseFloat(0);

do {
   let num = parseFloat(prompt('intrduzca un numero'));
   if (Number(num)== num) {
    suma = suma + num ;
   }else if (num != undefined) {
    alert(num + "no es un numero")
   }
} while (confirm('desea segui sumando'));
document.write(suma);
   
   

//5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

//El algoritmo para calcular la letra del dni es el siguiente :

//El número debe ser entre 0 y 99999999
//Debemos calcular el resto de la división entera entre el número y el número 23.
//Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
//Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
//Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

let resto = 0;
let letra = "";

do{
    let numero = parseInt(prompt("Ingrese su DNI"));
    if (numero >= 0 && numero <= 99999999) {
        resto = numero % 23;
        switch (resto) {
            case 0:
                letra = "T";
                break;
            case 1:
                letra = "R";
                break;
            case 2:
                letra = "W"
                break
            case 3:
                letra = "A";
                break;
            case 4:
                letra = "G";
                break;
            case 5:
                letra = "M"
                break 
            case 6:
                letra = "Y";
                break;
            case 7:
                letra = "F";
                break;
            case 8:
                letra = "P"
                break
            case 9:
                letra = "D";
                break;
            case 10:
                letra = "X";
                break;
            case 11:
                letra = "B"
                break    
            case 12:
                letra = "N";
                break;
            case 13:
                letra = "J";
                break;
            case 14:
                letra = "Z"
                break
            case 15:
                letra = "S";
                break;
            case 16:
                letra = "Q";
                break;
            case 17:
                letra = "V"
                break 
            case 18:
                letra = "H";
                break;
            case 19:
                letra = "L";
                break;
            case 20:
                letra = "C"
                break
            case 21:
                letra = "K";
                break;
            case 22:
                letra = "E";
                break;
                   
                default:
                
                alert("Numero erroneo")
            }
        alert(`Numero ${numero} , letra ${letra}`);
        }else{
    if (numero != undefined ) {
        alert(`${numero} Error no es un numero`)
    }
    }
    }while (confirm('desea seguir ingresando numeros de DNI'));
    


//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
/*
1
22
333
4444
55555
666666
…….
*/

let i = 0;
let rep = 0;
for (let i = 0; i <= 30; i++) {
  for ( let rep = 0; rep < i; rep++) {
    document.write(i);
    
  }  
    document.write("<br>");
}

//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).
/*
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/

let numRep = parseInt(prompt('Elija un numero no mayor a 50'));

if (numRep >= 0 && numRep <=50) {
    let repeticion = "";
    let a ="";
    for(a = numRep; a >=1; a--){
       
    for(repeticion = a; repeticion >=1 ; repeticion--){
        document.write(a);
    }
        document.write("<br>");   
    }

}   else {
    alert("El número introducido no es válido");
}

//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
/*
1
12
123
1234
12345
123456
……
*/
let numRepe = parseInt(prompt("Ingrese un numero hasta el 50"))

if (numRepe >= 0 && numRepe <= 50) {
    let i = "";
    let re = "";
    for (let i = 1; i <= numRepe; i++) {
      for (let re = 1; re <= i; re++) {
        document.write(i);
        
      }
        document.write("<br>");
    }
}else{
    alert("ingrese solo numeros")
}



//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
/*
1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/

for (let h = 1; h<=500; h++) {
    document.write(h);
  
    if(h % 4 == 0){
    document.write("multiplo de 4");
    }
    if (h % 9 == 0) {
    document.write("multiplo de 9");    
    }
    document.write("<br>");
    if (h % 5 == 0) {
    document.write("<hr>");    
    }
}

//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//Ejercicios con Math
let z = "";
let j = "";
let fila = prompt("ingrese la filas");
let col = prompt("ingrese las columnas");
let result = fila * col ;
document.write("<table border");

for (let z = 0; z < fila; z++) {
    document.write("<tr>");
    for (let j = 0; j < col; j++) {
        document.write("<td>");
        document.write(result);
        
        result--;
        
        document.write("</td>"); 
    }
    document.write("</tr>");
}

document.write("</table>");

//11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

//Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp


//12- Realiza un script que genere un número aleatorio entre 1 y 99

//Ejercicios con String



//13- Realiza un script que pida un texto y lo muestre en mayúsculas.

//14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

//15- Realiza un script que cuente el número de vocales que tiene un texto.

//16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

//17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

