function numberMultiplos (numero1, numero2) {

    var numero1 = Number (prompt('Digite um número'));
    var numero2 = Number (prompt('Digite outro número'));

    if (numero1 % numero2 == 0 || numero2 % numero1 == 0) {
        alert('Os números são multiplos');
    } else {
        alert('Não são multiplos');
    }
}
numberMultiplos();
numberMultiplos();
numberMultiplos();
