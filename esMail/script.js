const emailList = [
  'user@gmail.com',
  'personaluser@gmail.com',
  'booleanuser@gmail.com'
];

let email;

const btn = document.getElementById('btnLogin');

const message = document.querySelector('h2');

btn.addEventListener('click', function(){
  reset();

  email = document.getElementById('inputEmail').value;

  for(let i = 0; i < emailList.length; i++){
    if(email === emailList[i]){
      message.innerHTML = 'Accesso consentito';

      break;
    }else{
      message.innerHTML = 'Accesso non consentito';
    }
  }
})

function reset(){
  email = '';
}