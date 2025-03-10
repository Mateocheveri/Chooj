const form = document.querySelector("#post")
const usuario = document.querySelector("#nombre")
const contraseña = document.querySelector("#contra")


function usuarioValido(e){
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

form.addEventListener('submit', usuarioValido);