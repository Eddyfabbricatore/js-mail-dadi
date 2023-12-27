const message = document.querySelector('h3');
const btn = document.getElementById('btnPlay');

let numComputer;
let numUtente;

btn.addEventListener('click', function(){
  reset();

  numComputer = Math.floor(Math.random() * 6) + 1;
  numUtente = Math.floor(Math.random() * 6) + 1;

  if(numComputer < numUtente){
    message.innerHTML = `Il numero generato dall'utente è ${numUtente}, quello generato dal computer è ${numComputer}. Il vincitore è l'utente`;
  }else if(numComputer === numUtente){
    message.innerHTML = `Il numero generato dall'utente è ${numUtente}, quello generato dal computer è ${numComputer}. Nessun vincitore`;
  }else{
    message.innerHTML = `Il numero generato dall'utente è ${numUtente}, quello generato dal computer è ${numComputer}. Il vincitore è il computer`;
  }
})

function reset(){
  numComputer = '';
  numUtente = '';
}