class FormObject {
  firstName;
  constructor() {
    this.firstName = document.getElementById("firstName").value;
  }
}
class RequestResponse {
  #formParameters;
  constructor(formParametersInput) {
    this.#formParameters = formParametersInput;
  }
  createRequest() {
    let url = "https://api.nationalize.io?name=";
    url = url + this.#formParameters.firstName;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.recieveResponse(data));
  }
  recieveResponse(response) {
    response = response.country[0].country_id;
    let screen = document.getElementById("screen");
    screen.innerText = response;
  }
}
let sendBtn = document
  .getElementById("sendBtn")
  .addEventListener("click", () => {
    let newForm = new FormObject();
    let newRequestResponse = new RequestResponse(newForm);
    newRequestResponse.createRequest();
  });
