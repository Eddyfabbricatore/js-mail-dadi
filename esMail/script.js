const emailList = [
  'user@gmail.com',
  'personaluser@gmail.com',
  'booleanuser@gmail.com'
];

const emailInserita = document.getElementById('InputEmail1').value;

const btn = document.getElementById('btn1');

const accesso = document.querySelector('h2');

btn.addEventListener('click', function(){
  // console.log(emailInserita);

  for(let i = 0; i < emailList.length; i++){
    if(emailInserita === emailList[i]){
      // console.log(emailInserita);
      // console.log(emailList);
      console.log('presente');

      accesso.innerHTML = 'Accesso consentito';

      break;
    }else{
      // console.log(emailInserita);
      // console.log(emailList);
      console.log('Non presente');

      accesso.innerHTML = 'Accesso non consentito';
    }
  }
});