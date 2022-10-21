export class Educacion{
    id?: number;
    establecimiento: string;
    titulo: string;
    fecha: string;
    completado: boolean;

constructor(establecimiento: string,titulo: string,fecha: string,completado: boolean,  id?: number){
    this.id= id;
    this.establecimiento = establecimiento;
    this.titulo = titulo;
    this.fecha = fecha;
    this.completado = completado
}
}