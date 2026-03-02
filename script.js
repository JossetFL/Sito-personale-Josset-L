let ore = 999;
function assenze() {
    let n = parseInt(document.getElementById("progresso").value);
    if (isNaN(n)) n = 0;
    let assenze = n * 6;
    let ore_assenti = ore - assenze;
    let percentuale = (100 * ore_assenti) / ore;
    if (percentuale < 0) percentuale = 0;
    if (percentuale > 100) percentuale = 100;
    document.getElementById("barra").style.width = percentuale + "%";
}


function aggiornaBarra() {
    let valore = parseInt(document.getElementById("percentualeInput").value);
    if (isNaN(valore)) valore = 0;
    if (valore < 0) valore = 0;
    if (valore > 100) valore = 100;
    document.getElementById("barraPercentuale").style.width = valore + "%";
}


function calcola() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operazione = document.getElementById("operazione").value;
    let risultato;

    if (isNaN(num1) || isNaN(num2)) {
        risultato = "Inserisci numeri validi";
    } else {
        switch (operazione) {
            case '+':
                risultato = num1 + num2;
                break;
            case '-':
                risultato = num1 - num2;
                break;
            case '*':
                risultato = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    risultato = "Errore: divisione per zero";
                } else {
                    risultato = num1 / num2;
                }
                break;
            default:
                risultato = "Operazione non valida";
        }
    }

    document.getElementById("risultato").innerText = "Risultato: " + risultato;
}