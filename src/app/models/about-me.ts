export class AboutMe {
    id?: number;
    nombre: string;
    apellido: string;
    foto: string;
    localidad: string;
    info: string;

    constructor(nombre: string, apellido: string, foto: string, localidad: string, info: string, id?: number) {

        this.id = id;
        this.nombre= nombre;
        this.apellido= apellido;
        this.foto= foto;
        this.localidad= localidad;
        this.info= info;

    }
}

