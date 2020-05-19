$(document).ready(function() {

// Create in HTML una griglia di 36 quadratini (6x6).
    for (var i = 0; i < 36; i++) {
        $('#griglia2').append('<div class="quadrato"></div>');
    }//fine ciclo for

// BONUS: generare la griglia in jQuery utilizzando handlebars

// Ad ogni click su un quadratino...
$('.quadrato').click(function(){

    //definisco il this fuori da ajax perchè non verrbbe letto dentro la funzione
    var quadrato_corrente = $(this);

    //parte una richiesta ajax per recuperare un numero random tra 1 e 9.
    $.ajax({
        'url' : "https://flynn.boolean.careers/exercises/api/random/int",
        'method' : 'GET',
        'success' : function(data) {

                        var numero = data.response;
                        console.log(numero);

                        // Se il numero restituito dall'api è <= 5, scrivo il numero e il quadrato su cui l'utente ha cliccato diventa giallo;
                        if (numero <= 5) {
                            quadrato_corrente.text(numero).addClass('giallo')
                        //se invece il numero restituito dall'api è > 5, scrivo il numero e il quadrato su cui l'utente ha cliccato diventa verde.
                        } else {
                            quadrato_corrente.text(numero).addClass('verde');
                        }//fine if else

                    }//fine function(data)

    });//fine ajax

});//fine funzione click


});//fine document ready
