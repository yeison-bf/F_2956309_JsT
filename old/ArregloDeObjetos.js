let datosAB = [];

function start() {
  let opcion = 0;
  do {
    opcion = parseInt(
      prompt(`CLIENTES
    1. Regitro
    2. Listado
    3. Salir`)
    );

    switch (opcion) {
      case 1:
        registro();
        break;
      case 2:
        listarDatos();
        break;
      case 3:
        break;
      case 4:
        alert("Adios");
        break;
      default:
        break;
    }
  } while (opcion != 3);
}

function registro() {
  // Definir el arreglo
  let cantidad = parseInt(prompt("¿Cuantos desea registrar?"));

  // Llenado dinamico
  for (let i = 0; i < cantidad; i++) {
    let ob = {
      nombre: prompt("Ingrese el nombre del usuario No. " + (i + 1)),
      apellidos: prompt("Ingrese los Apellido del usuario No. " + (i + 1))
    };
    datosAB.push(ob);
  }
}

function listarDatos() {
  let imprimir = "";
  for (let i = 0; i < datosAB.length; i++) {
    imprimir += i + 1 + " : " + datosAB[i].nombre + "\n";
  }
  alert(imprimir);
}

start();
