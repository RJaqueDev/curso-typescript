namespace DatabaseEntity{

    export class User{
        constructor(public name: string) {

        }
    }

    const myUser = new User("Raul")

    console.log(myUser)

    
}

const otherUser = new DatabaseEntity.User("Kevin");
console.log(otherUser);