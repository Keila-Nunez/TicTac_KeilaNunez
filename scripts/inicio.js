let usuarios = [];

let formInput = document.getElementById("form");
let passInput = document.getElementById("password");
let emailInput = document.getElementById("email");

formInput.onsubmit = (contexto) => {
    contexto.preventDefault();
    let email = emailInput.value;
    let pass = passInput.value;
    usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let resultado = usuarios.some((elemento) => {
        return elemento.email == email && elemento.pass == pass;
    });
    if (resultado) {
        alert("Usuario logueado");
        location.href = "../index.html";
    } else {
        resultado = usuarios.some((elemento) => {
            return elemento.email == email;
        });
        resultado
            ? alert("Contraseña incorrecta")
            : alert("Usuario inexistente, para su registro diríjase a la opción: ¿Primera vez?");
    }
}; 
