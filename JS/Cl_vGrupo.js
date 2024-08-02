export default class Cl_vGrupo{
    leerDato(){
        let cod = prompt("Inserte el código del grupo: ");
        let d1 = prompt("Inserte el primer dato del grupo: ");
        let d2 = prompt("Inserte el segundo dato del grupo: ");
        return {cod, d1, d2};
    }

    reportarGrupo(salida, cod, d3){
        salida.innerHTML += `<br>El grupo ${cod} tiene un promedio de ${d3}`;
    }
}