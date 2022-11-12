const disponible = {
  100: 3,
  50: 6,
  20: 10,
  10: 50,
  1: 50,
};

// el object.keys() saca las llaves al objeto osea en este caso al objeto "disponible"
const billetes = Object.keys(disponible);
console.log(billetes);

// se calcula el total de billetes disponible
const totalDisponible = () => {
  let total = 0;
  for (let i = 0; i < billetes.length; i++) {
    total += billetes[i] * disponible[billetes[i]];
  }
  return total;
};
console.log(totalDisponible());

// se calcula el valor a retirar
const procesar = (valorARetirar) => {
  if (valorARetirar > totalDisponible) {
    console.log("Error no hay suficiente dinero");
    return;
  }

  let saldoARetirar = valorARetirar;
  while (saldoARetirar > 0) {
    contador = 0;
    for (let i = 0; i < billetes.length; i++) {
      contador = calcularBilletes(saldoARetirar, billetes[i]);
      console.log(`${contador} billetes de ${billetes[i]} denomincacion`);
      saldoARetirar -= contador*billetes[i];
    }
  }
}
const calcularBilletes = (saldoARetirar , denominacion) => {
    let contador = saldoARetirar/denominacion;
    if(contador > disponible[denominacion]){
        contador = disponible[denominacion]
    }
    disponible[denominacion]-= contador
    return contador
}
procesar(1350)
