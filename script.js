:root {
    --agro: #023215;
    --agro-dark: #01180b;
    --agro-light: #22c55e;
    --bg: #f8fafc;
    --text: #1e293b;
    --muted: #64748b;
    --border: #e2e8f0;
    --white: #ffffff;
    --blue: #2563eb;
    --cyan: #06b6d4;
    --amber: #f59e0b;
    --rose: #f43f5e;
    --shadow: 0 20px 45px rgba(15, 23, 42, 0.12);
    --radius-lg: 1.5rem;
    --radius-xl: 1.75rem;
    --font-main: 'Inter', Arial, sans-serif;
    --font-title: 'Plus Jakarta Sans', Arial, sans-serif;
}

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--bg);
    color: var(--text);
    font-family: var(--font-main);
    transition: background-color 0.3s ease, color 0.3s ease;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    border: none;
    cursor: pointer;
    font-family: inherit;
}

.hidden {
    display: none !important;
}

.floating-tools {
    position: fixed;
    left: 1.5rem;
    bottom: 1.5rem;
    z-index: 50;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.floating-button {
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #fff;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.25);
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.floating-button:hover {
    transform: translateY(-3px);
}

.floating-button i {
    font-size: 1.25rem;
}

.theme-button {
    background: var(--agro);
}

.theme-button:hover {
    background: var(--agro-dark);
}

.speech-button {
    background: var(--amber);
    animation: pulse 1.4s infinite;
}

.site-header {
    position: sticky;
    top: 0;
    z-index: 40;
    background: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
}

.header-inner,
.page-content,
.footer-inner {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.header-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.brand-area {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.brand-icon {
    padding: 0.65rem;
    border-radius: 0.9rem;
    background: rgba(22, 101, 52, 0.1);
    color: var(--agro-light);
}

.brand-icon i {
    font-size: 1.85rem;
}

.brand-area h1 {
    margin: 0;
    font-family: var(--font-title);
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--agro);
    letter-spacing: -0.03em;
}

.brand-area p {
    margin: 0.15rem 0 0;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.main-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.main-nav a {
    padding: 0.55rem 0.75rem;
    border-radius: 0.8rem;
    color: #475569;
    font-size: 0.9rem;
    font-weight: 700;
    transition: background-color 0.2s ease, color 0.2s ease;
}

.main-nav a:hover {
    background: #f1f5f9;
    color: var(--agro);
}

.accessibility-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.55rem 1.5rem;
    background: var(--agro);
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 0.8rem;
    text-align: center;
}

.accessibility-bar span {
    padding: 0.12rem 0.5rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.2);
    font-weight: 800;
}

.accessibility-bar p {
    margin: 0;
}

.page-content {
    flex: 1;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
}

.hero-section {
    padding-top: 1rem;
}

.hero-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
    border-radius: var(--radius-xl);
    background: linear-gradient(135deg, var(--agro), var(--agro-dark));
    color: #fff;
    box-shadow: var(--shadow);
}

.hero-text {
    max-width: 42rem;
}

.tag-label {
    display: inline-block;
    margin-bottom: 1rem;
    padding: 0.38rem 0.9rem;
    border-radius: 999px;
    background: var(--agro-light);
    color: var(--agro-dark);
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.hero-card h2 {
    margin: 0 0 1rem;
    font-family: var(--font-title);
    font-size: clamp(2.3rem, 5vw, 3.3rem);
    line-height: 1.05;
    font-weight: 800;
}

.hero-card p {
    margin: 0 0 1.5rem;
    color: #e2e8f0;
    font-size: 1.08rem;
    line-height: 1.65;
}

.button-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.primary-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 0.85rem;
    background: #fff;
    color: var(--agro);
    font-weight: 800;
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.18);
    transition: transform 0.2s ease, background-color 0.2s ease;
}

.primary-button:hover {
    transform: translateY(-3px);
    background: #f8fafc;
}

.hero-feature {
    width: 100%;
    max-width: 20rem;
    display: flex;
    justify-content: center;
}

.feature-box {
    width: 100%;
    text-align: center;
    padding: 1.5rem;
    border-radius: var(--radius-lg);
}

.translucent-box {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
}

.feature-box i {
    margin-bottom: 1rem;
    color: var(--agro-light);
    font-size: 3rem;
}

.feature-box h4 {
    margin: 0 0 0.25rem;
    font-size: 1.1rem;
}

.feature-box p {
    margin: 0;
    color: #cbd5e1;
    font-size: 0.78rem;
}

.content-section {
    scroll-margin-top: 6rem;
    margin-top: 5rem;
}

.section-title {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.section-title-spaced {
    margin-bottom: 2rem;
}

.section-title h2 {
    margin: 0;
    color: var(--agro);
    font-family: var(--font-title);
    font-size: 2rem;
    font-weight: 800;
}

.section-title p {
    margin: 0.35rem 0 0;
    color: var(--muted);
    font-size: 0.9rem;
}

.cards-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
}

.cards-grid-three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.cards-grid-two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.content-box,
.info-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: 2rem;
}

.flex-between,
.info-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.planting-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2rem;
}

.planting-selector {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.planting-details {
    min-height: 18.75rem;
}

.irrigation-cards {
    margin-bottom: 2rem;
}

.info-card {
    min-height: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow);
}

.icon-box {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    border-radius: 0.85rem;
    font-size: 1.25rem;
}

.icon-blue {
    background: #dbeafe;
    color: var(--blue);
}

.icon-cyan {
    background: #cffafe;
    color: #0891b2;
}

.icon-amber {
    background: #fef3c7;
    color: #d97706;
}

.info-card h3,
.content-box h3,
.comparison-panel h3 {
    margin: 0 0 0.75rem;
    color: var(--text);
    font-family: var(--font-title);
    font-size: 1.35rem;
    font-weight: 800;
}

.info-card p,
.intro-text {
    color: #475569;
    font-size: 0.9rem;
    line-height: 1.65;
}

.card-meta {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #f1f5f9;
    color: var(--muted);
    font-size: 0.75rem;
    font-weight: 700;
}

.highlight-green {
    color: var(--agro-light);
}

.highlight-cyan {
    color: var(--cyan);
}

.highlight-amber {
    color: var(--amber);
}

.highlight-rose {
    color: var(--rose);
}

.comparison-panel {
    margin-top: 0;
}

.progress-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.progress-label {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.35rem;
    font-size: 0.9rem;
    font-weight: 800;
}

.progress-track {
    width: 100%;
    height: 0.75rem;
    overflow: hidden;
    border-radius: 999px;
    background: #f1f5f9;
}

.progress-fill {
    height: 100%;
    border-radius: 999px;
}

.progress-green {
    background: var(--agro-light);
}

.progress-cyan {
    background: var(--cyan);
}

.progress-amber {
    background: var(--amber);
}

.progress-rose {
    background: var(--rose);
}

.progress-width-95 {
    width: 95%;
}

.progress-width-85 {
    width: 85%;
}

.progress-width-75 {
    width: 75%;
}

.progress-width-50 {
    width: 50%;
}

.soft-label {
    background: rgba(34, 197, 94, 0.1);
    color: var(--agro-light);
}

.warning-label {
    background: rgba(245, 158, 11, 0.1);
    color: #d97706;
}

.nutrient-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.nutrient-item,
.micro-card {
    background: #f8fafc;
    border: 1px solid #edf2f7;
    border-radius: 1rem;
}

.nutrient-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
}

.nutrient-letter {
    flex: 0 0 auto;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    background: var(--agro);
    color: #fff;
    font-weight: 800;
}

.nutrient-item h4,
.micro-card h4 {
    margin: 0 0 0.25rem;
    color: var(--text);
    font-size: 0.95rem;
}

.nutrient-item p,
.micro-card p {
    margin: 0;
    color: var(--muted);
    font-size: 0.78rem;
    line-height: 1.55;
}

.micro-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.micro-card {
    padding: 1rem;
}

.micro-card h4 {
    color: var(--agro-light);
}

.warning-box {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid rgba(245, 158, 11, 0.2);
    background: rgba(245, 158, 11, 0.1);
    color: #b45309;
    font-size: 0.8rem;
    line-height: 1.5;
}

.warning-box i {
    flex: 0 0 auto;
    font-size: 1.3rem;
}

.site-footer {
    margin-top: auto;
    padding: 2.5rem 0;
    background: #fff;
    border-top: 1px solid var(--border);
    color: var(--muted);
}

.footer-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
}

.footer-text p {
    margin: 0 0 0.25rem;
    color: var(--agro);
    font-family: var(--font-title);
    font-size: 1rem;
    font-weight: 800;
}

.footer-text span {
    font-size: 0.8rem;
}

.footer-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-tags span {
    padding: 0.45rem 0.9rem;
    border-radius: 0.6rem;
    border: 1px solid rgba(22, 101, 52, 0.1);
    background: rgba(22, 101, 52, 0.05);
    color: var(--agro);
    font-size: 0.75rem;
    font-weight: 800;
}

html.dark body,
body.dark-mode {
    background: #020617;
    color: #e2e8f0;
}

html.dark .site-header,
body.dark-mode .site-header,
html.dark .site-footer,
body.dark-mode .site-footer,
html.dark .content-box,
body.dark-mode .content-box,
html.dark .info-card,
body.dark-mode .info-card {
    background: var(--agro-dark);
    border-color: rgba(34, 197, 94, 0.2);
}

html.dark .accessibility-bar,
body.dark-mode .accessibility-bar,
html.dark .hero-card,
body.dark-mode .hero-card {
    background: linear-gradient(135deg, var(--agro-dark), #000000);
}

html.dark .brand-area h1,
body.dark-mode .brand-area h1,
html.dark .section-title h2,
body.dark-mode .section-title h2,
html.dark .footer-text p,
body.dark-mode .footer-text p {
    color: var(--agro-light);
}

html.dark .brand-area p,
body.dark-mode .brand-area p,
html.dark .section-title p,
body.dark-mode .section-title p,
html.dark .info-card p,
body.dark-mode .info-card p,
html.dark .intro-text,
body.dark-mode .intro-text,
html.dark .nutrient-item p,
body.dark-mode .nutrient-item p,
html.dark .micro-card p,
body.dark-mode .micro-card p {
    color: #94a3b8;
}

html.dark .main-nav a,
body.dark-mode .main-nav a {
    color: #cbd5e1;
}

html.dark .main-nav a:hover,
body.dark-mode .main-nav a:hover {
    background: rgba(34, 197, 94, 0.15);
    color: #fff;
}

html.dark .info-card h3,
body.dark-mode .info-card h3,
html.dark .content-box h3,
body.dark-mode .content-box h3,
html.dark .comparison-panel h3,
body.dark-mode .comparison-panel h3,
html.dark .nutrient-item h4,
body.dark-mode .nutrient-item h4 {
    color: #e2e8f0;
}

html.dark .nutrient-item,
body.dark-mode .nutrient-item,
html.dark .micro-card,
body.dark-mode .micro-card,
html.dark .progress-track,
body.dark-mode .progress-track {
    background: rgba(2, 6, 23, 0.35);
    border-color: rgba(34, 197, 94, 0.12);
}

html.dark .card-meta,
body.dark-mode .card-meta {
    border-color: rgba(34, 197, 94, 0.12);
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.08);
        opacity: 0.75;
    }
}

@media (max-width: 1024px) {
    .cards-grid-three,
    .cards-grid-two,
    .planting-layout {
        grid-template-columns: 1fr;
    }

    .planting-selector {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 0.5rem;
    }
}

@media (max-width: 768px) {
    .header-inner,
    .hero-card,
    .footer-inner {
        flex-direction: column;
        text-align: center;
    }

    .hero-card {
        padding: 2rem 1.25rem;
    }

    .page-content {
        padding-top: 2rem;
    }

    .micro-grid {
        grid-template-columns: 1fr;
    }

    .footer-tags {
        justify-content: center;
    }
}

@media (max-width: 520px) {
    .header-inner,
    .page-content,
    .footer-inner {
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .brand-area {
        flex-direction: column;
    }

    .main-nav a {
        font-size: 0.78rem;
        padding: 0.45rem 0.55rem;
    }

    .content-box,
    .info-card {
        padding: 1.25rem;
    }

    .card-meta,
    .progress-label {
        flex-direction: column;
        gap: 0.25rem;
    }
}

/* Ajustes do widget VLibras */
[vw],
[vw] [vw-access-button],
[vw] [vw-plugin-wrapper] {
    z-index: 9999 !important;
}

.icon-green {
    background: rgba(34, 197, 94, 0.14);
    color: var(--agro-light);
}

.icon-rose {
    background: rgba(244, 63, 94, 0.14);
    color: var(--rose);
}

.error-card {
    border-color: rgba(244, 63, 94, 0.25);
}

.concept-box {
    margin-bottom: 2rem;
}

.card-meta-column {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.data-list {
    display: grid;
    gap: 1rem;
    margin-top: 1rem;
}

.data-list-spaced {
    gap: 1.25rem;
}

.data-item {
    padding: 1rem;
    border: 1px solid var(--border);
    background: rgba(248, 250, 252, 0.8);
    border-radius: 1rem;
}

.data-item h4 {
    margin: 0 0 0.35rem;
    font-family: var(--font-title);
    color: var(--agro);
}

.data-item p {
    margin: 0;
    color: var(--muted);
    line-height: 1.6;
}

.planting-card {
    width: 100%;
}

.planting-heading {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.5rem;
}

.planting-heading h3 {
    margin: 0.5rem 0 0;
}

.planting-option.active {
    background: var(--agro);
    color: #fff;
    border-color: var(--agro);
}

body.dark-mode .data-item {
    background: rgba(5, 46, 22, 0.45);
    border-color: rgba(34, 197, 94, 0.18);
}

body.dark-mode .data-item h4 {
    color: var(--agro-light);
}
