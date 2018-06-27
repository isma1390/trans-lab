/* Holiii acá va tu código también */

let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword")
let btn1 = document.getElementById("btnValidar");
const boxTwo = document.getElementById("caja-2");
const boxOne = document.getElementById("caja-1");


/* Aqui esta la validacion del input */
btn1.addEventListener('click', () => {
  if (email.value == '' || password.value == '') {
  alert('Debe introducir su correo electronico o contraseña'); 
  }
  if (password.length == number && password.length <= 8) {
  alert('POr favor introduzca solo 8 digitos numericos');
  }

  // tratando que desasparezca //
boxTwo.style.display = 'block';
boxOne.style.display = 'none';
})

