let persona : Object = {
    nombre: 'Raul',
    codigo: '01',
    cargo: 1,
    descripcion : 'Desarrollador'
};

interface Person {
    nombre : string,
    codigo : string | number,
    cargo: number ,
    descripcion  : string,
    opcional? : string
    saludar : () => string
}

let persona2 : Person = {
    nombre: 'Raul',
    codigo: '01',
    cargo: 1,
    descripcion : 'Desarrollador',
    saludar : () => "Hola"
};

