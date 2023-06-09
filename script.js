
// detecting clicks
    $(".drum").click(function(){

        var key = this.textContent;
        makeSound(key);
        buttonAnimation(key);

    });


// detecting key press
    $(document).keypress(function(event){

        makeSound(event.key);
        buttonAnimation(event.key);

    });

// function make Sounds
function makeSound(key){
    switch(key){
        case "w" : 
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
            
        case "a" : 
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s" : 
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d" : 
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j" : 
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "k" : 
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "l" : 
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        default :
    }
}
// end of funtion makeSound

// function for button animation
function buttonAnimation(pressedKey){
    $("." + pressedKey).addClass("pressed");

    setTimeout(function(){
    $("." + pressedKey).removeClass("pressed");
    },100);
}