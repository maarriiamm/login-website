var signUpName = document.getElementById('signName');
var signUpEmail = document.getElementById('signEmail');
var signUpPassword = document.getElementById('signPassword');
var user = [];
 if(localStorage.getItem('user') !=null){
    user = Json.parse(localStorage.getItem('user'))
 }else{
    user =[];
 }
function add() {
    if(signUpName.value =='' ||signUpEmail.value == '' || signUpPassword.value == ''){
        document.getElementById('message').innerHtml = `<p class='text-center' >All input is required</p>`
    }else{
        var obj ={
                name:signUpName.value,
                email:signUpEmail.value,
                password:signUpPassword.value
        }
            user.push(obj);
            location.href ='../login/index.html';
            localStorage.setItem('user' , JSON.stringify(user));
    }
}