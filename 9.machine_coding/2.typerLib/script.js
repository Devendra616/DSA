let typedText = document.querySelector(".typed-text");
let cursor = document.querySelector(".cursor");

const text = ["Awesome!", "Wonderful!"];
let index = 0;
let charIndex = 0;
const typeDelay = 200;
const eraseDelay = 200;
const newLetterDelay = 1000;

document.addEventListener("DOMContentLoaded", function () {
  if (text.length > 0) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < text[index].length) {
    typedText.innerHTML += text[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.innerHTML = text[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, eraseDelay);
  } else {
    index++;
    if (index >= text.length) {
      index = 0;
    }
    setTimeout(type, typeDelay + 1500);
  }
}
