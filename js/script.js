document.addEventListener("DOMContentLoaded", () => {

```
// ===============================
// CONTROLE DE FONTE
// ===============================

let tamanhoFonte = 100;

const btnAumentar = document.getElementById("aumentarFonte");
const btnDiminuir = document.getElementById("diminuirFonte");
const btnReset = document.getElementById("resetFonte");

if (btnAumentar) {
    btnAumentar.addEventListener("click", () => {
        if (tamanhoFonte < 150) {
            tamanhoFonte += 10;
            document.body.style.fontSize = tamanhoFonte + "%";
        }
    });
}

if (btnDiminuir) {
    btnDiminuir.addEventListener("click", () => {
        if (tamanhoFonte > 70) {
            tamanhoFonte -= 10;
            document.body.style.fontSize = tamanhoFonte + "%";
        }
    });
}

if (btnReset) {
    btnReset.addEventListener("click", () => {
        tamanhoFonte = 100;
        document.body.style.fontSize = "100%";
    });
}

// ===============================
// LEITOR DE TELA
// ===============================

const btnLerPagina = document.getElementById("lerPagina");
const btnPararLeitura = document.getElementById("pararLeitura");

if (btnLerPagina) {
    btnLerPagina.addEventListener("click", () => {

        speechSynthesis.cancel();

        const textoPagina = document.body.innerText;

        const leitura = new SpeechSynthesisUtterance(textoPagina);

        leitura.lang = "pt-BR";
        leitura.rate = 1;
        leitura.pitch = 1;
        leitura.volume = 1;

        speechSynthesis.speak(leitura);
    });
}

if (btnPararLeitura) {
    btnPararLeitura.addEventListener("click", () => {
        speechSynthesis.cancel();
    });
}

// ===============================
// BOTÃO COMEÇAR AGORA
// ===============================

const btnComecar = document.getElementById("btnComecar");

if (btnComecar) {

    btnComecar.addEventListener("click", () => {

        const secaoPesquisa = document.getElementById("pesquisa");

        if (secaoPesquisa) {

            secaoPesquisa.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}

// ===============================
// PESQUISA
// ===============================

const btnPesquisar = document.getElementById("btnPesquisar");
const campoPesquisa = document.getElementById("campoPesquisa");

if (btnPesquisar && campoPesquisa) {

    btnPesquisar.addEventListener("click", pesquisar);

    campoPesquisa.addEventListener("keypress", (event) => {

        if (event.key === "Enter") {
            pesquisar();
        }

    });

}

function pesquisar() {

    const pesquisa = campoPesquisa.value.trim();

    if (pesquisa === "") {

        alert("Digite um assunto para pesquisar.");

        return;

    }

    alert(
        "Você pesquisou: " +
        pesquisa +
        "\n\nA função de busca completa será integrada nas próximas versões do AgroStart."
    );

}

// ===============================
// CLIQUE NOS CARDS
// ===============================

const cards = document.querySelectorAll(".guide-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const titulo = card.querySelector("h3").innerText;

        alert(
            "Você selecionou:\n\n" +
            titulo +
            "\n\nEsta página será implementada em breve."
        );

    });

});

// ===============================
// MENSAGEM DE INICIALIZAÇÃO
// ===============================

console.log("AgroStart carregado com sucesso!");
```

});
