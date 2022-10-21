export class Experiencia {
    id?: number;
    establecimiento: string;
    ocupacion: string;
    desde: string;
    hasta: string;
    actual: boolean;

    constructor(establecimiento: string, ocupacion: string, desde: string, hasta: string, actual: boolean, id?: number) {
        this.id = id;
        this.establecimiento = establecimiento;
        this.ocupacion = ocupacion;
        this.desde = desde;
        this.hasta = hasta;
        this.actual = actual;
    }
}