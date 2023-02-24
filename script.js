const buttonEnter = document.getElementById('entrar');
const email = document.getElementById('login-email');
const senha = document.getElementById('senha');
const agreementCheckbox = document.getElementById('agreement');

buttonEnter.addEventListener('click', () => {
  const email1 = email.value;
  console.log(email1);
  const senha1 = senha.value;
  console.log(senha1);
  if (email1 === 'tryber@teste.com' && senha1 === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementCheckbox.addEventListener('click', () => {
  const submitBtn = document.getElementById('submit-btn');

  if (document.getElementById('agreement').checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});
