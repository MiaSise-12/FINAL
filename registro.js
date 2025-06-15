document.getElementById('formularioEvento').addEventListener('submit', function (event) {
    const formulario = event.target;


    if (!formulario.checkValidity()) {
        event.preventDefault(); 
        event.stopPropagation();
    }

  
    formulario.classList.add('was-validated');
});
