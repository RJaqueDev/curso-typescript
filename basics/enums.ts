enum Usuarios{
    NormalUser,
    PayedUser,
    AdminUser,
    MegaUser
}

const mysUser = Usuarios.AdminUser;
console.log(mysUser);

enum Usuarios2{
    NormalUser = 5,
    PayedUser = 7,
    AdminUser = 10,
    MegaUser = 15
}

const mysUser2 = Usuarios2.AdminUser;
console.log(mysUser2);

enum Usuarios3{
    NormalUser = "normal",
    PayedUser = "payed",
    AdminUser = "admin",
    MegaUser = "mega"
}

const mysUser3= Usuarios3.AdminUser;
console.log(mysUser3);

if(mysUser3 === Usuarios3.AdminUser){
    console.log("El usuario es admin");
}