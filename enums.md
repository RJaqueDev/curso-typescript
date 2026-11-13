# Enumeraciones

Es un tipo de dato que nos permiter almacenar listas de valores estáticos

```
enum Usuarios{
    NormalUser,
    PayedUser,
    AdminUser,
    MegaUser
}

const mysUser = Usuarios.AdminUser;
console.log(mysUser);
```

Esto nos permite almacenar valores consecutivos de forma fácil, por ejemplo en la variable que se imprime por consola dice que es 2 por que es la posición en la que se encuentra en la enumeración

Tambien se pueden definir valores predeterminados para las enumeraciones

```
enum Usuarios2{
    NormalUser = 5,
    PayedUser = 7,
    AdminUser = 10,
    MegaUser = 15
}

const mysUser2 = Usuarios2.AdminUser;
console.log(mysUser2);
```