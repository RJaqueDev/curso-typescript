type Persona = {
    name : string;
    code: string | number;
    descripcion? : string;
};

const nuevaPersona : Persona = {
    name: 'Raul',
    code: '01',
    descripcion: 'Desarrollador'
}

type ServiceResponse = string | null | number | undefined;

type UserCharge = 'admin' | 'user' | 'guest';

let response : ServiceResponse;

let miTipo : UserCharge = 'admin';