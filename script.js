// Global variables
var buttonClickCounter = 0;

$(document).ready(function () {
    // console.log('script and jquery sourced');

    // Event handlers
    $('#container').on('click', '#generate', generateDiv);
    $('#container').on('click', '.delete', removeDiv);
    $('#container').on('click', '.swap', swapColor);
});

// Generate div
function generateDiv() {
    buttonClickCounter++;
    $('#container').append('<div class="generated">' +
        '<p class="buttonCounter">' +
        buttonClickCounter +
        '</p>' +
        '<button class="swap">Swap</button>' +
        '<button class="delete">Delete</button>' +
        '</div>');
}

// Remove div when its child delete button is clicked
function removeDiv() {
    ($(this)).parent().remove();
}

// Toggle div background color when its child swap button is clicked
function swapColor() {
    ($(this)).parent().toggleClass('yellow');
}