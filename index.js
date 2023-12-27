var totalButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < totalButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button_value = this.innerHTML;
    playmusic(button_value);
    addAnimation(button_value);
  });
}

document.addEventListener("keypress", function (e) {
  playmusic(e.key);
  addAnimation(e.key);
});
function playmusic(button_value) {
  switch (button_value) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function addAnimation(button) {
  var currentButton = document.querySelector("." + button);
  currentButton.classList.add("pressed");

  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 100);
}
