export default class Cl_mTodoGrupo{
    constructor(){
        this.mayor = 0;
        this.auxCod = " ";
    }

    procesarGrupo(g){
        if (g.d3() > this.mayor){
            this.mayor = g.d3();
            this.auxCod = g.cod;
        }
    }

    devolverCodMay(){
        return this.auxCod;
    }
}