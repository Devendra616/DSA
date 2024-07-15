window.addEventListener("scroll", updateProgressbar);

function updateProgressbar() {
  const Indicator = document.querySelector(".progress-container .progress-bar");

  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let scrollPercent = Math.round((scrollTop / scrollHeight) * 100);

  Indicator.style.width = scrollPercent + "%";
}
