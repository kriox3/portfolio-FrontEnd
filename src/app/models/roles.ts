export class Roles {
    id?: number;
    rolNombre: string;

    constructor(rolNombre: string, id?: number) {
        this.id = id;
        this.rolNombre = rolNombre;
    }
}