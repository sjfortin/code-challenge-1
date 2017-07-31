$(document).ready(function () {
    console.log('script and jquery sourced');

    // Event handler for generate button
    $('#generate').on('click', function(){
        $('#container').append('<div>Test</div>');
    });
});