import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0dHn3SXaO1Vc5cnovA7rddJN0WNrpi4k",
  authDomain: "cardapio-restaurante-df665.firebaseapp.com",
  databaseURL: "https://cardapio-restaurante-df665-default-rtdb.firebaseio.com/",
  projectId: "cardapio-restaurante-df665",
  storageBucket: "cardapio-restaurante-df665.firebasestorage.app",
  messagingSenderId: "205272470692",
  appId: "1:205272470692:web:1cfc7c7d084887a3fe4231"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let carrinho = {};
let totalGeral = 0;

window.addItem = function(nome, preco) {
    if (!carrinho[nome]) carrinho[nome] = { qtd: 0, preco: preco };
    carrinho[nome].qtd++;
    atualizarTudo();
}

window.removerItem = function(nome, preco) {
    if (carrinho[nome] && carrinho[nome].qtd > 0) {
        carrinho[nome].qtd--;
        if (carrinho[nome].qtd === 0) delete carrinho[nome];
    }
    atualizarTudo();
}

function atualizarTudo() {
    totalGeral = 0;
    document.querySelectorAll('.quantidade').forEach(span => span.innerText = "0");
    for (let item in carrinho) {
        const span = document.getElementById(`qtd-${item}`);
        if (span) span.innerText = carrinho[item].qtd;
        totalGeral += carrinho[item].qtd * carrinho[item].preco;
    }
    document.getElementById('total').innerText = `Total: R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
}

window.finalizarPedido = function() {
    const nome = document.getElementById('nome-cliente').value;
    if (!nome || nome.trim() === "") { alert("⚠️ Digite o nome do cliente!"); return; }
    if (totalGeral === 0) { alert("🛒 Adicione itens ao pedido!"); return; }

    const itensTexto = Object.keys(carrinho).map(n => `${carrinho[n].qtd}x ${n}`).join(", ");

    push(ref(db, 'pedidos'), {
        cliente: nome,
        itens: itensTexto,
        total: totalGeral.toFixed(2).replace('.', ','),
        data: serverTimestamp()
    }).then(() => {
        alert("✅ Enviado para a cozinha!");
        carrinho = {};
        document.getElementById('nome-cliente').value = "";
        atualizarTudo();
    });
}
