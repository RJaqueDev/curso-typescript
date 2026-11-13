# Interfaces

Podemos establecer tipos de datos como una interfaz, para eso usamos la siguiente sintaxis.

```
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
}

let persona2 : Person = {
    nombre: 'Raul',
    codigo: '01',
    cargo: 1,
    descripcion : 'Desarrollador'
};
```

tambien nos sirve para definir funciones

```
interface Person {
    nombre : string,
    codigo : string | number,
    cargo: number ,
    descripcion  : string,
    opcional? : string
    saludar : () => string
}
```

De esta forma opdemos podemos definir el tipo de dato que debe devolver la funcion 