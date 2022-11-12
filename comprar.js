
const valorTicket = 200;


let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre          = document.getElementById("nombreInput");
let apellido        = document.getElementById("apellidoInput");
let email            = document.getElementById("correoInput");
let cantidadTickets = document.getElementById("cantidadInput");
let categoria       = document.getElementById("categoriaTickets");


 function total_a_pagar() {
 let totalValorTickets = (cantidadTickets.value) * valorTicket;


 if (categoria.value == 0) {
     totalValorTickets = totalValorTickets ;
 }
 if (categoria.value == 1) {
     totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
 }
 if (categoria.value == 2) {
     totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
 }
 if (categoria.value == 3) {
     totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
 }


 totalpago.innerHTML = totalValorTickets;
}

function borrar_total_a_pagar() {
    totalpago.innerHTML = "";
    nombreInput.value = "";
    apellidoInput.value = "";
    correoInput.value = "";
    cantidadInput.value = "";
 
}
btnBorrar.addEventListener('click', borrar_total_a_pagar);
btnResumen.addEventListener('click', total_a_pagar);
