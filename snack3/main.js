/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* 
let sum = 0;
for (let i = 0; i <= 10; i++) {
    const numb = Number(prompt('inserisci un numero'));
    const somma += numb
    console.log(somma); 
  } */
  

  //Con while

  let sum = 0;
  let i = 0;
  while (i < 10) {
    let numb = Number(prompt('inserisci un numero'))
    sum += numb
    i++    
  }
  console.log(sum); 

