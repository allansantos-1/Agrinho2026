/* Acessibilidade - Agrinho 2026
Recursos: modo escuro, leitura por voz com duplo clique e inicialização do VLibras. */
(function () {
    'use strict';

    function qs(selector) {
        return document.querySelector(selector);
    }

    function setThemeIcon(isDark) {
        const icon = qs('#theme-icon');
        if (!icon) return;
        icon.classList.remove('fa-moon', 'fa-sun');
        icon.classList.add(isDark ? 'fa-sun' : 'fa-moon');
    }

    function applyTheme(theme) {
        const isDark = theme === 'dark';
        document.documentElement.classList.toggle('dark', isDark);
        document.body.classList.toggle('dark-mode', isDark);
        setThemeIcon(isDark);
        try {
            localStorage.setItem('agrinho-theme', theme);
        } catch (error) {
            // localStorage pode estar bloqueado em alguns navegadores.
        }
    }

    function initThemeToggle() {
        const button = qs('#theme-toggle');
        const savedTheme = (() => {
            try {
                return localStorage.getItem('agrinho-theme');
            } catch (error) {
                return null;
            }
        })();

        if (savedTheme === 'dark' || savedTheme === 'light') {
            applyTheme(savedTheme);
        } else {
            applyTheme('light');
        }

        if (!button) return;
        button.addEventListener('click', function () {
            const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark-mode');
            applyTheme(isDark ? 'light' : 'dark');
        });
    }

    function getReadableText(target) {
        if (!target) return '';

        const ignoredTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'SVG', 'I'];
        if (ignoredTags.includes(target.tagName)) return '';

        const text = (target.innerText || target.textContent || '').replace(/\s+/g, ' ').trim();
        if (text.length < 3) return '';

        return text.length > 900 ? text.slice(0, 900) + '...' : text;
    }

    function showSpeechIndicator(show) {
        const indicator = qs('#speech-indicator');
        if (!indicator) return;
        indicator.classList.toggle('hidden', !show);
    }

    function speakText(text) {
        if (!('speechSynthesis' in window)) {
            alert('Seu navegador não oferece suporte à leitura por voz.');
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.95;
        utterance.pitch = 1;

        utterance.onstart = function () {
            showSpeechIndicator(true);
        };
        utterance.onend = function () {
            showSpeechIndicator(false);
        };
        utterance.onerror = function () {
            showSpeechIndicator(false);
        };

        window.speechSynthesis.speak(utterance);
    }

    function initSpeechReader() {
        document.addEventListener('dblclick', function (event) {
            const text = getReadableText(event.target);
            if (text) {
                speakText(text);
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && 'speechSynthesis' in window) {
                window.speechSynthesis.cancel();
                showSpeechIndicator(false);
            }
        });
    }

    function initVLibras() {
        // A biblioteca externa deve ser carregada antes deste arquivo:
        // <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
        if (window.VLibras && window.VLibras.Widget) {
            try {
                new window.VLibras.Widget('https://vlibras.gov.br/app');
            } catch (error) {
                console.warn('VLibras não pôde ser inicializado:', error);
            }
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initThemeToggle();
        initSpeechReader();
        initVLibras();
    });
}());
