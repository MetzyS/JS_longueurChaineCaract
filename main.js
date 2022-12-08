// let inputText = prompt("Veuillez entrer une suite de caractères.", "Entrez la suite de caractère ici");
// alert("Votre texte est composé de: " + inputText.length + " caractères.");

// // variable.substring(debut,fin)
// // variable.split(lettre a extraire).join("")    .join("") = remplacer par "".

// function removeSelectedChar() {
//     let selectedChar = prompt("Veuillez entrer le caractère a retirer", "Entrez le caractère ici");
//     console.log("prompt = "+ selectedChar);
//     inputText.split("");
//     console.log("Vous avez retirer: " + selectedChar);
//     console.log("Voici le résultat: " + inputText);
// }


// inputTextArray = inputText.split("");


function transformText() {
    let textInput = prompt("Entrez le texte ici", "");
    let textCount = textInput.length;
    console.log("Le texte comporte :" + textCount + " caractères");
    // textInput = textInput[0].toUpperCase() + textInput.substring(1, textInput.length -1);
    textInput = textInput[0].toUpperCase() + textInput.slice(1, -1);
    console.log(textInput);
}