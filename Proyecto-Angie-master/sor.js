
function validar() {
    let checkbox1=document.getElementById ("1").checked;
    console.log(checkbox1);
    let checkbox2=document.getElementById ("2").checked;
    console.log(checkbox2);
    let checkbox3=document.getElementById ("3").checked;
    console.log(checkbox3);
    let checkbox4=document.getElementById ("4").checked;
    console.log(checkbox4);
    let checkbox5=document.getElementById ("5").checked;
    console.log(checkbox5);
    let checkbox6=document.getElementById ("6").checked;
    console.log(checkbox6);
    let checkbox7=document.getElementById ("7").checked;
    console.log(checkbox7);
    let checkbox8=document.getElementById ("8").checked;
    console.log(checkbox8);
    let checkbox9=document.getElementById ("9").checked;
    console.log(checkbox9);
    let checkbox10=document.getElementById ("10").checked;
    console.log(checkbox10);
    let checkbox11=document.getElementById ("11").checked;
    console.log(checkbox11);
    let checkbox12=document.getElementById ("12").checked;
    console.log(checkbox12);

        let resultado=" mesa 1 disponible " + (!checkbox1) +"<br>";
        resultado=resultado+" mesa 2 disponible " + (!checkbox2) + "<br>";
        resultado=resultado+" mesa 3 disponible " + (!checkbox3) +"<br>";
        resultado=resultado+" mesa 4 disponible " + (!checkbox4) + "<br>";
        resultado=resultado+" mesa 5 disponible " + (!checkbox5) + "<br>"; 
        resultado=resultado+" mesa 6 disponible " + (!checkbox6) + "<br>";
        resultado=resultado+" mesa 7 disponible " + (!checkbox7) +"<br>";
        resultado=resultado+" mesa 8 disponible " + (!checkbox8) + "<br>";
        resultado=resultado+" mesa 9 disponible " + (!checkbox9) + "<br>";
        resultado=resultado+" mesa 10 disponible " + (!checkbox10) + "<br>";
        resultado=resultado+" mesa 11 disponible " + (!checkbox11) + "<br>";
        resultado=resultado+" mesa 12 disponible " + (!checkbox12) +"<br>";
        document.getElementById("mensaje").innerHTML=resultado;
}

// let name = prompt("escriba su nombre: ");
// alert("Bienvendio " + name);
// let personas = prompt ("Cantidad de personas: ");
// if(Number(personas)<4){
// alert("Buscando mesas disponibles para: " + personas);
// }
// else{
//     alert ("No hay mesas para de esa capacidad");
// }
// let reserva =prompt("indique su numero de reserva: ");
// if (Number(reserva) < 12) {
//     alert ("Su mesa esta lista, oprima validar para saber la cantidad de mesas disponibles");
// }
// else{
//     alert("reserva no existente");
// }
