import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

let pedido = [];
let total = 0;

window.addItem = function(nome, preco) {
  pedido.push({ nome, preco });
  total += preco;
  atualizarTotal();
};

function atualizarTotal() {
  document.getElementById("total").innerText =
    `Total: R$ ${total.toFixed(2).replace('.', ',')}`;
}

document.getElementById("enviar").addEventListener("click", () => {
  if (pedido.length === 0) {
    alert("Nenhum item no pedido");
    return;
  }

  alert("Pedido enviado com sucesso!");
  pedido = [];
  total = 0;
  atualizarTotal();
});
