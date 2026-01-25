const itens = {
  xburger: { nome: "X-Burger", preco: 15, qtd: 0 },
  xsalada: { nome: "X-Salada", preco: 18, qtd: 0 },
  agua: { nome: "Água", preco: 10, qtd: 0 },
  aguagas: { nome: "Água com gás", preco: 12, qtd: 0 }
};

function alterarQtd(id, valor) {
  itens[id].qtd += valor;
  if (itens[id].qtd < 0) itens[id].qtd = 0;

  document.getElementById(`qtd-${id}`).innerText = itens[id].qtd;
  atualizarTotal();
}

function atualizarTotal() {
  let total = 0;
  for (let item in itens) {
    total += itens[item].qtd * itens[item].preco;
  }
  document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

function enviarPedido() {
  let pedido = [];
  for (let item in itens) {
    if (itens[item].qtd > 0) {
      pedido.push(`${itens[item].qtd}x ${itens[item].nome}`);
    }
  }

  if (pedido.length === 0) {
    alert("Nenhum item selecionado");
    return;
  }

  alert("Pedido enviado:\n" + pedido.join("\n"));

  // resetar
  for (let item in itens) {
    itens[item].qtd = 0;
    document.getElementById(`qtd-${item}`).innerText = 0;
  }
  atualizarTotal();
}
