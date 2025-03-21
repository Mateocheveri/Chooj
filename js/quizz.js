let user = JSON.parse(localStorage.getItem("user"))

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
        p1: "Azul",
        p2: "Jazz",
        p3: "Montaña",
        p4: "PC",
        p5: "Hamburguesa"
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
    if(acumulado >= 3){
        console.log("Ganaste el examen 🟩")
        user.progreso += 25
        localStorage.setItem("user",JSON.stringify(user))
    }
    else{
        console.log("Debes repetir el examen 💀")
    }

    console.log(acumulado)

   /*  if(respuestasCorrectas.p1 === respuestasUser.p1){
        acumulado++
    }
    if(respuestasCorrectas.p2 === respuestasUser.p2){
        acumulado++
    }
    if(respuestasCorrectas.p3 === respuestasUser.p3){
        acumulado++
    }
    if(respuestasCorrectas.p4 === respuestasUser.p4){
        acumulado++
    }
    if(respuestasCorrectas.p5 === respuestasUser.p5){
        acumulado++
    }

    console.log("Tu acumulado es :", acumulado)

    for (const key in respuestasCorrectas) {
        console.log(respuestasCorrectas[key])
    } */
} 

form.addEventListener("submit", validarRespuestas)