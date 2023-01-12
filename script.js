let firstNameReg = /^[a-zA-Z]{1,20}$/;
let lastNameReg = /^[a-zA-Z]{1,20}$/;
let emailReg = /^\w+@\w+.\w+$/;
let passReg = /^\w{8,15}$/;

let firstName = document.querySelector('.input_fname');
let lastName = document.querySelector('.input_lname');
let email = document.querySelector('.input_email');
let email2 = document.querySelector('.input_email2');
let password = document.querySelector('.input_pass');
let password2 = document.querySelector('.input_pass2');
let submit1 = document.querySelector('.submit_block1');
let submit2 = document.querySelector('.submit_block2');
let sign_up_now = document.querySelector('.sign_up_now');
let form1 = document.querySelector('.form1');
let form2 = document.querySelector('.form2');
let user_window = document.querySelector('.user_window');
let info_user = document.querySelector('.info_user');
let email_user = document.querySelector('.email_user');
let sign_out = document.querySelector('.sign_out')


let green1 = document.querySelector('.true_1');
let green2 = document.querySelector('.true_2');
let green3 = document.querySelector('.true_3');
let green4 = document.querySelector('.true_4');

let red1 = document.querySelector('.false_1');
let red2 = document.querySelector('.false_2');
let red3 = document.querySelector('.false_3');
let red4 = document.querySelector('.false_4');


let modal_error2 = document.querySelector('.modal_error2');
let modal_error_email = document.querySelector('.modal_error_email')



firstName.addEventListener('input', function () {
    let testfname = firstNameReg.test(this.value)
    if (testfname) {
        this.style.outline = '2px solid green';
        green1.style.display = 'block';
        red1.style.display = 'none';

    } else {
        this.style.outline = '2px solid red';
        green1.style.display = 'none';
        red1.style.display = 'block';
    }
    if (firstNameReg.test(firstName.value) == true && lastNameReg.test(lastName.value) == true && emailReg.test(email.value) == true && passReg.test(password.value) == true) {
        submit1.disabled = false;
    }
})
lastName.addEventListener('input', function () {
    let testlname = lastNameReg.test(this.value)
    if (testlname) {
        this.style.outline = '2px solid green';
        green2.style.display = 'block';
        red2.style.display = 'none';
    } else {
        this.style.outline = '2px solid red';
        green2.style.display = 'none';
        red2.style.display = 'block';
    }
    if (firstNameReg.test(firstName.value) == true && lastNameReg.test(lastName.value) == true && emailReg.test(email.value) == true && passReg.test(password.value) == true) {
        submit1.disabled = false;
    }
})

email.addEventListener('input', function () {
    let testemail = emailReg.test(this.value)
    if (testemail) {
        this.style.outline = '2px solid green';
        green3.style.display = 'block';
        red3.style.display = 'none';
    } else {
        this.style.outline = '2px solid red';
        green3.style.display = 'none';
        red3.style.display = 'block';
    }
    if (firstNameReg.test(firstName.value) == true && lastNameReg.test(lastName.value) == true && emailReg.test(email.value) == true && passReg.test(password.value) == true) {
        submit1.disabled = false;
    }
})

password.addEventListener('input', function () {
    let testpass = passReg.test(this.value)
    if (testpass) {
        this.style.outline = '2px solid green';
        green4.style.display = 'block';
        red4.style.display = 'none';
    } else {
        this.style.outline = '2px solid red';
        green4.style.display = 'none';
        red4.style.display = 'block';
    }
    if (firstNameReg.test(firstName.value) == true && lastNameReg.test(lastName.value) == true && emailReg.test(email.value) == true && passReg.test(password.value) == true) {
        submit1.disabled = false;
    }
})


let users = []


submit1.addEventListener('click', function () {
    red1.style.display = 'none';
    red2.style.display = 'none';
    red3.style.display = 'none';
    red4.style.display = 'none';
    green1.style.display = 'none'
    green2.style.display = 'none'
    green3.style.display = 'none'
    green4.style.display = 'none'

    let newUser = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value,
    }

    if (localStorage.length > 0 && localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
    }


    if (!users.some(elem => elem.email.toLowerCase() === newUser.email.toLowerCase())) {
        users.push(newUser)
        firstName.value = '';
        lastName.value = '';
        email.value = '';
        password.value = '';
        modal_error_email.style.display = 'none';

        submit1.disabled = true
    } else {
        modal_error_email.style.display = 'block';
    }
    localStorage.setItem('users', JSON.stringify(users))

    firstName.style.outline = 'none';
    lastName.style.outline = 'none';
    email.style.outline = 'none';
    password.style.outline = 'none';

})

sign_up_now.addEventListener('click', function () {
    red1.style.display = 'none';
    red2.style.display = 'none';
    red3.style.display = 'none';
    red4.style.display = 'none';
    green1.style.display = 'none';
    green2.style.display = 'none';
    green3.style.display = 'none';
    green4.style.display = 'none';
    form1.classList.add('noactive');
    form2.classList.add('active');
})



submit2.addEventListener('click', function () {
    let loginUsers = JSON.parse(localStorage.getItem('users'));
    for (const user of loginUsers) {
        if (user.email == email2.value && user.password == password2.value) {
            info_user.innerHTML = `${user.firstname} ${user.lastname}`;
            email_user.innerHTML = `${user.email}`;
            user_window.classList.add('active')
            form2.classList.add('noactive')
            modal_error2.style.display = 'none'

        } else {
            modal_error2.style.display = 'block'
        }

    }
    email2.value = '';
    password2.value = '';

})

sign_out.addEventListener('click', function () {
    user_window.classList.remove('active')
    form2.classList.remove('noactive')
    modal_error2.style.display = 'none'
})