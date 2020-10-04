class Inventor {
    constructor(id, question, description, font) {
      this.id = id
      this.question = question
      this.description = description
      this.font = font
    }
}

var infoElement = document.getElementById('information');
infoElement.style.display = "none";

function getInfoFromInventos() {
    const inventorOne = new Inventor(1, "Considerado por muitos o maior nome da literatura do Brasil:", "Machado de Assis (1839-1908) foi um escritor brasileiro, um dos nomes mais importantes da literatura do século XIX. Escreveu poesias, contos, e romances. Foi também jornalista, teatrólogo, crítico de teatro e crítico literário. Ele presidiu a Academia Brasileira de letras, da qual é membro fundador. Suas obras foram traduzidas para várias línguas.", "https://www.ebiografia.com/vida_obra_principais_escritores_romantismo_brasileiro/https://www.ebiografia.com/machado_assis/")

    var inventors = [inventorOne]
    var question = window.document.getElementById('question')
    var description = window.document.getElementById('description')
    question.innerText = inventors[0].question
    description.innerText = inventors[0].description
  }

  getInfoFromInventos()

function showInventorInfo() {
    var optionsElements = document.getElementById('options');
    var infoElement = document.getElementById('information');

    if (optionsElements.style.display === "none") {
        optionsElements.style.display = "";
        infoElement.style.display = "none";
    } else {
        optionsElements.style.display = "none";
        infoElement.style.display = "";
    }
  }