export class Habilidad{
    id?: number;
    nombre: string;
    porcentaje: string;

constructor(nombre: string,porcentaje: string, id?: number){
    this.id= id;
    this.nombre = nombre;
    this.porcentaje = porcentaje;
}
}