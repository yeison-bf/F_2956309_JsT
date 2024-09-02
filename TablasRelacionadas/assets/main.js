// Colección de empleados
let employess = [];
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
                complanyId :prompt(`${listCompany()} Empresa`),
            }
            listCompany()

            

            
        }
        break;
      case 2:
        alert("case 2");
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
        list+=`${(i+1)} : ${companies[i].name}`
    }
}



start();






















