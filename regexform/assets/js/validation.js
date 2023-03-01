
let btn=document.getElementById('btn-submit');
btn.addEventListener('click',(e)=>{
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
    var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
   

    if (firstname==" ") {
        document.getElementById('fnameerror').innerHTML=" **required";
    }
    else if(firstnamecheck.test(firstname)){
        document.getElementById('fnameerror').innerHTML=" ";
        
    }
    else {
        document.getElementById('fnameerror').innerHTML=" **FirstName is Invalid ";
        
    }
//-------------------------------------------------------------------------------
    if (firstnamecheck.test(lastname)) {
        document.getElementById('lnameerror').innerHTML=" ";
    }
    else{
        document.getElementById('lnameerror').innerHTML=" **LastName is Invalid ";
        
    }

    if (mobilecheck.test(phonenum)) {
        document.getElementById('phoneerror').innerHTML=" ";
    }
    else{
        document.getElementById('phoneerror').innerHTML=" **Phone Number  is Invalid ";
    
    }
    if (emailid==" ") {
        document.getElementById('emailerror').innerHTML=" required";
    }
    else if(emailcheck.test(emailid)){
        document.getElementById('emailerror').innerHTML=" You have entered an invalid email address! ";
        
    }
    else{
        document.getElementById('emailerror').innerHTML=" **Email  is Invalid ";
        
    }
    if (passwordcheck.test(password)) {
        document.getElementById('passerror').innerHTML=" ";
    }
    else{
        document.getElementById('passerror').innerHTML=" **Password is Invalid ";
        
    }

});



