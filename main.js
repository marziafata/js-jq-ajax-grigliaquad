$(document).ready(function() {

// Create una griglia di 36 quadratini (6x6).
    for (var i = 0; i < 36; i++) {
        $('#griglia2').append('<div class="quadrato"></div>');
    }//fine ciclo for

// BONUS: generare la griglia in jQuery utilizzando handlebars

//creo le variabili che mi serviranno con HANDLEBARS
var source = $('#entry-template').html();
var template = Handlebars.compile(source);

var source2 = $('#entry-template2').html();
var template2 = Handlebars.compile(source2);

//genero la griglia
var context = {
    'titolo': 'Griglia creata con HANDLEBARS',
    'nome_id': 'griglia3'
};

var nuova_griglia = template(context);

$('.container').append(nuova_griglia);

//inserisco i quadratini
var context2 = {
    'classe': 'quadrato'
};

var nuovo_quadrato = template2(context2);

// Create una griglia di 36 quadratini (6x6).
    for (var i = 0; i < 36; i++) {
        $('#griglia3').append(nuovo_quadrato);
    }//fine ciclo for

// Ad ogni click su un quadratino...
$('.quadrato').click(function(){

    //salvo il riferimento al quadrato su cui ho cliccato
    var that = $(this);

    //...parte una richiesta ajax per recuperare un numero random tra 1 e 9.
    $.ajax({
        'url' : "https://flynn.boolean.careers/exercises/api/random/int",
        'method' : 'GET',
        'success' : function(data) {

                        var numero = data.response;
                        console.log(numero);

                        // Se il numero restituito dall'api è <= 5, scrivo il numero e il quadrato su cui l'utente ha cliccato diventa giallo;
                        if (numero <= 5) {
                            that.text(numero).addClass('giallo')
                        //se invece il numero restituito dall'api è > 5, scrivo il numero e il quadrato su cui l'utente ha cliccato diventa verde.
                        } else {
                            that.text(numero).addClass('verde');
                        }//fine if else

                    }, //fine function(data) di success
        'error' : function() {
            alert('qualcosa è andato storto...');
        }//fine function di error

    });//fine ajax

});//fine funzione click


});//fine document ready
