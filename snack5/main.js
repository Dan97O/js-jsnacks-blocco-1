/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */


const array = ['']

for(let i = 0; i < 6; i++){
const numberUser = Number(prompt('inserisci un numero'))
console.log(numberUser);

if (numberUser % 2 === 1)
  array.push(numberUser)
  console.log(array);

}

let = j
while (j < 6){
  const numberUser = Number(prompt('inserisci un numero'))
console.log(numberUser);


  if (numberUser % 2 === 1)
  array.push(numberUser)
  console.log(array);

  j++
}