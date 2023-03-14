/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */



for (let i = 0; i <= 10; i++) {
    const numerUser = Number(prompt('inserisci un numero'));
    const somma = numerUser + i
    console.log(somma); 
  }
  