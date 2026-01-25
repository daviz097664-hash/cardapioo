document.getElementById("enviar").addEventListener("click", () => {
  const marcados = document.querySelectorAll("input[type=checkbox]:checked");
  let pedido = [];

  marcados.forEach(item => {
    pedido.push(item.value);
  });

  if (pedido.length === 0) {
    alert("Selecione algum item");
    return;
  }

  alert("Pedido enviado:\n" + pedido.join(", "));
});
