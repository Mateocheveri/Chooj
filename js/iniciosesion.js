const form = document.querySelector("#post")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")




function usuarioValido(e){
    e.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].userName === usuario.value.trim() && usuarios[i].userPass === contraseña.value.trim()) {
            window.location = "../vistas/dashboard.html";
            usuarios[i].logged = true
            console.log(usuarios)
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            return
        } 
        else{
            console.log('volver a intentar')
        }
        
    }
    form.reset();
    
}

form.addEventListener('submit', usuarioValido);


/* function usuarioValido(e){
    e.preventDefault();

    let currentUser = JSON.parse(localStorage.getItem('user'));

    console.log(Boolean(usuario.value === currentUser.userName));
    console.log(Boolean(contraseña.value === currentUser.userPass));

    if(usuario.value === currentUser.userName && contraseña.value === currentUser.userPass){
        window.location = "../vistas/dashboard.html"
    }
    else{
        console.log('volver a intentar')
    }
    form.reset()
    
}

form.addEventListener('submit', usuarioValido); */