let usuarios = [];
let formRegInput = document.getElementById("formReg");
let nombreRegInput = document.getElementById("nombreReg");
let apellidoRegInput = document.getElementById("apellidoReg");
let telefonoRegInput = document.getElementById("telefonoReg");
let passwordRegInput = document.getElementById("password1Reg");
let correoRegInput = document.getElementById("correoReg");


formRegInput.onsubmit = (contexto) => {
    contexto.preventDefault();
    let email = correoRegInput.value;
    let pass = passwordRegInput.value;
    let name = nombreRegInput.value;
    let surname = apellidoRegInput.value;
    let phone = telefonoRegInput.value;
    let resultado = usuarios.some((elemento) => {
        return elemento.email == email;
    });
    if (resultado) {
        alert("El usuario ya existe");
    } else {
        usuarios.push({ email: email, pass: pass, name: name, surname: surname, phone: phone });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert("El usuario fue agregado exitosamente");
        location.href = "../index.html";
    }
};