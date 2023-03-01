const btnEnviar = document.getElementById('submit');

const validacion = (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const form = document.getElementById("formContacto");
  if (email.value === "") {
    alert("Por favor, escribe tu email");
    email.focus();
    return false;
  }
    
  if (telefono.value === "") {
    alert("Por favor, escribe tu telefono");
    telefono.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  alert("Sus datos se guardaron correctamente.");
  form.reset();
  return true; //Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submit.addEventListener('click', validacion);

