const alerta = document.getElementById('miAlerta');


const datos = {
    nombre: '',
    apellido: '',
    email: '',
    mensaje:''
};
let boton = document.querySelector('.formulario');
let nombre = document.querySelector('#name');
let apellido = document.querySelector('#lastname');
let email = document.querySelector('#email');
let mensaje = document.querySelector('#sms');



nombre.addEventListener('input',leer);
apellido.addEventListener('input',leer);
email.addEventListener('input',leer);
mensaje.addEventListener('input',leer);


function leer(e){
    datos[e.target.id] = e.target.value;
}

function validarFormulario (e) {
    e.preventDefault();
    const {nombre, apellido, email, mensaje} = datos;

    console.log(nombre,apellido,email,mensaje)
    if (!nombre || !apellido || !email || !mensaje) {
        alerta.style.display = 'block';
        let camp1 = document.querySelector('#err1')
        camp1.textContent = 'Campo obligatorio';
        let camp2 = document.querySelector('#err2');
        camp2.textContent = 'Campo obligatorio';
        let camp3 = document.querySelector('#err3');
        camp3.textContent = 'Campo obligatorio';
        let camp4 = document.querySelector('#err4');
        camp4.textContent = 'Porfavor, selecciona una solicitud';
        let camp5 = document.querySelector('#err5');
        camp5.textContent = 'Campo obligatorio';
        let camp6 = document.querySelector('#err6');
        camp6.textContent = 'Para continuar, es necesario que des consentimiento a ser contactado';
        const error = [camp1, camp2, camp3, camp4, camp5, camp6];
        error.forEach((dato) => {
            dato.style.color = 'red';
            dato.style.marginTop = '1rem';
            dato.style.marginLeft = '.5rem';
        });
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            document.querySelector('.query1').style.border = "1px solid red";
            document.querySelector('.query2').style.border = "1px solid red";
            input.style.border = "1px solid red";
        });
        return;
    }
    alert("Mensaje Enviado!\nGracias por completar el formulario, nos pondremos en contacto pronto.");
}

boton.addEventListener('submit',validarFormulario);



let cerrar = document.querySelector('#cerrar');

cerrar.addEventListener('click', () => {
    window.location.reload();
})