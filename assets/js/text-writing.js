let i = 0
let a = 0
let isBackspacing = true

const textArray = [
    "La formation n'est jamais finis",
    "Internet n'oublie rien",
    "Fermer la fenêtre et allez voir les pingouins"
];

const speedForward = 100    //Typing Speed
const speedWait = 2000      // Wait between typing and backspacing
const speedBackspace = 50   //Backspace Speed

typeWriter("header-writing", textArray);

function typeWriter(id, text) {
    let element = $("#" + id)
    let aString = text[a]
    let eHeader = element.children("h2")
    // Determine if animation should be typing or backspacing
    if (!isBackspacing) {
        // If full string hasn't yet been typed out, continue typing
        if (i < aString.length) {
            eHeader.text(eHeader.text() + aString.charAt(i))
            i++
            setTimeout(function(){ typeWriter(id, text) }, speedForward)
            // If full string has been typed, switch to backspace mode.
        } else if (i === aString.length) {
            isBackspacing = true
            setTimeout(function(){ typeWriter(id, text) }, speedWait)
        }
    } else {
        // If either the header or the paragraph still has text, continue backspacing
        if (eHeader.text().length > 0) {
            // If paragraph still has text, continue erasing, otherwise switch to the header.
            eHeader.addClass("cursor")
            eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1))

            setTimeout(function() { typeWriter(id, text) }, speedBackspace)
        } else {
            isBackspacing = false
            i = 0
            a = (a + 1) % text.length //Moves to next position in array, always looping back to 0
            setTimeout(function(){ typeWriter(id, text) }, 50)
        }
    }
}