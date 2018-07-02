/* Holiii acá va tu código también */

let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword")
let btn1 = document.getElementById("btnValidar");


/* Aqui esta la validacion del input */
btn1.addEventListener('click', () => {
  if (email.value == '' || password.value == '') {
  alert('Debe introducir su correo electronico o contraseña'); 
  }
  else if (password.length > 8) {
  alert('Por favor introduzca solo 8 digitos numericos');
  }
  else{
    window.open("menu.html")
  }
})

