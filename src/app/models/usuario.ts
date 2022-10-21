import { Roles } from "./roles";

export class Usuario {
    id?: number;
    email: string;
    nombre: string;
    nombreUsuario: string;
    password: string;
    roles?: Roles[];

    constructor(email: string, nombre: string, nombreUsuario: string, password: string, roles?: Roles[], id?: number) {
        this.id = id;
        this.email = email;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}