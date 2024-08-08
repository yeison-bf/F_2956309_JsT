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
do {
  opcion = parseInt(
    prompt(`MENU
      -------------------
          1. Ciudades
          2. Aprendices
          3. Instructores
          4. Salir
          
          ¿Qué opción quiere?`)
  );

  switch (opcion) {
    case 1:
      alert("Opión 1");
      do {
        opcionCase1 = parseInt(
          prompt(`Ingrese su nombre
                1. Opción 1
                2. Opción 2
                3. Opción 3
                4. Salir`)
        );

        switch (opcion) {
          case 1:
            alert("Estoy en la Opción 1");
            break;
          case 2:
            alert("Estoy en la Opción 1");
            break;
          case 3:
            alert("Estoy en la Opción 1");
            break;
          case 4:
            alert("Adios de la opción 1");
            break;
          default:
            alert("Error de opción");
            break;
        }
      } while (opcionCase1 != 4);
      break;
    case 2:
      alert("Opción 2");
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
