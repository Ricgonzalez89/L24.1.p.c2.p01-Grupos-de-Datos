export default class Cl_mGrupo{
    constructor({cod, d1, d2}){
        this.cod = cod;
        this.d1 = +d1;
        this.d2 = +d2;
    }

    set cod(c){
        this._cod = c;
    }

    set d1(da1){
        this._d1 = +da1;
    }

    set d2(da2){
        this._d2 = +da2;
    }

    get cod(){
        return this._cod;
    }

    get d1(){
        return this._d1;
    }

    get d2(){
        return this._d2;
    }

    d3(){
        return (this.d1 + this.d2) / 2;
    }
}