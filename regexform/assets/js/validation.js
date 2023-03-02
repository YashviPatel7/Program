
let btn = document.getElementById('btn-submit');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var phonenum = document.getElementById('phonenumber').value;
    var emailid = document.getElementById('email').value;
    var password = document.getElementById('pass').value;
    var salary = document.getElementById('salary').value;

    var firstnamecheck = /^[A-Za-z]{3,30}$/;
    var mobilecheck = /^[89][0-9]{9}$/;
    var passwordcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    var emailcheck = /^[A-Za-z0-9_.]{3,}@[A-Za-z]{3,}[.][A-Za-z.]{2,6}$/;

    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var phnumber = document.getElementById('phonenumber');
    var email = document.getElementById('email');
    var pass = document.getElementById('pass');
    var salry = document.getElementById('salary');

    if (firstname == " ") {
        document.getElementById('fnameerror').innerHTML = " required";
    }
    else if (firstnamecheck.test(firstname)) {
        document.getElementById('fnameerror').innerHTML = " ";
        fname.style.border = "1px solid green";
    }
    else {
        document.getElementById('fnameerror').innerHTML = " FirstName is Invalid ";
        fname.style.border = "1px solid red";

    }
    //-------------------------------------------------------------------------------
    if (firstnamecheck.test(lastname)) {
        document.getElementById('lnameerror').innerHTML = " ";
        lname.style.border = "1px solid green";
    }
    else {
        document.getElementById('lnameerror').innerHTML = " LastName is Invalid ";
        lname.style.border = "1px solid red";
    }

    if (mobilecheck.test(phonenum)) {
        document.getElementById('phoneerror').innerHTML = " ";
        phnumber.style.border = "1px solid green";
    }
    else {
        document.getElementById('phoneerror').innerHTML = " Phone Number  is Invalid ";
        phnumber.style.border = "1px solid red";
    }
    if (emailcheck.test(emailid)) {
        document.getElementById('emailerror').innerHTML = " ";
        email.style.border = "1px solid green";
    }
    else {
        document.getElementById('emailerror').innerHTML = " You have entered an invalid email address! ";
        email.style.border = "1px solid red";
    }
    if (passwordcheck.test(password)) {
        document.getElementById('passerror').innerHTML = " ";
        pass.style.border = "1px solid green";
    }
    else {
        document.getElementById('passerror').innerHTML = " Password is Invalid ";
        pass.style.border = "1px solid red";
    }
    if (salary >= 5000) {
        document.getElementById('salaryerror').innerHTML = " ";
        salry.style.border = "1px solid green";
    }
    else {
        document.getElementById('salaryerror').innerHTML = " salary must be 5000 up ";
        salry.style.border = "1px solid red";
    }

    if (fnameerror.innerHTML == " " &&
        lnameerror.innerHTML == " " &&
        phoneerror.innerHTML == " " &&
        emailerror.innerHTML == " " &&
        passerror.innerHTML == " " &&
        salaryerror.innerHTML == " ") {
        var firstname = document.getElementById('fname').value;
        var lastname = document.getElementById('lname').value;
        var phonenum = document.getElementById('phonenumber').value;
        var emailid = document.getElementById('email').value;
        var password = document.getElementById('pass').value;
        var salary = document.getElementById('salary').value;

        fetch('http://localhost:3000/data', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({
                firstname, lastname, phonenum, emailid, password, salary
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
        let regi = document.getElementById('btn-submit');
        regi.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = "home.html";
        })
    }


});