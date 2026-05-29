document.addEventListener("DOMContentLoaded", () => {

```
// ==================================
// CARREGAR JSONS
// ==================================

carregarConteudos();

async function carregarConteudos() {

    try {

        const arquivos = [
            "bd/praticas.json",
            "bd/irrigacao.json"
        ];

        const container = document.getElementById("conteudo");

        if (!container) return;

        container.innerHTML = "<p>Carregando conteúdos...</p>";

        let html = "";

        for (const arquivo of arquivos) {

            const resposta = await fetch(arquivo);

            if (!resposta.ok) {
                throw new Error(`Erro ao carregar ${arquivo}`);
            }

            const dados = await resposta.json();

            html += criarCardConteudo(dados);

        }

        container.innerHTML = html;

    } catch (erro) {

        console.error(erro);

        const container = document.getElementById("conteudo");

        if (container) {

            container.innerHTML = `
                <p>
                    Não foi possível carregar os conteúdos.
                </p>
            `;

        }

    }

}

// ==================================
// GERAR HTML
// ==================================

function criarCardConteudo(dados) {

    return `
        <article class="guide-card">

            <h3>${dados.titulo}</h3>

            <p>
                ${dados.descricao}
            </p>

            <button
                class="btn-detalhes"
                onclick='mostrarDetalhes(${JSON.stringify(dados)})'
            >
                Ler mais
            </button>

        </article>
    `;
}

// ==================================
// ACESSIBILIDADE
// ==================================

let tamanhoFonte = 100;

document.getElementById("aumentarFonte")
    ?.addEventListener("click", () => {

        if (tamanhoFonte < 150) {
            tamanhoFonte += 10;
            document.body.style.fontSize =
                tamanhoFonte + "%";
        }

    });

document.getElementById("diminuirFonte")
    ?.addEventListener("click", () => {

        if (tamanhoFonte > 70) {
            tamanhoFonte -= 10;
            document.body.style.fontSize =
                tamanhoFonte + "%";
        }

    });

document.getElementById("resetFonte")
    ?.addEventListener("click", () => {

        tamanhoFonte = 100;
        document.body.style.fontSize = "100%";

    });

// ==================================
// LEITOR DE TELA
// ==================================

document.getElementById("lerPagina")
    ?.addEventListener("click", () => {

        speechSynthesis.cancel();

        const texto =
            document.body.innerText;

        const leitura =
            new SpeechSynthesisUtterance(texto);

        leitura.lang = "pt-BR";

        speechSynthesis.speak(leitura);

    });

document.getElementById("pararLeitura")
    ?.addEventListener("click", () => {

        speechSynthesis.cancel();

    });
```

});

// ==================================
// JANELA DE DETALHES
// ==================================

function mostrarDetalhes(dados) {

```
alert(
    dados.titulo +
    "\n\n" +
    dados.descricao
);
```

}
