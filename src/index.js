
function displayPoem(response){

  new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generatePoem(event){
event.preventDefault();    
let userInput = document.querySelector("#user-input")    
let apiKey = "9tc2ca054b9644af4a7a4ffo0b15b933";
let context = "Generate a simple love and romance poem, in 4 line break format, follow the user instruction below and DO NOT INCLUDE THE user input theme IN THE SENTENCE "
let prompt = `User instruction: Generate poem about a ${userInput.value} theme `;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

axios.get(apiUrl).then(displayPoem);
}


let formElement = document.querySelector("#form");
formElement.addEventListener("submit", generatePoem);