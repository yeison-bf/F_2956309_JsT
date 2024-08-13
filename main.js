// let nombre = "Camila Herrera";
// let edad = 17;

// let informacionUsuario = `Hola como ${nombre}
// Tu edad es ${edad}`;

// let estructuraHtml =
//     "<table>"+
//         "<thead>"+

//         "</thead>"+
//     "</table>"

// console.log("Hola \n"+"Bien "+edad+" "+nombre)

// .toLocaleLowerCase();

// nombre=nombre.toLowerCase()// Todo a minusclas
// nombre2=nombre.toUpperCase(); // Todo a mayusculas

// alert(nombre+"\n"+nombre2)
let opcion = 0;
let opcionCase1 = 0

let listadoAprendices = [];
do {
  opcion = parseInt(
    prompt(`MENU
      -------------------
          1. Aprendices
          2. Ciudades
          3. Instructores
          4. Salir
          
          ¿Qué opción quiere?`)
  );

  switch (opcion) {
    case 1:
      do {
        opcionCase1 = parseInt(
          prompt(`Ingrese su nombre
                1. Registro
                2. Listado
                3. Salir`)
        );

        switch (opcionCase1) {
          case 1:
            alert("Listado de aprendices");
              let cantidad = parseInt(prompt("¿Cuantos aprendices desea registrar?"))
              
              // Llenado dinamico
              for (let i = 0; i < cantidad; i++) {
                let nombre = prompt(`Nombre del aprendiz ${(i+1)}`)
                listadoAprendices[i] = nombre
              }

              alert("Registro exitoso de los aprendices");
            break;
          case 2:
            let mensaje = "";
            alert("Listado de aprendicez");
              for (let i = 0; i < listadoAprendices.length; i++) {
                mensaje += `${i+1}: ${listadoAprendices[i]}\n`;
              }
              alert(mensaje);
            break;
          case 3:
            alert("Estoy en la Opción 1");
            break;
          default:
            alert("Error de opción");
            break;
        }
      } while (opcionCase1 != 3);
      break;
    case 2:
      break;
    case 3:
      alert("Opción 3");
      break;
    case 4:
      alert("Adios...");
      break;
    default:
      alert("Error de opción");
      break;
  }
} while (opcion != 4);




// Prueba de carga
console.log("Hola")