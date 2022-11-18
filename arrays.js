

//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
 /* let meses = ["Enero", "Febrero", "Marzo" ,"Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
  }

//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el 
//    arreglo generado, luego realizar las siguientes acciones:

/*Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
/*et resultado ="";

do {
    let ciudades = prompt('Introduzca una ciudad');
    if (resultado == "") {
        resultado = resultado + ciudades;
        
    }else{
           resultado = (`${resultado} - ${ciudades}`);
    }
    
} while (confirm('desea seguir'));
document.write(resultado);
console.log(resultado.length);
*/
let ciudades = [];
while (confirm('Ingrese nombre de ciudades.')) {
  let ciudad = prompt('Ingrese una ciudad');
  ciudades.push(ciudad);
}
console.log(ciudades);
document.write(`${ciudades.length}<br>`);
document.write(`${ciudades[0]}<br>`);
document.write(`${ciudades[2]}<br>`);
document.write(`${ciudades[ciudades.length -1]}<br>`);
ciudades.push("paris");("<br>")
ciudades.indexOf(2,0);("<br>")
console.log(`${ciudades[ciudades.splice(2,0,'barcelona')]}<br>`);


//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los 
//lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.



for (i = 0; i <= 50; i++) {
  let dadoUno = Math.floor(Math.random() * 6) + 1;
  console.log(`resultado del dado uno: ${dadoUno}`);
  let dadoDos = Math.floor(Math.random() * 6) + 1;
  console.log(`resultado del dado dos: ${dadoDos}`);
  let suma = [dadoUno + dadoDos];
  console.log(`${suma[i]}la suma de los dos dado es: ${suma}`);
}
