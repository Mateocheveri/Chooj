let user = JSON.parse(localStorage.getItem("usuarios"));

const form = document.querySelector('#quizForm');


// Capturar y validar respuestas (funciones existentes, sin cambios)
function capturarRespuestas() {
    const color = document.querySelector('input[name="question1"]:checked')?.value;
    const comida = document.querySelector('input[name="question2"]:checked')?.value;
    const musica = document.querySelector('input[name="question3"]:checked')?.value;
    const deporte = document.querySelector('input[name="question4"]:checked')?.value;
    const vacaciones = document.querySelector('input[name="question5"]:checked')?.value;

    return {
        p1: color,
        p2: comida,
        p3: musica,
        p4: deporte,
        p5: vacaciones
    };
}

function validarRespuestas(e) {
    e.preventDefault();

    const respuestasUser = capturarRespuestas();
    const respuestasCorrectas = {
        p1: "c",
        p2: "b",
        p3: "a",
        p4: "b",
        p5: "a"
    };

    let acumulado = 0;

    const arrayRespuestasUser = Object.values(respuestasUser);
    const arrayRespuestasCorrectas = Object.values(respuestasCorrectas);

    for (let i = 0; i < arrayRespuestasUser.length; i++) {
        if (arrayRespuestasUser[i] == arrayRespuestasCorrectas[i]) {
            acumulado++;
        }
    }
     /* todo lo que sigues es del modal*/
    const h1 = document.querySelector('#h1-respuesta');
    const btnf = document.querySelector('#btn-final');
    const btnx = document.querySelector('#btn-close');

    for (let i = 0; i < user.length; i++) {
        if (user[i].logged && acumulado >= 3) {
            h1.innerHTML = `Ganaste el examen 🟩 Has respondido correctamente ${acumulado} de ${arrayRespuestasUser.length} preguntas.`;
            btnx.style.display = "none";
            btnf.style.display = "block";
            user[i].progreso += 100;
            user[i].certificado = true;
            localStorage.setItem("usuarios", JSON.stringify(user));
            return;
        }
    }

    h1.innerHTML = `Debes repetir el examen 💀 Has respondido correctamente ${acumulado} de ${arrayRespuestasUser.length} preguntas.`;
    btnf.style.display = "none";
    btnx.style.display = "block";
}

form.addEventListener("submit", validarRespuestas); 