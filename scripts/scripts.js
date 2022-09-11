const labels = document.querySelectorAll('.label-radio')
const input = document.getElementById('input-radio')
const correctButton = document.getElementById('correct-button')
const answerNumber = document.getElementById('answer-number')

let respuestas = [];
let respuestaFinal = 0;
let respuesta2 = [];

for (const label of labels) {
    label.addEventListener('click', () => {
    label.childNodes[1].checked = true
    })
  }

correctButton.addEventListener('click', () => {
    for (const label of labels) {
    if(label.childNodes[1].checked == true){
      respuestas.push(label)
    }
  }

  for(const respuesta of respuestas) {
    respuesta2.push(respuesta.textContent.trim().replace(/(\n)/gm,""))
  }

  for(const conclucion of respuesta2) {
    if(conclucion == 'Roma'){
      respuestaFinal++
    } else if(conclucion == 'Oslo'){
      respuestaFinal++
    } else if(conclucion == 'Lima'){
      respuestaFinal++
    } else if(conclucion == 'Estocolmo'){
      respuestaFinal++
    } else if(conclucion == 'Ottawa'){
      respuestaFinal++
    }
  }

  answerNumber.textContent = respuestaFinal
  respuestas = []
  respuesta2 = []
  respuestaFinal = 0;
  for (const label of labels) {
    label.childNodes[1].checked = false
  }
})
