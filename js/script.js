const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;

        if (email === 'teste@gmail.com' && password === 'senha123') {
            localStorage.setItem('isLoggedIn', 'true'); // Seta o usuário como logado
            window.location.href = './index2.html'; // Redireciona para a página principal
        } else {
            alert('Email ou senha incorretos!');
        }
    });
});



