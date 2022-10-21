export class Proyecto {
    id?: number;
    nombre: string;
    informacion: string;
    fecha: string;
    accesoUrl: string;

    constructor(nombre: string, informacion: string, fecha: string, accesoUrl: string, id?: number) {
        this.id = id;
        this.nombre = nombre;
        this.informacion = informacion;
        this.fecha = fecha;
        this.accesoUrl = accesoUrl;
    }
}