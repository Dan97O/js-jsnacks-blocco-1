/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* 
for (let i = 0; i <= 10; i++) {
    const numerUser = Number(prompt('inserisci un numero'));
    const somma = numerUser + i
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

