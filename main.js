const input = document.querySelector("input");
const form = document.querySelector("form");
const result = document.querySelector("#result");
form.onsubmit = (ev) => {
  ev.preventDefault();
  let text = input.value;
  text = format(text);
  if (text === "") {
    result.textContent = "Gib einen Namen ein.";
  } else if (text === "Paul") {
    result.textContent = "Falsch.";
  } else if (text === "Romuald") {
    result.textContent = "Richtig!";
  } else {
    result.textContent = `${text}? Kenne ich nicht.`;
  }
  input.value = "";
};

function format(text) {
  text = text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
  return text;
}
