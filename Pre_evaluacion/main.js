// Arreglos generales
let ListSex = [
    {code: 1,name: "Femenino"},
    {code: 2,name: "Masculino"},
];
let LisTypeDocument = [];
let ListCities = [];
let ListProgram = [];
let ListUsers = [];

function start() {
  let opcionMenu = 0;

  do {
    opcionMenu = parseInt(
      prompt(`Menú
            1. Usuarios
            2. Tipo de docuemtos
            3. Sexo
            4. Ciudad
            5. Programa
            6. Filtros
            7. Salir`)
    );

    switch (opcionMenu) {
      case 1:

        break;
      case 2:
        startPrograma(LisTypeDocument, 'Tipo de documento')
        break;
      case 3:
        startPrograma(ListSex, 'Sexo')
        break;
      case 4:
        startPrograma(ListCities, 'Ciudad')
        break;
      case 5:
        startPrograma(ListProgram, 'Programa')
        break;
      case 6:
        break;
      case 7:
        alert("Chao pues...")
        break;

      default:
        break;
    }
  } while (opcionMenu != 7);
}




// FUNCION DEL PROGRAMA
function startPrograma(nameCollectionProcess, process){
    do{
    opcionMenuPrograma = parseInt(
        prompt(`Menú
              1. Registo
              2. Listado
              3. Salir`)
      );
  
      switch (opcionMenuPrograma) {
        case 1:
            createProgram(nameCollectionProcess, process);
          break;
        case 2:
            alert(listData(nameCollectionProcess))
          break;
        case 3:
          alert("Chao pues...")
          break;
        default:
          break;
      }
    } while (opcionMenuPrograma != 3);
}

// Listado de programas
function listData(nameCollection){

    let dataProgram = "";
    let i=0;
    if(nameCollection.length<1){
        alert("No se tienen registro")
    }else{
        for (const element of nameCollection) {
            dataProgram += `Id : ${i} - Código : ${element.code} - Nombre: ${element.name} \n`
            i++;
        }
    }
    return dataProgram;
}



// Función crear programa

function createProgram(nameCollection, name){
    let dataCreate = {
        code:prompt("Ingrese el código del "+name),
        name:prompt("Ingrese el nombre del "+name),
    }
    nameCollection.push(dataCreate)
    alert(name+" creado exitosamente")
}


start()