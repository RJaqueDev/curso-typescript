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

function saludar() : void{
    console.log('Hola');
}

type tipoRespuesta= string | undefined;

let response : tipoRespuesta;

let response5 : number | null = 5; 
response5?.toString

let respuesta2 : tipoRespuesta;


// Tipe ASSERTION
let mensaje : any = "";
(mensaje as string).toUpperCase();

let mensajeMayuscula = <string>mensaje;
mensajeMayuscula.toUpperCase();

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const canvas2 = <HTMLCanvasElement>document.getElementById('canvas');