let datauser = [];

const start = () => {
  let opcion;
  do {
    opcion = parseInt(
      prompt(`Bienvenido Sara
            1.Iniciar Sesión
            2.Registrar
            3.Salir`)
    );
    switch (opcion) {
      case 1:
        login();
        break;
      case 2:
        registrar();
        break;
      case 3:
        alert("Adios");
        break;

      default:
        alert("Error de opción");
        break;
    }
  } while (opcion !== 3);
};

const login = () => {
  if (datauser.length < 1) {
    let registro = parseInt(
      prompt(`¿Deseas registrase?
            1. Si
            2. No`)
    );
    if (registro == 1) {
      registrar();
    }
  } else {
    alert("login");
    let gmail = prompt("Ingrese su gmail");
    let password = prompt("Ingrese su contraseña");
    let bandera = false;
    datauser.forEach((element) => {
      if (gmail == element.gmail && password == element.password) {
        bandera = true;
      }
    });
    if (bandera) {
      sara()
    }else{
        alert("No se encuentra el usuario")
    }
  }
};

const registrar = () => {
  let user = {
    nombre: prompt(`Ingrese su nombre`),
    gmail: prompt(`Ingrese su gmail`),
    password: prompt(`Ingrese su contraseña`)
  };
  datauser.push(user);
};

const sara =() =>{
    let opcion;
    do {
      opcion = parseInt(
        prompt(`Bienvenido Aprendiz
              1.Registrar
              2.Listar
              3.Salir`)
      );
      switch (opcion) {
        case 1:
          login();
          break;
        case 2:
          registrar();
          break;
        case 3:
          alert("Adios");
          break;
  
        default:
          alert("Error de opción");
          break;
      }
    } while (opcion !== 3);
}

start();


