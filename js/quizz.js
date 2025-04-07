let user = JSON.parse(localStorage.getItem("usuarios"))

const form = document.querySelector('#quizForm')


function capturarRespuestas() {
    
    // Capturar respuestas de cada pregunta
    const color = document.querySelector('input[name="question1"]:checked')?.value;
    const comida = document.querySelector('input[name="question2"]:checked')?.value;
    const musica = document.querySelector('input[name="question3"]:checked')?.value;
    const deporte = document.querySelector('input[name="question4"]:checked')?.value;
    const vacaciones = document.querySelector('input[name="question5"]:checked')?.value;
    
    return{
        p1: color,
        p2: comida,
        p3: musica,
        p4: deporte,
        p5: vacaciones
    }

}

function validarRespuestas(e){
    e.preventDefault()

    const respuestasUser = capturarRespuestas()
    const respuestasCorrectas ={
        p1: "c",
        p2: "b",
        p3: "a",
        p4: "b",
        p5: "a"
    }

    let acumulado = 0

    const arrayRespuestasUser = Object.values(respuestasUser)
    const arrayRespuestasCorrectas = Object.values(respuestasCorrectas)

    //Recorrer el array de arrayRespuestasUser y el de arrayRespuestasCorrectas y las compara
    for(let i = 0; i<arrayRespuestasUser.length;i++){
        if(arrayRespuestasUser[i] == arrayRespuestasCorrectas[i]){
            acumulado++
        }
    }

    //verifico cuanto lleva el usuario de progreso previo
    // let user = JSON.parse(localStorage.getItem("user"))|| {}; 
    //condicion  que me dice si gane o perdi el examen

    const h1 = document.querySelector('#h1-respuesta')

    for (let i = 0; i < user.length; i++) {
       if(user[i].logged && acumulado >= 3){
            h1.innerHTML=`Ganaste el examen 🟩 Has respondido correctamente ${acumulado} de ${arrayRespuestasUser.length} preguntas.`;
            console.log("Ganaste el examen 🟩")
            user[i].progreso += 100
            user[i].certificado = true
            /* window.location = "../vistas/dashboard.html" */
            localStorage.setItem("usuarios",JSON.stringify(user))
            
            return
        } 
           
    }
    h1.innerHTML=`Debes repetir el examen 💀 Has respondido correctamente ${acumulado} de ${arrayRespuestasUser.length} preguntas.`;
    console.log(acumulado)
} 




form.addEventListener("submit", validarRespuestas)