/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */


const firstWord = prompt('inserisci la prima parola');
const secondWord = prompt('inserisci la seconda parola');

if(firstWord.length > secondWord.length){
    console.log(secondWord.length, "la seconda parola è piu corta");
    console.log(firstWord.length, "la prima parola è piu lunga");
} else if (secondWord.length > firstWord.length){
    console.log(firstWord.length, "la prima parola è piu corta");
    console.log(secondWord.length, "la seconda parola è piu lunga")
} else {
    console.log("le parole hanno stessa lunghezza")
}

