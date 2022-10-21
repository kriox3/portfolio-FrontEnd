import { AboutMe } from "./about-me";
import { Red } from "./red";

export class Contacto{
    id?: number;
    accesoUrl: string;
    persona: AboutMe;
    red: Red;

constructor(accesoUrl: string, persona: AboutMe, red: Red, id?: number){
    this.id= id;
    this.accesoUrl = accesoUrl;
    this.persona = persona;
    this.red = red;
}
}