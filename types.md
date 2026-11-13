# Types en Typescript

Para este ejercicio, crearemos la carpeta **basics** dentro de esa carpeta tendremos un archivo llamado **types.ts** y modificaremos el **pacakage.json** para que ejecute el archivo que se encuentra en esa carpeta y que el resultado de la transformación lo deje guardado en otra carpeta

```
"scripts": {
      "start": "tsc basics/types.ts --outdir dist/ && node dist/types.js"
}
```

Los tipos principales de datos son 
  - number
  - string
  - boolean
  - Object 
  - Array : En este caso puede ser de diferentes tipos y se puede desclarar de 2 formas
  - any
  - void : Se usa para funciones que no retorna nada
  - unknown

```
let nombre: string = 'Raul';

let edad : number = 31;

let isDesarrollador : boolean = true;

let persona : Object = {};

let frutas : Array<string> = ['manzana', 'pera'];
let frutas2 : string[] = ['manzana', 'pera'];
let frutas3 : Object[] = [{'nombre':'Manzana'}, {'nombre':'Pera'}];

let respuesta : any = 'Hola'; 
respuesta = 31;
respuesta = true;
respuesta = ['manzana', 123123];
```

Una variable puede tener 2 tipos como por ejemplo
```
response5: number | null

// El operador ? sirve para validar el valor de la variable antes de realizar la funcion
response5?.toString 
```

### Type ASSERTION

Nos sirve para castear las variables

```
let mensaje : any = "";
(mensaje as string).toUpperCase();

let mensajeMayuscula = <string>mensaje;
mensajeMayuscula.toUpperCase();
```

Tambien existe un tipo de datos para cuando estamos declarando variables que son elementos del **DOM**

```
const canvas = document.getElementById("canvas")  as HTMLCanvasElement;
const canvas2 = <HTMLCanvasElement>document.getElementById("canvas");
```

