const input = document.querySelector("#input-field");
const output = document.querySelector("#output-field");
const btns = document.querySelectorAll(".btns-container >.btn");

input.addEventListener("keyup", function () {
  output.innerHTML = input.value;
});

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("uppercase")) {
      console.log("upper");
      output.innerHTML = output.innerHTML.toUpperCase();
    } else if (btn.classList.contains("lowercase")) {
      output.innerHTML = output.innerHTML.toLowerCase();
    } else if (btn.classList.contains("capitalize")) {
      output.innerHTML =
        output.innerHTML.charAt(0).toUpperCase() +
        output.innerHTML.slice(1).toLowerCase();
    } else if (btn.classList.contains("bold")) {
      output.style.fontWeight =
        output.style.fontWeight === "bold" ? "normal" : "bold";
    } else if (btn.classList.contains("italic")) {
      output.style.fontStyle =
        output.style.fontStyle === "italic" ? "normal" : "italic";
    } else if (btn.classList.contains("underline")) {
      output.style.textDecoration =
        output.style.textDecoration === "underline" ? "none" : "underline";
    }
  });
});
