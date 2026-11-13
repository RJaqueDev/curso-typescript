"use strict";
var Usuarios;
(function (Usuarios) {
    Usuarios[Usuarios["NormalUser"] = 0] = "NormalUser";
    Usuarios[Usuarios["PayedUser"] = 1] = "PayedUser";
    Usuarios[Usuarios["AdminUser"] = 2] = "AdminUser";
    Usuarios[Usuarios["MegaUser"] = 3] = "MegaUser";
})(Usuarios || (Usuarios = {}));
const mysUser = Usuarios.AdminUser;
console.log(mysUser);
var Usuarios2;
(function (Usuarios2) {
    Usuarios2[Usuarios2["NormalUser"] = 5] = "NormalUser";
    Usuarios2[Usuarios2["PayedUser"] = 7] = "PayedUser";
    Usuarios2[Usuarios2["AdminUser"] = 10] = "AdminUser";
    Usuarios2[Usuarios2["MegaUser"] = 15] = "MegaUser";
})(Usuarios2 || (Usuarios2 = {}));
const mysUser2 = Usuarios2.AdminUser;
console.log(mysUser2);
