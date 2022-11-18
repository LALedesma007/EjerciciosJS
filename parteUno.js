// EJERCCIOS JAVASCRIPT //

//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”//

console.log("un mensaje"); 


// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).//

console.log("hello word");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.//


console.log(3+5);

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»//

let nombre = ("Escribe tu nombre");
console.log("Hola "+nombre);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.//

let numUno = prompt("Ingrese el primer numero");
let numDos = prompt("ingrese el segundo numero");

document.write(parseInt(numUno) + parseInt(numDos));

     //parset float es para decimal 
let numTres = prompt("Ingrese el primer numero");
let numCuatro = prompt("ingrese el segundo numero");

document.write(parseFloat(numUno) + parseFloat(numDos));

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("ingrese el segundo numero");

if (num1 > num2) {
    document.write(num1);
} else {
    document.write(num2);
}

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let nume1 = prompt("Ingrese el primer numero");
let nume2 = prompt("ingrese el segundo numero");
let nume3 = prompt("ingrese el tercer numero");

if (nume1 > nume2 && nume1 > nume3) {
    document.write(n1);
    } else if (nume2 > nume3) {
    document.write(nume2);
    } else {
    document.write(nume3);
    }

//8.- Escribe un programa que pida un número y diga si es divisible por 2

let n1 = prompt("Ingrese el primer numero");

if (n1 % 2 === 0) {
    document.write("Es divisible por dos");
} else {
    document.write("No es divisible por dos");
}

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let text = prompt("Ingrese la frase");
    cont = 0
    
 for (i = 0; i < text.length; i++) {
    if ((text.charAt(i) == "a") || (text.charAt(i) == "e") || (text.charAt(i) == "i") || (text.charAt(i) == "o") || (text.charAt(i) == "u")) {
        cont++;
    }
    /*En cada iteracción, el método .charAt() nos devolverá el carácter de la posición que estamos recorriendo. Así 
    que comprobaremos si dicho carácter es una de las vocales (a, e, i, o, u).*/
 }   
    document.write("la palabra" + text + "contiene" + cont + "vocales");


//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numer = prompt("Escriba un numero");

if( numer % 2 == 0 || numer % 3 == 0 || numer % 5 == 0 || numer % 7 == 0){
    document.write("es divisble por 2 ,3 5 y 7");
}else{
    document.write("no es divisible por 2 ,3, 5 y 7");
}
   



//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let num = prompt("Escribe un número");
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
if (num % 2 === 0) {
document.write("Es divisible por 2. ");
}
if (num % 3 === 0) {
document.write("Es divisible por 3. ");
}
if (num % 5 === 0) {
document.write("Es divisible por 5. ");
}
if (num % 7 === 0) {
document.write("Es divisible por 7. ");
}
} else {
document.write("No es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}



//12.-le pediremos al usuario una letra y una frase y le diremos cuantas veces se repite esa letra en la frase

let letra = prompt("ingrerse una letra");
let frase = prompt("ingrese la frase");

cont = 0;

for (i = 0; i < frase.length; i++) {
    
    if (letra == frase[i]) {
      cont++;  
    }
}
document.write("la letra" + letra +"se repite" + cont + "veces");

////


