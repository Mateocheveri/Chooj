let user = JSON.parse(localStorage.getItem("user"))

const progreso = document.querySelector("#progreso")



progreso.textContent = `${user.progreso}%`