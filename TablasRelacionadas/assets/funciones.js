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

function buscaCompania(){
   let nit = 901789111;
    alert(returnCompany(nit));
    
}

buscaCompania();
function deleteCompany(){
    let nit = 901789111;
}

function updateDataCompnay(){
    let nit = 901789111;
}

function returnCompany(nit){
    let data = "";
    for (const element of companies) {
        if(nit  === element.nit){
            data+= element.name
       }
    }
    return data;
}