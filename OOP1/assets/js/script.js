// const studente = "mario rossi";


// localStorage.setItem("studente", studente);

// sessionStorage.setItem('studenteSession', studente);

// console.log(localStorage.getItem("studente"));
// console.log(sessionStorage.getItem('studenteSession'));


const studente = {
    "nome": "Giuseppe",
    "cognome": "Rossi",
    "eta": "25"
    
}

const studenteJson = JSON.stringify(studente);
// console.log(studenteJson);
sessionStorage.setItem("studente", studenteJson);

const studenteRetrieve = sessionStorage.getItem('studente');


