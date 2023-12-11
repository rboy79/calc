const screen = document.querySelector(".screen");
const button = document.querySelectorAll(".calc-button");

function btnClick(e) {
  switch (e.target.innerText) {
    case "C":
      screen.innerText = "";
      break;

    case "←":
      screen.innerText = screen.innerText.slice(0, -1);
      break;

    case "=":
      screen.innerText = eval(screen.innerText);
      break;

    default:
      screen.innerText += e.target.innerText;
  }
}

button.forEach((button) => {
  button.addEventListener("click", btnClick);
});
