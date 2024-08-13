const start = () => {
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
};

start();
