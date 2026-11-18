//Para declarar una funcion podemos usar Arrow Functions

const saludar = (nombre : string) => {
    console.log(`Hola ${nombre}`);
}

saludar("Raul");

function decirAdios(){
    console.log("Adios");
}

decirAdios();

function mostrar(): number{
    console.log("Retornando numero")
    return 1;
}

const showNombre : (nombre : string) => string = (nombre) => {
    return `El nombre es ${nombre}`;
}


interface Response {
    id: number, 
    name:string,
    charge : string,
    edad: number
}

const response = {
    id: 1,
    name: "Raul",
    charge: "Developer",
    edad: 31
}

const funcionRespuesta = () => Response {
    
}