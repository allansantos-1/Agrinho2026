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

const praticasData = {
    hortalicas: {
        titulo: "Hortaliças e Verduras",
        sub: "Cultura rápida e sensível",
        icon: "fa-seedling",
        preparo: "O preparo do solo deve ser feito com canteiros elevados e alta dosagem de matéria orgânica. Necessita de terra solta para permitir o bom crescimento de raízes finas.",
        dica: "Realize plantio escalonado (novas sementes a cada 15 dias) para ter colheitas contínuas.",
        espacamento: "15 a 30 cm entre plantas, a depender do tipo da hortaliça (ex: alface ou rúcula)."
    },
    milho: {
        titulo: "Plantio de Milho",
        sub: "Cultura de grão e alta energia",
        icon: "fa-wheat-awn",
        preparo: "Excelente adaptação ao sistema de Plantio Direto sobre palhada. Exige nitrogênio abundante logo nas primeiras semanas de desenvolvimento das folhas.",
        dica: "A polinização do milho depende do vento, plante sempre em blocos (várias fileiras paralelas) e nunca em uma única linha comprida.",
        espacamento: "20 cm entre sementes, com fileiras de 70 a 90 cm de distância."
    },
    soja: {
        titulo: "Cultivo de Soja",
        sub: "Líder em exportações e biomassa",
        icon: "fa-leaf",
        preparo: "Solo com acidez corrigida através de calcário (pH ideal entre 6.0 e 6.5). Exige inoculação de bactérias fixadoras de nitrogênio antes de semear para poupar fertilizante.",
        dica: "A profundidade da semente deve ser constante (entre 3 e 5 cm) para germinar uniformemente.",
        espacamento: "Distribuição média de 10 a 14 plantas por metro linear."
    }
};

function initPlantio() {
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
                <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2 text-sm uppercase tracking-wider"><i class="fa-solid fa-screwdriver-wrench"></i> Preparo do Solo</h4>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">${item.preparo}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-5 bg-slate-50 dark:bg-agro-dark/40 rounded-2xl border border-slate-150 dark:border-agro/15">
                    <h4 class="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-2 text-xs uppercase tracking-wider"><i class="fa-solid fa-ruler-horizontal"></i> Espaçamento Técnico</h4>
                    <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">${item.espacamento}</p>
                </div>
                <div class="p-5 bg-agro/5 dark:bg-agro-light/5 rounded-2xl border border-agro/10 dark:border-agro-light/10">
                    <h4 class="font-bold text-agro dark:text-agro-light mb-2 flex items-center gap-2 text-xs uppercase tracking-wider"><i class="fa-solid fa-star"></i> Dica de Vitória</h4>
                    <p class="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">${item.dica}</p>
                </div>
            </div>
        </div>
    `;
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.className = "tab-btn px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-agro/20 transition-all";
    });

    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) targetTab.classList.remove('hidden');
    
    const clickedBtn = document.querySelector(`[data-tab="${tabId}"]`);
    if (clickedBtn) {
        clickedBtn.className = "tab-btn px-4 py-2 rounded-xl text-sm font-semibold transition-all bg-agro text-white dark:bg-agro-light dark:text-agro-dark";
    }
}

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
            if (speechIndicator) speechIndicator.classList.add('hidden');
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

document.addEventListener('DOMContentLoaded', initPlantio);
