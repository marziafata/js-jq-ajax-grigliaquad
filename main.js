$(document).ready(function() {

// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars


    for (var i = 0; i < 36; i++) {
        $('#griglia2').append('<div class="quadrato"></div>');
    }

    $('.quadrato').click(function(){
            var numero = genera_random(0, 9);
            if (numero <= 5) {
                $(this).text(numero).addClass('giallo')
            } else {
                $(this).text(numero).addClass('verde');
            }
    })

    function genera_random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
