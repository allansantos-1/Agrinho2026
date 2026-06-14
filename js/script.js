tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                agro: {
                    light: '#22c55e',
                    DEFAULT: '#114232',
                    dark: '#0a241b',
                    accent: '#87A922'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                title: ['Plus Jakarta Sans', 'sans-serif']
            }
        }
    }
};

// Objeto que simula a leitura completa de 'bd/agricultura.json' (Conceito + Brasil Escola)
const agriculturaData = {
    definicao_base: {
        titulo: "O que é a Agricultura?",
        conceito: "É uma atividade humana e económica integrada no setor primário, focada no cultivo da terra para a produção de alimentos e o fornecimento de matérias-primas essenciais para o setor industrial.",
        importancia_nacional: "No Brasil, atua como um dos principais motores económicos, destacando-se na exportação global de commodities fundamentais como a soja, o milho, o café, a cana-de-açúcar e o algodão."
    },
    pilares: {
        seguranca_alimentar: {
            titulo: "Alimentação e Subsistência Global",
            icon: "fa-plate-wheat",
            importancia: "A agricultura produz mais de 80% de todos os alimentos consumidos no planeta, garantindo a nutrição diária de bilhões de pessoas.",
            impacto_positivo: "Alimenta a população global, gera milhões de empregos diretos no campo e impulsiona complexas cadeias logísticas corporativas.",
            potencial_futuro: "O desafio é aumentar a produtividade vertical através da tecnologia para erradicar a fome mundial sem desmatar novas áreas."
        },
        desenvolvimento_economico: {
            titulo: "Motor da Economia e Emprego",
            icon: "fa-chart-line",
            importancia: "Representa a maior fatia do PIB para muitas nações em desenvolvimento e é o principal gerador de divisas por meio da exportação.",
            impacto_positivo: "Fixa o homem no campo com dignidade e fornece matéria-prima bruta para indústrias de vestuário, combustíveis e remédios.",
            potencial_futuro: "A digitalização do campo (Agrotech) está abrindo vagas qualificadas para operadores de drones e analistas de dados de solo."
        },
        sustentabilidade_ambiental: {
            titulo: "Equilíbrio Climático e Conservação",
            icon: "fa-earth-americas",
            importancia: "A terra cultivada de forma correta funciona como um gigantesco ecossistema vivo capaz de reter água e proteger nascentes.",
            impacto_positivo: "Práticas como o Plantio Direto e a Integração Lavoura-Pecuária-Floresta (ILPF) recuperam solos degradados com eficácia.",
            potencial_futuro: "A agricultura pode liderar a mitigação climática ao adotar bioinsumos naturais que reduzem a pegada de carbono a zero."
        }
    },
    tipos_de_agricultura: {
        tradicional: "Praticada com técnicas rudimentares, instrumentos manuais e baixa dependência tecnológica.",
        moderna: "Caracterizada pelo uso intensivo de biotecnologia, maquinaria pesada, automação e monitorização por satélite.",
        familiar: "Gerida por membros da mesma família, voltada para a subsistência e crucial no abastecimento alimentar interno.",
        patronal: "Focada na produção em larga escala com mão de obra assalariada, direcionada maioritariamente para a exportação.",
        organica: "Manejo sustentável que rejeita o uso de pesticidas ou fertilizantes sintéticos, priorizando a saúde do solo."
    },
    sistemas_agricolas: {
        extensivo: "Modelo com baixo investimento de capital por hectare, baixa aplicação tecnológica e alta dependência das condições climáticas naturais.",
        intensivo: "Modelo de alta produtividade suportado por forte mecanização, sistemas de irrigação avançados, seleção de sementes e controlo rigoroso de pragas."
    },
    alerta_ambiental: {
        titulo: "Gestão e Alerta Ambiental",
        descricao: "O manejo inadequado e a falta de responsabilidade técnica podem causar desmatamento, esgotamento rápido dos nutrientes do solo e poluição das reservas hídricas através do uso abusivo de agroquímicos."
    }
};

const praticasData = {
    hortalicas: {
        titulo: "Hortaliças e Verduras",
        sub: "Cultura rápida e de alto monitoramento",
        icon: "fa-seedling",
        preparo: "O solo deve ser trabalhado em canteiros elevados (20 a 30 cm) para evitar encharcamento das raízes. Exige a incorporação profunda de composto orgânico curtido ou húmus de minhoca.",
        dica: "Realize plantios em lotes rotativos a cada 14 dias para garantir uma colheita e abastecimento comercial ininterruptos ao longo do ano.",
        espacamento: "15 a 30 cm entre plantas, variando conforme a variedade (folhas abertas ou cabeças compactas como alface)."
    },
    milho: {
        titulo: "Cultura do Milho",
        sub: "Produção de grãos e silagem energética",
        icon: "fa-wheat-awn",
        preparo: "Altamente beneficiado pelo Plantio Direto sobre palhada residual anterior. Requer alta disponibilidade de nitrogênio nas primeiras 4 semanas de desenvolvimento foliar.",
        dica: "A polinização ocorre pelo vento. Certifique-se de plantar em blocos quadrados (mínimo de 4 linhas paralelas) e nunca em uma única linha longa isolada.",
        espacamento: "20 cm de distância entre sementes na linha, com espaçamento entre fileiras de 70 a 90 cm."
    },
    soja: {
        titulo: "Cultivo de Soja",
        sub: "Grande cultura e fixação de biomassa",
        icon: "fa-leaf",
        preparo: "Exige correção cirúrgica da acidez do solo via calagem (pH ideal estabilizado entre 6.0 e 6.5). Realizar inoculação com bactérias fixadoras (Bradyrhizobium) antes de semear.",
        dica: "Mantenha a profundidade do depósito de sementes estritamente entre 3 e 5 cm para atingir uma germinação e emergência uniforme no talhão.",
        espacamento: "Distribuição regulada para atingir a média de 10 a 14 plantas por metro linear de sulco."
    }
};

function initPortal() {
    // 1. Renderizar Painel Conceitual Base
    const conceitoDiv = document.getElementById('agro-conceito-container');
    if (conceitoDiv) {
        conceitoDiv.innerHTML = `
            <div class="bg-white dark:bg-agro-dark border border-slate-200 dark:border-agro/20 p-8 rounded-3xl space-y-4">
                <h3 class="font-title font-bold text-xl text-agro dark:text-agro-light flex items-center gap-2">
                    <i class="fa-solid fa-book"></i> ${agriculturaData.definicao_base.titulo}
                </h3>
                <p class="text-sm leading-relaxed text-slate-600 dark:text-slate-400">${agriculturaData.definicao_base.conceito}</p>
                <div class="p-4 bg-slate-50 dark:bg-agro-dark/50 border-l-4 border-agro rounded-r-xl text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    <strong>Cenário Nacional:</strong> ${agriculturaData.definicao_base.importancia_nacional}
                </div>
            </div>
        `;
    }

    // 2. Renderizar os 3 Pilares Mundiais
    const pilaresDiv = document.getElementById('agricultura-cards');
    if (pilaresDiv) {
        pilaresDiv.innerHTML = '';
        Object.keys(agriculturaData.pilares).forEach(key => {
            const item = agriculturaData.pilares[key];
            pilaresDiv.innerHTML += `
                <div class="bg-white dark:bg-agro-dark border border-slate-200 dark:border-agro/20 p-6 rounded-3xl transition-all card-hover flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 rounded-2xl bg-agro/10 text-agro dark:text-agro-light flex items-center justify-center text-xl mb-4">
                            <i class="fa-solid ${item.icon}"></i>
                        </div>
                        <h3 class="font-title font-bold text-base mb-3 text-slate-800 dark:text-slate-200">${item.titulo}</h3>
                        <div class="space-y-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                            <p><strong>Para que serve:</strong> ${item.importancia}</p>
                            <p><strong>Impacto Real:</strong> ${item.impacto_positivo}</p>
                        </div>
                    </div>
                    <p class="text-agro dark:text-agro-light text-xs font-semibold mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/50">
                        <strong>Futuro:</strong> ${item.potencial_futuro}
                    </p>
                </div>
            `;
        });
    }

    // 3. Renderizar Tipos de Agricultura
    const tiposDiv = document.getElementById('agro-tipos-container');
    if (tiposDiv) {
        let listaTipos = '';
        Object.keys(agriculturaData.tipos_de_agricultura).forEach(tipo => {
            listaTipos += `
                <div class="p-3 bg-slate-50 dark:bg-agro-dark/40 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col gap-0.5">
                    <h5 class="text-xs font-bold text-agro dark:text-agro-light capitalize">${tipo}</h5>
                    <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-normal">${agriculturaData.tipos_de_agricultura[tipo]}</p>
                </div>
            `;
        });
        tiposDiv.innerHTML = `
            <h4 class="font-title font-bold text-lg mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2"><i class="fa-solid fa-gears"></i> Modelos e Tipos Classificados</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">${listaTipos}</div>
        `;
    }

    // 4. Renderizar Sistemas Agrícolas e Alerta Ambiental
    const sistemasDiv = document.getElementById('agro-sistemas-container');
    if (sistemasDiv) {
        sistemasDiv.innerHTML = `
            <div>
                <h4 class="font-title font-bold text-lg mb-4 text-slate-800 dark:text-slate-200 flex items-center gap-2"><i class="fa-solid fa-diagram-project"></i> Sistemas de Intensidade</h4>
                <div class="space-y-3 text-xs">
                    <p class="leading-relaxed"><strong>Sistema Extensivo:</strong> ${agriculturaData.sistemas_agricolas.extensivo}</p>
                    <p class="leading-relaxed"><strong>Sistema Intensivo:</strong> ${agriculturaData.sistemas_agricolas.intensivo}</p>
                </div>
            </div>
            <div class="mt-6 p-4 bg-rose-500/10 text-rose-700 dark:text-rose-400 rounded-2xl border border-rose-500/20 text-xs flex items-center gap-3">
                <i class="fa-solid fa-triangle-exclamation text-xl shrink-0"></i>
                <span><strong>${agriculturaData.alerta_ambiental.titulo}:</strong> ${agriculturaData.alerta_ambiental.descricao}</span>
            </div>
        `;
    }

    // 5. Inicializar o Seletor Técnico de Culturas
    const selector = document.getElementById('plantio-selector');
    if (!selector) return;
    selector.innerHTML = '';
    Object.keys(praticasData).forEach((key, idx) => {
        const item = praticasData[key];
        const activeClass = idx === 0 ? 'bg-agro text-white dark:bg-agro-light dark:text-agro-dark' : 'bg-white dark:bg-agro-dark border border-slate-200 dark:border-agro/20 text-slate-700 dark:text-slate-300';
        selector.innerHTML += `
            <button onclick="renderPlantioDetails('${key}')" id="btn-plantio-${key}" class="plantio-btn flex items-center gap-3 p-4 rounded-2xl font-bold text-sm text-left transition-all shrink-0 lg:w-full ${activeClass} card-hover">
                <i class="fa-solid ${item.icon} text-lg"></i>
                <span>${item.titulo}</span>
            </button>
        `;
    });
    renderPlantioDetails(Object.keys(praticasData)[0]);
}

function renderPlantioDetails(key) {
    const item = praticasData[key];
    const detailsDiv = document.getElementById('plantio-details');
    if (!detailsDiv) return;
    
    document.querySelectorAll('.plantio-btn').forEach(btn => {
        btn.className = "plantio-btn flex items-center gap-3 p-4 rounded-2xl font-bold text-sm text-left transition-all shrink-0 lg:w-full bg-white dark:bg-agro-dark border border-slate-200 dark:border-agro/20 text-slate-700 dark:text-slate-300 card-hover";
    });
    const activeBtn = document.getElementById(`btn-plantio-${key}`);
    if (activeBtn) {
        activeBtn.className = "plantio-btn flex items-center gap-3 p-4 rounded-2xl font-bold text-sm text-left transition-all shrink-0 lg:w-full bg-agro text-white dark:bg-agro-light dark:text-agro-dark card-hover";
    }

    detailsDiv.innerHTML = `
        <div class="flex items-center gap-4 mb-6">
            <div class="p-3 bg-agro/10 text-agro dark:text-agro-light rounded-2xl text-2xl">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <div>
                <h3 class="font-title font-extrabold text-2xl text-agro dark:text-slate-150 mb-0.5">${item.titulo}</h3>
                <p class="text-xs font-bold text-agro-light uppercase tracking-wider">${item.sub}</p>
            </div>
        </div>
        <div class="space-y-6">
            <div>
                <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider"><i class="fa-solid fa-screwdriver-wrench"></i> Instruções de Preparo do Solo</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">${item.preparo}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-5 bg-slate-50 dark:bg-agro-dark/40 rounded-2xl border border-slate-150 dark:border-agro/15">
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2 text-xs uppercase tracking-wider"><i class="fa-solid fa-ruler-horizontal"></i> Medidas de Espaçamento</h4>
                    <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">${item.espacamento}</p>
                </div>
                <div class="p-5 bg-agro/5 dark:bg-agro-light/5 rounded-2xl border border-agro/10 dark:border-agro-light/10">
                    <h4 class="font-bold text-agro dark:text-agro-light mb-2 flex items-center gap-2 text-xs uppercase tracking-wider"><i class="fa-solid fa-circle-check"></i> Recomendação de Sucesso</h4>
                    <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">${item.dica}</p>
                </div>
            </div>
        </div>
    `;
}

// Leitor de tela por duplo clique nativo
let activeUtterance = null;
document.body.addEventListener('dblclick', function(e) {
    window.speechSynthesis.cancel();
    const targetText = e.target.innerText;
    if (targetText && targetText.trim() !== "") {
        const speechIndicator = document.getElementById('speech-indicator');
        if (speechIndicator) speechIndicator.classList.remove('hidden');
        
        activeUtterance = new SpeechSynthesisUtterance(targetText);
        activeUtterance.lang = 'pt-BR';
        activeUtterance.rate = 1.1;
        
        activeUtterance.onend = function() {
            if (speechIndicator) speechIndicator.add('hidden');
        };
        
        window.speechSynthesis.speak(activeUtterance);
    }
});

const speechIndicatorBtn = document.getElementById('speech-indicator');
if (speechIndicatorBtn) {
    speechIndicatorBtn.addEventListener('click', function() {
        window.speechSynthesis.cancel();
        this.classList.add('hidden');
    });
}

// Alternador de Modo Escuro (Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggleBtn && themeIcon) {
    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            themeIcon.className = "fa-solid fa-sun text-xl";
            themeToggleBtn.className = "p-4 bg-amber-500 text-slate-900 rounded-full shadow-2xl transition-all card-hover flex items-center justify-center w-14 h-14";
        } else {
            themeIcon.className = "fa-solid fa-moon text-xl";
            themeToggleBtn.className = "p-4 bg-agro text-white rounded-full shadow-2xl hover:bg-agro-dark transition-all card-hover flex items-center justify-center w-14 h-14";
        }
    });
}

document.addEventListener('DOMContentLoaded', initPortal);
