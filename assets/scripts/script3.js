const selectDigito1 = document.querySelector('#selectDigito1'); // Seleccionamos por ID con querySelector
const selectDigito2 = document.querySelector('#selectDigito2');
const selectDigito3 = document.querySelector('#selectDigito3');
const botonIngresar = document.querySelector('#botonIngresar');
const resultadoPassword = document.querySelector('#resultadoPassword');

botonIngresar.addEventListener('click', function() {
    const password = `${selectDigito1.value}${selectDigito2.value}${selectDigito3.value}`;

    if (password === '911') {
        resultadoPassword.textContent = 'Password 1 correcto';
    } else if (password === '714') {
        resultadoPassword.textContent = 'Password 2 es correcto';
    } else {
        resultadoPassword.textContent = 'Password incorrecto';
    }
});