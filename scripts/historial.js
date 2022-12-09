//SALIR DE LA SESION
const desloguear = document.getElementById(`desloguear`);
desloguear.addEventListener("click", () => {
    localStorage.setItem('LOGIN', 'NO');
    location.href = "../pages/iniciarsesion.html";
})

