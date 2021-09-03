// global variable
const userName = document.getElementById('input-username');
const userPass = document.getElementById('input-password');
const wrong = document.getElementById('alert');


document.getElementById('login-button').addEventListener('click', function() {
    const userText = userName.value;
    const PassText = userPass.value;
    if (userText === 'iloveyou' && PassText === 'myheart') {
        window.open('home.html');
        wrong.style.display = 'none';
    } else {
        wrong.style.display = 'block';
    }
    userName.value = '';
    userPass.value = '';
})