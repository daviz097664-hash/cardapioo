let pedido = {};

window.addItem = function(nome, preco) {
  if (!pedido[nome]) {
    pedido[nome] = { preco: preco, qtd: 1 };
  } else {
    pedido[nome].qtd++;
  }
  atualizarTotal();
};

window.removerItem = function(nome) {
  if (!pedido[nome]) return;

  pedido[nome].qtd--;

  if (pedido[nome].qtd <= 0) {
    delete pedido[nome];
  }
  atualizarTotal();
};

function atualizarTotal() {
  let total = 0;

  for (let item in pedido) {
    total += pedido[item].preco * pedido[item].qtd;
  }

  document.getElementById("total").innerText =
    `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

document.getElementById("enviar").addEventListener("click", () => {
  if (Object.keys(pedido).length === 0) {
    alert("Nenhum item no pedido");
    return;
  }

  alert("Pedido enviado com sucesso!");
  pedido = {};
  atualizarTotal();
});
