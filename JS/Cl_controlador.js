import { Cl_mGrupo } from "./Cl_mGrupo.js";
import { Cl_mTodoGrupo } from "./Cl_mTodoGrupo.js";
import { Cl_vGrupo } from "./Cl_vGrupo.js";
import { Cl_vTodoGrupo } from "./Cl_vTodoGrupo.js";

export class Controlador{
    constructor(){
        this.Cl_mTodoGrupo = new Cl_mTodoGrupo();
        this.Cl_vGrupo = new Cl_vGrupo();
        this.Cl_vTodoGrupo = new Cl_vTodoGrupo();
        this.salida = document.getElementById("salida");
    }

    procesarTodoGrupo(){
        do {
            let dato = this.Cl_vGrupo.leerDato();
            let grupo = new Cl_mGrupo(dato);
            this.Cl_mTodoGrupo.procesarGrupo(grupo);
            this.Cl_vGrupo.reportarGrupo(this.salida, grupo.cod, grupo.d3().toFixed(2));
        } while (confirm("¿Desea procesar otro grupo?"));

        this.Cl_vTodoGrupo.reportarTodoGrupo(this.salida, this.Cl_mTodoGrupo.devolverCodMay());
    }
}