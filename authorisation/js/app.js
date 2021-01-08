'use strict';


localStorage.setItem('users', JSON.stringify(users));
const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const loginInput = document.getElementById('login');
// const users = JSON.parse(localStorage.getItem('users'));
const logoutBtn = document.querySelector('.logout-btn');
const table = document.querySelector('.table');
const tbody = document.querySelector('tbody');


// ---------Отображение элементов в зависимости от регистрации на сайте---------------------------
function displayComponents() {
    loginForm.classList.toggle('display');
    logoutBtn.classList.toggle('display');
    table.classList.toggle('display');

}
// ------------Авторизация формы-------------------------------------------------------------------
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    let flag = false;
    let rights = false;

    for (let obj of users) {
        const { password, login, status } = obj;
        if (password === passwordInput.value && login === loginInput.value) {
            console.log('goood');
            sessionStorage.setItem('loginUser', JSON.stringify(obj))
            flag = true;
            if (status === 'admin') {
                rights = true;
            }
            break;
        }
    }
    if (flag) {
        displayComponents();
        for (let obj of users) {
            let user = new UserInfo(obj, tbody, rights);
            user.renderRow();
        }
    }
    else {
        alert('wrong password or login');
    }
});

// --------------Логаут----------------------------------------------------------------------------
logoutBtn.addEventListener('click', () => {
    displayComponents();
    console.log(tbody.childNodes.length);
    do {
        console.log(tbody.lastChild);
        tbody.lastChild.remove();
    }
    while (tbody.childNodes.length !== 0)
    sessionStorage.removeItem('loginUser');

});