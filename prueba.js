/*var texto = ("sdfghgerfdseeeerfsd");
var vocales = ["a", "e", "i", "o", "u"];
var posicion = 0;
var parar = false
for (i = 0; i < texto.length; i++) {
    for (j = 0; j < vocales.length; j++) {
        if(vocales[j] == texto.charAt(i)){
          posicion = i;
          parar = true;
          break;
        }

    }
 console.log(j);
console.log(i);
if(parar){
    break;
}
}
console.log(posicion);
*/


let frases = ("jlso");
let cont = 0; 

for (i = 0; i < frases.length; i++) {
    console.log(i);
   if(frases.charAt(i) == "a" || frases.charAt(i) == "e" || frases.charAt(i) == "i" || frases.charAt(i) == "o" || frases.charAt(i) == "u"){
    console.log(frases.charAt(i));
     cont++
     //console.log(cont++);
   } 
    
}
console.log(cont)


