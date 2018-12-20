// Add an event listener for a keypress action
// Get the event and use the 'keyCode' to find the 'data-' attribute with the equivalent value.  
// We have to use the [0] index because querySelectorAll returns an array-like NodeList object 

/*
//----------------------------------------------------------------------
// My Solution
//----------------------------------------------------------------------
window.addEventListener('keypress', function(event){
    console.log(event.keyCode);
    document.querySelectorAll(`[data-key='${event.keyCode}']`)[0].classList.add('key-press');
    setTimeout(function() {
        document.querySelectorAll(`[data-key='${event.keyCode}']`)[0].classList.remove('key-press')},
               100);
})

document.addEventListener('keypress', function(event){
    var id = event.keyCode;
    document.getElementById('audio-' + id).play();
})
*/

//----------------------------------------------------------------------
// Wes Bos Solution: 
//----------------------------------------------------------------------
function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; //stops the function
    audio.currentTime = 0; // rewinds to start if we want to play it before the previous one ends
    audio.play();
    key.classList.add('key-press');
}

function removeTransition(e) {
    console.log(e); 
    // this shows a ton of events - one for each property
    if (e.propertyName !== 'transform') return; // skip the event 
    console.log(this); // see what this is 
    // this is always equal to what got called against it - in this case "addEventListener" was called against key --> so this = key.
    this.classList.remove('key-press');
};

const keys = document.querySelectorAll('.key');
// loop over the NodeList to add event listeners
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);