//SALIR DE LA SESION
desloguear = document.getElementById(`desloguear`);
desloguear.addEventListener("click", () => {
    localStorage.setItem('LOGIN', 'NO');
    location.href = "../pages/iniciarsesion.html";
})

