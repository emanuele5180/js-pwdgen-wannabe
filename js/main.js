

//Chiedi all’utente il suo nome,
var whatsYourName = prompt("come ti chiami?");

//poi chiedi il suo cognome,
var whatsYourSurname = prompt("qual'è il tuo cognome?")

//poi chiedi il suo colore preferito.
var color = prompt( "qual'è il tuo colore preferito?")

//Infine scrivi sulla pagina nomecognomecolorepreferito19
document.getElementById('password').innerHTML = whatsYourName + whatsYourSurname + color + 19;
