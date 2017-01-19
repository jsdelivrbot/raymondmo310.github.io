function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.charCode == 32) {
        $("#easy").trigger("click");
    }
}

var websites = ["leaf-lettuce.github.io"];

function randomWebsite() {
    var website = websites[Math.floor(Math.random()*websites.length)];
    window.location = website;
}

