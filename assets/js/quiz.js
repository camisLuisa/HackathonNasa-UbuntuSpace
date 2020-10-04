class Inventor {
    constructor(id, name, description) {
      this.id = id
      this.name = name
      this.description = description
    }
}

var infoElement = document.getElementById('information');
infoElement.style.display = "none";

function createInventorArray() {
    const inventorOne = new Inventor(1, "Nome1", "Ele inventou várias coisas interessantes.")
    const inventorTwo = new Inventor(1, "Nome2", "Ele inventou várias coisas interessantes e mais.")
    const inventorThree = new Inventor(1, "Nome3", "Ele inventou várias coisas interessantes e muito mais.")
    
    var inventors = [inventorOne, inventorOne, inventorThree]
    var question = window.document.getElementById('question')
    question.innerText = "Pergunta 1 - " + inventors[0].description
  }

createInventorArray()

function showInventorInfo() {
    var optionsElements = document.getElementById('options');
    var infoElement = document.getElementById('information');

    if (optionsElements.style.display === "none") {
        optionsElements.style.display = "block";
        infoElement.style.display = "none";
    } else {
        optionsElements.style.display = "none";
        infoElement.style.display = "block";
    }
  }