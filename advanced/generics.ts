const age : number = 15;

// Los generics se usan para que las variables puedan usar otro tipo de dato del que tiene definido

interface MyInterface<T> {
    field : T;
}

const myValue : MyInterface<string> ={
    field : "Algo"
}

interface Example {
    id: string,
    name: string
}

// const myOtherValue:  MyInterface<Example>;

class MyClass<T> {
    field : T;

    constructor(field: T){
        this.field = field;
    }
}

// const MyObject :  MyClass<number> = new MyClass();

// Example with classes

interface UserResponse {
    id : number;
    name : string
}

class HttpResponse<T> {
    data: T;
    status : number;
    code: number;

    constructor(data: T, status: number, code: number){
        this.data = data;
        this.status = status;
        this.code = code;
    }
}

const fetchUser = () : UserResponse => {
    return{
        id: 1 ,
        name: "Kevin"
    }
}

const myUser = fetchUser();
// Para convertir la respuesta hacemos lo siguiente
const res = new HttpResponse(myUser, 200, 1);
console.log(res);

