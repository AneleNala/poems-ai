function generatePoem(event){
  event.preventDefault();

  new Typewriter("#poem", {
  strings: "Uthando lubopha Ingqondo kanye nomoya wami ngabhande linye.",
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);