// Add an event listener for a keypress action
// Get the event and use the 'keyCode' to find the 'data-' attribute with the equivalent value.  
// We have to use the [0] index because querySelectorAll returns an array-like NodeList object 
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