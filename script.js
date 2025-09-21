const alerta = document.getElementById('miAlerta');

const datos = {
    nombre: '',
    apellido: '',
    email: '',
    solicitud: '',
    mensaje: '',
    consentimiento: ''
};

console.log(datos);
function leer(e) {
    datos[e.target.id] = e.target.value;
    // asi imprimimos el valor actualizado de cada evento.
    // en lugar de uno estatico
    console.log(datos[e.target.id]); 
}

// Aqui van los elementos a verificar
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const solicitud = document.querySelectorAll(".request");
const consentimiento = document.querySelector("#check");

// mandar elemento a funcion
nombre.addEventListener('input', leer);
apellido.addEventListener('input', leer);
email.addEventListener('input', leer);
mensaje.addEventListener('input', leer);
solicitud.forEach((e) => {
    e.addEventListener('click', leer);
})
consentimiento.addEventListener('click', leer);

function exito(){
    alerta.style.display = 'block';
    alerta.textContent = "Gracias por llenar el cuestionario, nos contactaremos en breve contigo mediante el correo proporcianado";
}

// validar formulario
formulario.addEventListener('submit',function(e) {
    e.preventDefault();
    let {nombre,apellido,email,solicitud,mensaje,consentimiento} = datos;
    let UnoPorUno = [nombre,apellido,email,solicitud,mensaje,consentimiento];
    if (!nombre &&  !apellido && !email && !solicitud && !mensaje && !consentimiento) {
        alerta.style.display = 'block';
        let err1,err2,err3,err4,err5,err6;
        err1 = document.querySelector("#err1");
        err2 = document.querySelector("#err2");
        err3 = document.querySelector("#err3");
        err4 = document.querySelector("#err4");
        err5 = document.querySelector("#err5");
        err6 = document.querySelector("#err6");
        const cambioError = [err1,err2,err3,err4,err5,err6];
        cambioError.forEach((e) => {
            e.style.color = 'red';
            e.style.marginTop = '1rem';
            e.style.marginLeft = '.5rem';
            e.textContent = "campo obligatorio";
        });
        return;
    }
    console.log("Informacion enviada");
    
    exito();
    setTimeout(()=> {
        alerta.remove();
    },3000);
    
});

let cerrar = document.querySelector('#cerrar');
cerrar.addEventListener('click', (e) => {
    e.preventDefault();
    alerta.style.display = 'none';
    let err1,err2,err3,err4,err5,err6;
    err1 = document.querySelector("#err1");
    err2 = document.querySelector("#err2");
    err3 = document.querySelector("#err3");
    err4 = document.querySelector("#err4");
    err5 = document.querySelector("#err5");
    err6 = document.querySelector("#err6");
    const cambioError = [err1,err2,err3,err4,err5,err6];
    cambioError.forEach((e) => {
        e.style.color = 'unset';
        e.style.marginTop = '0';
        e.style.marginLeft = '0';
        e.textContent = "";
    });
});
