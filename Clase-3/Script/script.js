const Matricula = 900000
let Creditos, Descuento, TotalM;

function LeerDatos() {
    Creditos = Number(prompt('Ingrese cantidad de creditos'))
}

LeerDatos()
Calcular(Creditos)

function Calcular(Creditos) {
    if (Creditos <= 6) {
        Descuento = Matricula * 0.5;
    }
    else if (Creditos > 6 && Creditos <= 10) {
        Descuento = Matricula * 0.25
    }
    else if (Creditos > 10) {
        Descuento = 0;
    }
    else {
        alert('Opción no valida')
    }
    TotalM = Matricula - Descuento
    return TotalM
}

console.log(TotalM)
alert(TotalM)
