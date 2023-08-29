let totalComprovantesDigitados = 0;
let soma = 0;
let comprovantes = []; // Array para armazenar os comprovantes

// Adicionar evento de 'keydown' ao campo de input
let comprovanteInput = document.getElementById("valorInput");
comprovanteInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    adicionarComprovante();
    event.preventDefault(); // Evitar o comportamento padrão de enviar o formulário
  }
});

function adicionarComprovante() {
  let comprovanteInput = document.getElementById("valorInput");
  let comprovante = Number(comprovanteInput.value); // Ler o valor do input e converter para número

  if (!isNaN(comprovante)) { // Para não aceitar letras ou símbolos. Redundante, talvez??
    comprovantes.unshift(comprovante); // Adicionar o comprovante à array
    comprovanteInput.value = ""; // Limpar o input

    soma += comprovante; // Fazer a soma
    totalComprovantesDigitados++; // Incrementar a quantidade total de comprovantes digitados

    if (comprovante === 0) {
      alert('Você digitou um comprovante no valor de R$ 0,00. \nA calculadora não vai adicioná-lo ao total de comprovantes digitados, OK?');
      totalComprovantesDigitados--;
    }

    atualizarLista(); // Atualizar a lista de comprovantes na página
    atualizarDados(); // Atualizar as informações de soma e quantidade
  }
}

function atualizarLista() {
  let listaDeComprovantes = document.getElementById("listaDeComprovantes");
  
  listaDeComprovantes.innerHTML = ""; // Limpar a lista atual

  for (let i = 0; i < comprovantes.length; i++) {
    let comprovanteItem = document.createElement("li");
    comprovanteItem.textContent = `R$ ${comprovantes[i].toFixed(2)}`;
    listaDeComprovantes.appendChild(comprovanteItem); // Adicionar o comprovante à lista na página
  }
}

function atualizarDados() {
  let somatorio = document.getElementById("soma");
  let totalComprovantes = document.getElementById("total");

  somatorio.textContent = "Soma: R$ " + soma.toFixed(2);
  totalComprovantes.textContent = "Total de comprovantes: " + totalComprovantesDigitados;
}