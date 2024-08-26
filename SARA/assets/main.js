// DEFINICIÓN DE ARREGLOS
let DataUsers = [];
let DataStudents = [];

const access = () => {
  let opcionAccess;
  do {
    opcionAccess = parseInt(
      prompt(`Bienvenido a SARA
        1. Acceso
        2. Registrarse
        3. Salir`)
    );

    switch (opcionAccess) {
      case 1:
        login();
        break;
      case 2:
        registerUserForLogin();
        break;
      case 3:
        "Ok, adios...";
        break;
      default:
        break;
    }
  } while (opcionAccess != 3);
};

// FUNCIONES DEL LOGUIN
const login = () => {
  if (DataUsers.length < 1) {
    let registro = parseInt(
      prompt(`Lo sentimos! no se encuentra un usuario registrado
            ¿Deseas registrarte?
            1. SI
            2. NO`)
    );

    if (registro == 1) {
        registerUserForLogin();
    }
  }else{
    let email = prompt(`Ingrese su correo`)
    let password = prompt(`Ingrese su contraseña`)
    let banderaAcceso =  false;

    DataUsers.forEach(element => {
        if(email == element.email  && password== element.password){
           banderaAcceso = true
        }
    });

    if(banderaAcceso){
        start();
    }else{
        alert("Credenciales incorrectas")
    }

  }
};

const registerUserForLogin = () => {
  let user = {
    fullName: prompt("Ingrese su nombre"),
    email: prompt("Ingrese su email"),
    password: prompt("Ingrese su contraseña")
  };

  DataUsers.push(user);
  alert(`Registro exitoso`);
  login();
};




const start = () =>{
    let opcion=0;
    let opcionAprrendiz  =0;
    do{
        opcion = parseInt(
            prompt(`Bienvenido a SARA
                
                Seleccione que desea hacer...
                1. Aprendices
                2. Programas
                3. Instructores
                4. Salir`)
          );
          switch (opcion) {
            case 1:
                do{
                    opcionAprrendiz = parseInt(
                        prompt(`Menú del Aprendíz
                            
                            Seleccione que desea hacer...
                            1. Registrar
                            2. Listar
                            3. Actualizar
                            4. Eliminar
                            5. Salir`)
                      );
                      switch (opcionAprrendiz) {
                        case 1:
                          alert("Hola mundo desde el case 1");
                          break;
                        case 2:
                          alert("Hola mundo desde el case 2");
                          break;
                        case 3:
                          alert("Hola mundo desde el case 3");
                          break;
                        case 4:
                          alert("Salir");
                          break;
                        case 5:
                          alert("Salir");
                          break;
                        default:
                            alert("Opción errada")
                          break;
                      }
                }while(opcionAprrendiz != 5)
              break;
            case 2:
              alert("Hola mundo desde el case 2");
              break;
            case 3:
              alert("Hola mundo desde el case 3");
              break;
            case 4:
              alert("Salir");
              break;
            default:
                alert("Opción errada")
              break;
          }
    }while(opcion != 4)
}


access()