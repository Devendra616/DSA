const url = "https://api.chucknorris.io/jokes/random";

// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition
const btn = document.querySelector("#getJoke");
const displayJoke = document.querySelector("#display-joke");
let latestRequest = 0;
getJoke = () => {
  const currentRequest = ++latestRequest;
  const joke = fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (currentRequest === latestRequest) {
        // * Handling Race Condition
        // Code will run only when response of latestRequest is received
        displayJoke.innerHTML = data.value;
      }
    });
};

btn.addEventListener("click", getJoke);
