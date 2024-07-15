// with each character typed in search box, make an API call to randomuserme api and display a card below it.
// Use debounce concept to reduce api calls.

// You will automatically learn about this and apply in this. ☕️

const userInput = document.querySelector("#user-input");

userInput.addEventListener("input", debounce(fetchRandomUser, 300));

function fetchRandomUser() {
  const userInputValue = userInput.value;
  if (userInputValue.length > 0) {
    console.log("called");
    fetch(`https://randomuser.me/api/?result=1`)
      .then((response) => response.json())
      .then((data) => displayUser(data.results[0]))
      .catch((error) => console.error("Fetch error", error));
  }
}

function displayUser(user) {
  const picture = user.picture.large;
  const name = user.name.first + " " + user.name.last;
  const email = user.email;
  const userCard = document.querySelector("#user-card");
  userCard.style.display = "block";
  userCard.innerHTML = `
    <img src="${picture}" />
    <p>${name}</p>
    <p>${email}</p>
    `;
}

function debounce(func, delay) {
  let debounceTimer;
  // returns a function, not executed version
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}
