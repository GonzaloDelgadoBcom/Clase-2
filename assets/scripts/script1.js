const imagen = document.querySelector('#imagen'); // Seleccionamos por ID con querySelector
let tieneBorde = false;

imagen.addEventListener('click', function() {
    if (tieneBorde) {
        imagen.style.border = '0px solid red';
        tieneBorde = false;
    } else {
        imagen.style.border = '2px solid red';
        tieneBorde = true;
    }
});