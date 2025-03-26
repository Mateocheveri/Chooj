
let user = JSON.parse(localStorage.getItem("usuarios"))  //array

const progreso = document.querySelector("#progreso")

console.log(user)

for (let i = 0; i < user.length; i++) {

    if(user[i].logged){
        progreso.textContent = `${user[i].progreso}%`
        console.log(user[i])
    }
    
}