const btn = document.querySelector(".btn")

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('my-form').style.background = 'blue';
})
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    document.getElementById('my-form').style.background = 'orange';
})
btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    document.getElementById('my-form').style.background = 'cyan';
})





const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');


myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }
    else
        console.log(nameInput.value + " " + emailInput.value)
}