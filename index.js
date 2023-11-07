/*Tengo desarrollada la siguiente función en javascript
function suma (a,b,callback){
let c = a +b;
callback();
}
¿Que es el tercer parámetro recibido?
¿En que casos es obligatorio desarrollar este tipo de funciones?
Realizar un llamado a la función de ejemplo.

El tercer Parámetro recibido es un Callback, es una función que
se pasa a otra función como argumento*/


const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

let calc1 = '';
let calc2 = '';
let operacion = null;


botones.forEach((boton) => {
    boton.addEventListener('click', (event) => {
        const { target } = event;
        const accion = target.getAttribute('data-action');
        const textoBoton = target.textContent;

        if (!accion) {
            if (pantalla.textContent === '0' || pantalla.textContent === calc1) {
                pantalla.textContent = textoBoton;
            } else {
                pantalla.textContent += textoBoton;
            }
        }

        if (accion === 'decimal') {
            if (!pantalla.textContent.includes('.')) {
                pantalla.textContent += '.';
            }
        }

        if (accion === 'sumar' || accion === 'restar' || accion === 'multiplicar' || accion === 'dividir') {
            if (calc1 === '') {
                calc1 = pantalla.textContent;
                operacion = accion;
                pantalla.textContent = '0';
            }
        }

        if (accion === 'borrar') {
            calc1 = '';
            calc2 = '';
            operacion = null;
            pantalla.textContent = '0';
        }

        if (accion === 'calcular') {
            if (calc1 !== '' && calc2 === '') {
                calc2 = pantalla.textContent;
                pantalla.textContent = calcular();
                calc1 = '';
                calc2 = '';
                operacion = null;
            }
        }
    });
});


function calcular() {
    const num1 = parseFloat(calc1);
    const num2 = parseFloat(calc2);
    switch (operacion) {
        case 'sumar':
            return (num1 + num2).toString();
        case 'restar':
            return (num1 - num2).toString();
        case 'multiplicar':
            return (num1 * num2).toString();
        case 'dividir':
            if (num2 === 0) {
                return 'Error';
            }
            return (num1 / num2).toString();
        default:
            return '0';
    }
}
