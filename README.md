/* Conteúdo dinâmico - Agrinho 2026
   Carrega os arquivos JSON da pasta bd/ e preenche os cards do site.*/
(function () {
    'use strict';

    const caminhos = {
        agricultura: ['bd/agricultura.json', './agricultura.json'],
        praticas: ['bd/praticas.json', './praticas.json'],
        irrigacao: ['bd/irrigacao.json', './irrigacao.json']
    };

    const iconesIrrigacao = {
        gotejamento: 'fa-faucet-drip',
        microaspersao: 'fa-shower',
        aspersao: 'fa-water',
        inundacao: 'fa-droplet'
    };

    const classesIrrigacao = {
        gotejamento: 'icon-blue',
        microaspersao: 'icon-cyan',
        aspersao: 'icon-amber',
        inundacao: 'icon-rose'
    };

    const classesProgresso = {
        95: ['progress-green', 'progress-width-95', 'highlight-green'],
        85: ['progress-cyan', 'progress-width-85', 'highlight-cyan'],
        75: ['progress-amber', 'progress-width-75', 'highlight-amber'],
        50: ['progress-rose', 'progress-width-50', 'highlight-rose']
    };

    function seletor(id) {
        return document.getElementById(id);
    }

    function escapar(texto) {
        return String(texto ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    async function carregarJson(listaDeCaminhos) {
        let ultimoErro = null;

        for (const caminho of listaDeCaminhos) {
            try {
                const resposta = await fetch(caminho, { cache: 'no-store' });
                if (!resposta.ok) {
                    throw new Error('Arquivo não encontrado: ' + caminho);
                }
                return await resposta.json();
            } catch (erro) {
                ultimoErro = erro;
            }
        }

        throw ultimoErro || new Error('Não foi possível carregar o JSON.');
    }

    function mostrarErro(elemento, nomeArquivo) {
        if (!elemento) return;
        elemento.innerHTML = `
            <article class="info-card error-card">
                <div class="icon-box icon-rose"><i class="fa-solid fa-triangle-exclamation"></i></div>
                <h3>Não foi possível carregar ${escapar(nomeArquivo)}</h3>
                <p>Confira se o arquivo está na pasta <strong>bd</strong> e se o nome está escrito exatamente como no código.</p>
            </article>
        `;
    }

    function montarAgricultura(dados) {
        const conceito = dados?.conceito_e_modelos?.definicao_base;
        const pilares = dados?.pilares || {};
        const tipos = dados?.conceito_e_modelos?.tipos_de_agricultura || {};
        const sistemas = dados?.conceito_e_modelos?.sistemas_agricolas || {};
        const alerta = dados?.conceito_e_modelos?.alerta_ambiental;

        const conceitoContainer = seletor('agro-conceito-container');
        if (conceitoContainer && conceito) {
            conceitoContainer.innerHTML = `
                <article class="content-box concept-box">
                    <span class="tag-label soft-label">Conceito principal</span>
                    <h3>${escapar(conceito.titulo)}</h3>
                    <p class="intro-text">${escapar(conceito.conceito)}</p>
                    <p>${escapar(conceito.importancia_nacional)}</p>
                </article>
            `;
        }

        const cards = seletor('agricultura-cards');
        if (cards) {
            const icones = ['fa-bowl-food', 'fa-briefcase', 'fa-earth-americas'];
            cards.innerHTML = Object.values(pilares).map((pilar, indice) => `
                <article class="info-card">
                    <div>
                        <div class="icon-box icon-green"><i class="fa-solid ${icones[indice] || 'fa-seedling'}"></i></div>
                        <h3>${escapar(pilar.titulo)}</h3>
                        <p>${escapar(pilar.importancia)}</p>
                    </div>
                    <div class="card-meta card-meta-column">
                        <span><strong>Impacto:</strong> ${escapar(pilar.impacto_positivo)}</span>
                        <span><strong>Futuro:</strong> ${escapar(pilar.potencial_futuro)}</span>
                    </div>
                </article>
            `).join('');
        }

        const tiposContainer = seletor('agro-tipos-container');
        if (tiposContainer) {
            tiposContainer.innerHTML = `
                <span class="tag-label soft-label">Modelos produtivos</span>
                <h3>Tipos de Agricultura</h3>
                <div class="data-list">
                    ${Object.entries(tipos).map(([chave, valor]) => `
                        <div class="data-item">
                            <h4>${escapar(formatarTitulo(chave))}</h4>
                            <p>${escapar(valor)}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        const sistemasContainer = seletor('agro-sistemas-container');
        if (sistemasContainer) {
            sistemasContainer.innerHTML = `
                <div>
                    <span class="tag-label soft-label">Sistemas agrícolas</span>
                    <h3>Extensivo e Intensivo</h3>
                    <div class="data-list">
                        ${Object.entries(sistemas).map(([chave, valor]) => `
                            <div class="data-item">
                                <h4>${escapar(formatarTitulo(chave))}</h4>
                                <p>${escapar(valor)}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ${alerta ? `
                    <div class="warning-box">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <span><strong>${escapar(alerta.titulo)}:</strong> ${escapar(alerta.descricao)}</span>
                    </div>
                ` : ''}
            `;
        }
    }

    function montarPraticas(dados) {
        const culturas = Object.entries(dados || {});
        const seletorPlantio = seletor('plantio-selector');
        const detalhes = seletor('plantio-details');

        if (!seletorPlantio || !detalhes || culturas.length === 0) return;

        seletorPlantio.innerHTML = culturas.map(([chave, cultura], indice) => `
            <button class="planting-option ${indice === 0 ? 'active' : ''}" data-cultura="${escapar(chave)}" type="button">
                <i class="fa-solid ${escapar(cultura.icon || 'fa-seedling')}"></i>
                <span>${escapar(cultura.titulo)}</span>
            </button>
        `).join('');

        function exibirCultura(chave) {
            const cultura = dados[chave];
            if (!cultura) return;

            detalhes.innerHTML = `
                <article class="planting-card">
                    <div class="planting-heading">
                        <div class="icon-box icon-green"><i class="fa-solid ${escapar(cultura.icon || 'fa-seedling')}"></i></div>
                        <div>
                            <span class="tag-label soft-label">${escapar(cultura.sub || 'Guia de cultivo')}</span>
                            <h3>${escapar(cultura.titulo)}</h3>
                        </div>
                    </div>

                    <div class="data-list data-list-spaced">
                        <div class="data-item">
                            <h4>Preparo do solo</h4>
                            <p>${escapar(cultura.preparo)}</p>
                        </div>
                        <div class="data-item">
                            <h4>Espaçamento recomendado</h4>
                            <p>${escapar(cultura.espacamento)}</p>
                        </div>
                        <div class="warning-box">
                            <i class="fa-solid fa-lightbulb"></i>
                            <span><strong>Dica prática:</strong> ${escapar(cultura.dica)}</span>
                        </div>
                    </div>
                </article>
            `;
        }

        seletorPlantio.addEventListener('click', function (evento) {
            const botao = evento.target.closest('[data-cultura]');
            if (!botao) return;

            seletorPlantio.querySelectorAll('.planting-option').forEach(item => item.classList.remove('active'));
            botao.classList.add('active');
            exibirCultura(botao.dataset.cultura);
        });

        exibirCultura(culturas[0][0]);
    }

    function montarIrrigacao(dados) {
        const sistemas = Object.entries(dados?.sistemas || {});
        if (sistemas.length === 0) return;

        const cards = document.querySelector('.irrigation-cards');
        if (cards) {
            cards.innerHTML = sistemas.slice(0, 4).map(([chave, sistema]) => {
                const eficiencia = Number(sistema.eficiencia || 0);
                const classes = classesProgresso[eficiencia] || ['progress-green', 'progress-width-50', 'highlight-green'];
                return `
                    <article class="info-card">
                        <div>
                            <div class="icon-box ${classesIrrigacao[chave] || 'icon-green'}">
                                <i class="fa-solid ${iconesIrrigacao[chave] || 'fa-droplet'}"></i>
                            </div>
                            <h3>${escapar(sistema.nome)}</h3>
                            <p>${escapar(sistema.descricao)}</p>
                        </div>
                        <div class="card-meta">
                            <span>Aproveitamento: <strong class="${classes[2]}">${escapar(sistema.aproveitamento)}</strong></span>
                            <span>Eficiência: <strong>${eficiencia}%</strong></span>
                        </div>
                    </article>
                `;
            }).join('');
        }

        const lista = document.querySelector('.progress-list');
        if (lista) {
            lista.innerHTML = sistemas.map(([, sistema]) => {
                const eficiencia = Number(sistema.eficiencia || 0);
                const classes = classesProgresso[eficiencia] || ['progress-green', 'progress-width-50', 'highlight-green'];
                return `
                    <div class="progress-item">
                        <div class="progress-label">
                            <span>${escapar(sistema.nome)}</span>
                            <span class="${classes[2]}">${eficiencia}%</span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill ${classes[0]} ${classes[1]}"></div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    function formatarTitulo(texto) {
        return String(texto || '')
            .replace(/_/g, ' ')
            .replace(/\b\w/g, letra => letra.toUpperCase());
    }

    async function iniciar() {
        const conceitoContainer = seletor('agro-conceito-container');
        const plantioDetalhes = seletor('plantio-details');
        const irrigacaoCards = document.querySelector('.irrigation-cards');

        try {
            const agricultura = await carregarJson(caminhos.agricultura);
            montarAgricultura(agricultura);
        } catch (erro) {
            console.error('Erro ao carregar agricultura.json:', erro);
            mostrarErro(conceitoContainer, 'agricultura.json');
        }

        try {
            const praticas = await carregarJson(caminhos.praticas);
            montarPraticas(praticas);
        } catch (erro) {
            console.error('Erro ao carregar praticas.json:', erro);
            mostrarErro(plantioDetalhes, 'praticas.json');
        }

        try {
            const irrigacao = await carregarJson(caminhos.irrigacao);
            montarIrrigacao(irrigacao);
        } catch (erro) {
            console.error('Erro ao carregar irrigacao.json:', erro);
            mostrarErro(irrigacaoCards, 'irrigacao.json');
        }
    }

    document.addEventListener('DOMContentLoaded', iniciar);
}());
