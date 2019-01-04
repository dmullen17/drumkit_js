/*function addClass(event) {
    console.log(event); 
    console.log(this);
}

const container = document.querySelector('.container');
document.addEventListener('keypress', addClass);*/

// transition keys and play sound on keyPress
/*function pressNote(event) {
    //console.log(event.keyCode);
    let key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    //console.log(key);
    key.classList.add('key-press');
}
document.addEventListener('keypress', pressNote)

// on transitionend remove class from key 
function removeClass(event) {
    //console.log(event); // the last one is propertyName = 'border-bottom-color'
    if (event.propertyName === 'border-bottom-color') {
        this.classList.remove('key-press');
    }
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass
));

// Add playSound 
function playSound(event) {
    //console.log(event.keyCode);
    let audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    // console.log(audio);
    if (!audio) return; // if the key we pressed isn't mapped then return 
    audio.currentTime = 0;
    audio.play();
}
document.addEventListener('keypress', playSound);*/


// Now put it all together

// 1. Combine playSound and pressNote functions into one
function playSound(event) {
    let key = document.querySelector(`.key[data-key='${event.keyCode}']`);
    let audio = document.querySelector(`audio[data-key='${event.keyCode}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key-press');
}
window.addEventListener('keypress', playSound);

function removeClass(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('key-press');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass));