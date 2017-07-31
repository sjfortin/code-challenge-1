
$(document).ready(function () {
    // console.log('script and jquery sourced');

    // Global variables
    var buttonClickCounter = 0;

    // Event handler for generate button
    $('#generate').on('click', function(){
        buttonClickCounter++;
        $('#container').append('<div><p class="buttonCounter">' + buttonClickCounter + '</p></div>');
    });
});