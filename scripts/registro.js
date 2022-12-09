let formRegInput = document.getElementById("formReg");
let nombreRegInput = document.getElementById("nombreReg");
let apellidoRegInput = document.getElementById("apellidoReg");
let telefonoRegInput = document.getElementById("telefonoReg");
let passwordRegInput1 = document.getElementById("password1Reg");
let passwordRegInput2 = document.getElementById("password2Reg");
let correoRegInput = document.getElementById("correoReg");


formRegInput.onsubmit = (contexto) => {
    contexto.preventDefault();
    let email = correoRegInput.value;
    let pass = passwordRegInput1.value;
    let name = nombreRegInput.value;
    let surname = apellidoRegInput.value;
    let phone = telefonoRegInput.value;

    if (localStorage.getItem("usuarios")== null) {
        let usuarios = [];
        usuarios.push({ email: email, pass: pass, name: name, surname: surname, phone: phone });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        localStorage.setItem('LOGIN', 'SI');
        location.href = "../index.html";  
    }else{
        let verificarUsuario = JSON.parse(localStorage.getItem("usuarios"));
        resultado = verificarUsuario.some((elemento) => {
            return elemento.email == email;
        });
        if (resultado) {
            Swal.fire('El usuario ya existe')

        } else {
            let usuarios = JSON.parse(localStorage.getItem("usuarios"));
            usuarios.push({ email: email, pass: pass, name: name, surname: surname, phone: phone });
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            Swal.fire('El usuario fue agregado exitosamente')
            localStorage.setItem('LOGIN', 'SI');
            location.href = "../index.html"
        };
    }
}

