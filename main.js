const itens = {
  xburger: { nome: "X-Burger", preco: 25, qtd: 0 },
  xsalada: { nome: "X-Salada", preco: 28, qtd: 0 },
  refrigerante: { nome: "Refrigerante", preco: 8, qtd: 0 },
  agua: { nome: "Água", preco: 10, qtd: 0 },
  aguagas: { nome: "Água com gás", preco: 12, qtd: 0 }
};

// Funções chamadas pelos botões + e −
function addItem(id) {
  alterarQtd(id, 1);
}

function removerItem(id) {
  alterarQtd(id, -1);
}

function alterarQtd(id, valor) {
  itens[id].qtd += valor;
  if (itens[id].qtd < 0) itens[id].qtd = 0;

  // Atualiza a quantidade na tela
  document.getElementById(`qtd-${id}`).innerText = itens[id].qtd;

  atualizarTotal();

  // Animação do card
  const card = document.getElementById(`qtd-${id}`).closest(".item");
  card.classList.add("animar");
  setTimeout(() => card.classList.remove("animar"), 150);
}

function atualizarTotal() {
  let total = 0;
  for (let item in itens) {
    total += itens[item].
