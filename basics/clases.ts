class Animal {
    name = "Animal Generico";

    private edad = 10;

    saludar(){
        console.log(`Hola soy un ${this.name}`);
    }
}

class Perro extends Animal {

    tipo = "Pastor Aleman";

    constructor(){
        super();
    }

    ladrar(){
        console.log('Guau Guau');
    }    
}

const miAnimal : Animal = new Animal();
miAnimal.saludar();

const miPerro : Perro = new Perro();
miPerro.saludar();
miPerro.ladrar();