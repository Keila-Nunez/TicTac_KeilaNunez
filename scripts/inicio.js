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
        localStorage.setItem('LOGIN', 'SI'); 
        location.href = "../index.html";
    } else {
        resultado = usuarios.some((elemento) => {
            return elemento.email == email;
        });
        resultado

            ? Swal.fire('Contraseña incorrecta')
            : Swal.fire({
                icon: 'error',
                title: 'Usuario inexistente, para su registro diríjase a la opción: ¿Primera vez? o  <a href="../pages/registro.html">haga click aquí</a>',
              })
    }
}; 


/*if(localStorage.getItem('LOGIN') == null || localStorage.getItem('LOGIN') == 'NO'){ 
    console.log('no esta logeado lo envio a la pagina de logueo');
    //ACA VA LA REDIRECCION A LA PAGINA
}


//LUEGO DE QUE SE LOGUEE CREAS LA VARIABLE CON   localStorage.setItem('LOGIN', 'SI');  
//Y CADA VES QUE TE SALGAS ES DECIR LO QUIERES DESLOGUEAR CAMBIAS EL ESTADO A localStorage.setItem('LOGIN', 'NO');*/