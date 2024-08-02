/* 21. GRUPO DE DATOS
|* Sean los siguientes grupos de datos: (cod, d1 y d2), (A, 10, 5), (B, 4, 8), (C, 2, 6), (D, 3, 9),
|* (E, 1, 5). Para cada grupo, el d3 es el promedio de los otros datos. Se desea conocer el
|* promedio de cada grupo de datos, y cual grupo tiene el mayor promedio.
|* Para este caso, la salida debe ser así:
|* El grupo A tiene un promedio de 7.50
|* El grupo B tiene un promedio de 6.00
|* El grupo C tiene un promedio de 4.00
|* El grupo D tiene un promedio de 6.00
|* El grupo E tiene un promedio de 3.00
*/
import Controlador from "./Cl_controlador.js";

export default class Cl_main{
    constructor(){
        let control = new Controlador();
        control.procesarTodoGrupo();
    }
}