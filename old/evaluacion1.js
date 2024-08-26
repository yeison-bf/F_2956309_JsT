let nombre = prompt("Ingrese su nombr");
let valor = prompt("Ingrese un numero");

let opcion = parseInt(
  prompt(`¿Que operacion desea hacer
    1. Sumar
    2. Restar
    3. Multiplicar`)
);

switch (opcion) {
  case 1:
    alert("Sumar");
    let resultadoSuma = "";
    for (let i = 1; i <= 10; i++) {
      resultadoSuma += `${valor} + ${i} = ${valor + i}\n`;
    }
    alert(resultadoSuma);
    break;
  case 2:
    alert("Restar");
    let resultadoResta = "";
    for (let i = 1; i <= 10; i++) {
      resultadoResta += `${valor} - ${i} = ${valor - i}\n`;
    }
    alert(resultadoResta);
    break;
  case 3:
    alert("Multiplicar");
    let resultadoMul = "";
    for (let i = 1; i <= 10; i++) {
      resultadoMul += `${valor} * ${i} = ${valor * i}\n`;
    }
    alert(resultadoMul);
    break;
  case 4:
    alert("Adios");
    break;
  default:
    break;
}
