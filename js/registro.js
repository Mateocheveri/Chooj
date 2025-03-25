const form = document.querySelector("#post")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")

function registrarUser(e){
    e.preventDefault();
    
    let user = {
        userName: usuario.value,
        userPass: contraseña.value,
        progreso:0 ,
        userLogged: false
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    for (let i = 0; i < usuarios.length; i++) {
        if (usuario.value === usuarios[i].userName){
            alert("el ususario ya esta registrado 💥")
            return
        }      
    }

    usuarios.push(user)

    localStorage.setItem("usuarios", JSON.stringify(usuarios)) 
    form.reset()
    window.location = "../vistas/inicio-sesion.html"
}

form.addEventListener('submit',registrarUser)