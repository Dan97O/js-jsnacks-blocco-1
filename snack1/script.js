const numberUser = Number(prompt('Inserisci primo numero'));
const numberUs = Number(prompt('Inserisci secondo numero'));

console.log(numberUser, numberUs);

if(numberUser > numberUs){
    console.log(numberUser, "numero maggiore");
} else if (numberUs > numberUser){
    console.log(numberUs, "numero maggiore")
}
