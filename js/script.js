// ===============================
// CONTROLE DE FONTE
// ===============================

let tamanhoFonte = 100;

const btnAumentar = document.getElementById("aumentarFonte");
const btnDiminuir = document.getElementById("diminuirFonte");
const btnReset = document.getElementById("resetFonte");

btnAumentar.addEventListener("click", () => {

```
if (tamanhoFonte < 150) {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
}
```

});

btnDiminuir.addEventListener("click", () => {

```
if (tamanhoFonte > 70) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
}
```

});

btnReset.addEventListener("click", () => {

```
tamanhoFonte = 100;
document.body.style.fontSize = "100%";
```

});

// ===============================
// LEITOR DE TELA
// ===============================

const btnLerPagina = document.getElementById("lerPagina");
const btnPararLeitura = document.getElementById("pararLeitura");

btnLerPagina.addEventListener("click", () => {

```
speechSynthesis.cancel();

const textoPagina = document.body.innerText;

const leitura = new SpeechSynthesisUtterance(textoPagina);

leitura.lang = "pt-BR";
leitura.rate = 1;
leitura.pitch = 1;
leitura.volume = 1;

speechSynthesis.speak(leitura);
```

});

btnPararLeitura.addEventListener("click", () => {

```
speechSynthesis.cancel();
```

});

// ===============================
// BOTÃO COMEÇAR
// ===============================

const btnComecar = document.getElementById("btnComecar");

if (btnComecar) {

```
btnComecar.addEventListener("click", () => {

    document
        .getElementById("pesquisa")
        .scrollIntoView({
            behavior: "smooth"
        });

});
```

}

// ===============================
// PESQUISA
// ===============================

const btnPesquisar = document.getElementById("btnPesquisar");

if (btnPesquisar) {

```
btnPesquisar.addEventListener("click", () => {

    const pesquisa =
        document
        .getElementById("campoPesquisa")
        .value
        .trim();

    if (pesquisa === "") {

        alert("Digite um assunto para pesquisar.");
        return;

    }

    alert(
        "Você pesquisou: " +
        pesquisa +
        "\\n\\nA função de pesquisa será integrada às páginas de conteúdo."
    );

});
```

}
