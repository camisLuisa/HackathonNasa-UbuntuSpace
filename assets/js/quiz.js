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
var count = 0
const inventorOne = new Inventor(1, "Considerado por muitos o maior nome da literatura do Brasil:", "Machado de Assis (1839-1908) foi um escritor brasileiro, um dos nomes mais importantes da literatura do século XIX. Escreveu poesias, contos, e romances. Foi também jornalista, teatrólogo, crítico de teatro e crítico literário. Ele presidiu a Academia Brasileira de letras, da qual é membro fundador. Suas obras foram traduzidas para várias línguas.", "https://www.ebiografia.com/vida_obra_principais_escritores_romantismo_brasileiro/https://www.ebiografia.com/machado_assis/")
const inventorTwo = new Inventor(2, "Cientista da NASA que recebeu a Medalha Presidencial da Liberdade, a maior condecoração civil dos Estados Unidos:", "Katherine Johnson (1918-2020), matemática da NASA, com uma capacidade extraordinária para cálculos, contribuiu para colocar em órbita a Apolo 11, a nave que levou o homem à Lua pela primeira vez.", "https://www.paramulheresnaciencia.com.br/noticias/quem-e-a-mulher-que-descobriu-o-primeiro-coronavirus-humano-conheca-a-cientista-june-almeida/")
const inventorThree = new Inventor(3, "Ganhador do Prêmio Nobel da Paz em 1964:", "Martin Luther King (1929-1968) foi um ativista norte-americano, lutou contra a discriminação racial e tornou-se um dos mais importantes líderes dos movimentos pelos direitos civis dos negros nos Estados Unidos.", "https://www.thewrap.com/james-drury-the-virginian-star-dies-at-85/")
const inventorFour = new Inventor(4, "De acordo com a revista Forbes, ela  foi eleita a mulher mais rica do ramo de entretenimento no mundo durante o século XX:", "Oprah Winfrey (1954-) é uma apresentadora, jornalista, atriz, psicóloga, empresária, repórter, produtora, editora e escritora norte-americana, vencedora de múltiplos prêmios Emmy por seu programa The Oprah Winfrey Show, o talk show com maior audiência da história da televisão norte-americana.", "https://pt.wikipedia.org/wiki/Oprah_Winfrey")
const inventorFive = new Inventor(5, "Presidente dos Estados Unidos de 2009 a 2017:", "Barack Obama II (1961 - ) é um advogado e político norte-americano que serviu como o 44.º presidente dos Estados Unidos de 2009 a 2017, sendo o primeiro afro-americano a ocupar o cargo. Nascido em Honolulu, no Havaí, Obama é graduado em ciência política pela Universidade Columbia e em direito pela Universidade de Harvard, onde foi presidente da Harvard Law Review.", "https://pt.wikipedia.org/wiki/Barack_Obama")
var inventors = [inventorOne, inventorTwo, inventorThree, inventorFour, inventorFive]

function getInfoFromInventos() {
    var question = window.document.getElementById('question')
    var description = window.document.getElementById('description')
    var imgOne = window.document.getElementById('imgOne')
    var imgTwo = window.document.getElementById('imgTwo')
    var rightImg = window.document.getElementById('rightImg')

    question.innerText = inventors[count].question
    description.innerText = inventors[count].description
    imgOne.src = "images/photos/"+inventors[count].id+".jpeg"
    imgOne.title = inventors[count].question
    imgTwo.src = "images/photos/"+inventors[count].id+"F.jpeg"
    imgTwo.title = inventors[count].question + "F"
    rightImg.src = "images/photos/"+inventors[count].id+".jpeg"
  }

  getInfoFromInventos()

function showInventorInfo(id) {
    var imgId = id
    var optionsElements = document.getElementById('options');
    var infoElement = document.getElementById('information');
    var result = document.getElementById('result');

    if(imgId == "imgTapOne" ) {
        const tapImg = document.getElementById("imgOne");
        if(tapImg.title == inventors[count].question) {
            result.innerText = "Parabéns!"
        } else {
            result.innerText = "Ops!"
        }
        
    } else {
        const tapImg = document.getElementById("imgTwo");
        if(tapImg.title == "images/photos/"+inventors[count].id+".jpeg") {
            result.innerText = "Parabéns!"
        } else {
            result.innerText = "Ops!"
        }
    }

    if (optionsElements.style.display === "none") {
        optionsElements.style.display = "";
        infoElement.style.display = "none";
    } else {
        optionsElements.style.display = "none";
        infoElement.style.display = "";
    }
}

function showNextQuestion() {
    var button = window.document.getElementById('next')

    if(count <= 2){
        count++
    } else if(count == 3) {
        count++
        button.innerText = "Começar Novamente"
       
    } else {
        count = 0
        button.innerText = "Próximo"
    }

    getInfoFromInventos()
    showInventorInfo()
}

function resetCount() {
    count = 0
    getInfoFromInventos()
}