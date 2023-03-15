/* Snack 4 (sia con for che con while):
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */




const authorization = ['paolo', 'daniel', 'marco', 'matteo' ];

const invited = prompt('come ti chiami?');

let userName = "";


for (let i = 0; i < authorization.length; i++) {
  authorization[i] === userName ? invited = true : false;
}

alert(`Ciao ${userName}. ${invited ? "Sei nella lista" : "Non sei nella lista"}`);


let j = 0
while(i < authorization.length){
  authorization[j] === userName ? invited = true : false;
  j++
}
alert(`Ciao ${userName}. ${invited ? "Sei nella lista" : "Non sei nella lista"}`);
