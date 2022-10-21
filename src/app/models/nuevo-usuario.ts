import { Roles } from "./roles";

export class NuevoUsuario {
    id?: number;
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    roles: string[];

    constructor(nombre: string, nombreUsuario: string, email: string, password: string, roles: string[], id?:number) {
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.email = email;
        this.password = password;
        this.roles = roles;
        this.id = id;
    }


}