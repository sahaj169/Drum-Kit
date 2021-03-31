for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(character) {
  if (character === "w") {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
  if (character === "a") {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  }
  if (character === "s") {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  }
  if (character === "d") {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  }
  if (character === "j") {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
  }
  if (character === "k") {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
  }
  if (character === "l") {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function buttonAnimation(currentKey) {
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
       activeButton.classList.remove("pressed");
   }, 100);
   

}


// function handleClick() {
// var buttonInnerHtml = this.innerHTML;
// switch (buttonInnerHtml) {
//   case "w":
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
//     break;
//   case "a":
//     var audio = new Audio("sounds/tom-2.mp3");
//     audio.play();
//   and add other cases alsooo
//   default:
//       console.log(buttonInnerHtml);
//     break;
// }  
