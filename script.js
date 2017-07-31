$(document).ready(function () {
    // console.log('script and jquery sourced');

    // Global variables
    var buttonClickCounter = 0;

    // Event handler for generate button
    $('#container').on('click', '#generate', function () {
        buttonClickCounter++;
        $('#container').append('<div class="generated">' +
            '<p class="buttonCounter">' +
            buttonClickCounter +
            '</p>' +
            '<button class="swap">Swap</button>' +
            '<button class="delete">Delete</button>' +
            '</div>');
    });

    $('#container').on('click', '.delete', function () {
        ($(this)).parent().remove();
    });

    $('#container').on('click', '.swap', function () {
        ($(this)).parent().toggleClass('yellow');
    });
});