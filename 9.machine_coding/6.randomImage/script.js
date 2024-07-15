const BASEURL = "https://picsum.photos/";

const content = document.querySelector(".content");
const rows = 4;
const cols = 3;

for (let i = 0; i < rows * cols; i++) {
  const image = document.createElement("img");
  image.src = `${BASEURL}/${Math.floor(Math.random() * 200)}`;
  content.append(image);
}
