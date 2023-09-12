const message = document.querySelector('h2');

const numComputer = Math.floor(Math.random() * 6) + 1;
const numUtente = Math.floor(Math.random() * 6) + 1;

// console.log(numComputer);
// console.log(numUtente);

if(numComputer < numUtente){
  message.innerHTML = 'Il vincitore è l\'utente';
}else if(numComputer === numUtente){
  message.innerHTML = 'I due numeri sono uguali, nessun vincitore';
}else{
  message.innerHTML = 'Il vincitore è il computer';
}