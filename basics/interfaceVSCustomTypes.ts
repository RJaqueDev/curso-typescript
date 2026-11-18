
interface Personita{
    nombre :  string,
    edad: number
}

//Con las interfaces podemos ampliar las funcionalidades de la misma

interface Empleado extends Personita{
    cargo: string
}

const nuevoEmpleado : Empleado = {
    nombre: 'Raul',
    edad: 30,
    cargo: 'Desarrollador'
}

// Con los Types igual se pueden extender las funcionalidades de los mismos
type Personito = {
    nombre :  string,
    edad: number
} 

type User = {
    id: string
}

type Admin = User & {
    cargo: string
}

type SuperAdmin = Admin & Personito;