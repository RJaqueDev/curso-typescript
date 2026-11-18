import {generateId, PI} from "./utils.module";
//Se puede cambiar el nombre de la propiedad que estamos importando
import {User as Person} from "./utils.module";

const myNumber = 10 * PI;

const myUser : Person = {
    id : generateId().toString(),
    name: "Kevin"
}
