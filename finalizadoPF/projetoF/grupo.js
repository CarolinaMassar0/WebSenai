let contador = 0;


function aumentar() {
  contador += 250;
  document.getElementById('contador').textContent = "R$" + contador;
}

function diminuir() {
  if (contador > 0) {
    contador -= 250;
    document.getElementById('contador').textContent = "R$" + contador;
  }
}
let contador2 = 0;

function aumentar2() {
  contador += 250;
  document.getElementById('contador2').textContent = "R$" + contador;
}

function diminuir2() {
  if (contador > 0) {
    contador -= 250;
    document.getElementById('contador2').textContent = "R$" + contador;
  }
}
const rangeInput = document.getElementById('rangeInput');
const displayText = document.getElementById('displayText');

rangeInput.addEventListener('input', function () {
  const value = this.value;
  displayText.textContent = `Mes: ${value}`;
});

