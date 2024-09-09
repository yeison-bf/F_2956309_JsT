// Colección de empleados
let employees = [];
// Colección de empresas
let companies = [
  {
    id: 0,
    nit: 901789888,
    name: "SENA"
  },
  {
    id: 1,
    nit: 901789111,
    name: "ADSO"
  }
];

function start() {
  let opc = 0;
  do {
    opc = parseInt(
      prompt(`Menú
            1. Registro
            2. Listado
            3. Salir`)
    );

    switch (opc) {
      case 1:
        let cantidad = parseInt(prompt(`¿Cuantos desea registrar?`));
        for (let i = 0; i < cantidad; i++) {
            let employee = {
                document:prompt(`Documento del empleado`),
                name:prompt(`Nombre del empleado`),
                lastname: prompt(`Apellidos del empleado`),
                complanyId : parseInt(prompt(`Listado de empresas:
                  
                  ${listCompany()}

                  Digite el código del programa `)),
            }
            employees.push(employee)
            alert("Registro exitoso...")
        }
        break;
      case 2:
        alert(listEmployees())
        break;
      case 3:
        alert("Adios...");
        break;
      default:
        break;
    }
  } while (opc != 3);
}




function listCompany(){
    let list="";
    for (let i = 0; i < companies.length; i++) {
        list+=`Codigo: ${(i)} | Nombre ${companies[i].name}\n`
    }
    return list;
}



// Imprimir listado de aprendice
function listEmployees(){
  let list="";
  for (const element of employees) {
    list+=`
    Documento: ${element.document}
    Nombre: ${element.name}
    Apellidos: ${element.lastname}
    Empresa ${obtenerNombreEmpresa(element.complanyId)}\n`
  }
  return list;
}


function obtenerNombreEmpresa(id){
  return companies[id].name
}


start();






















