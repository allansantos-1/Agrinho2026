# Portal Semeando Conhecimento

Projeto desenvolvido para o **Concurso Agrinho 2026**, na categoria **Programação**, **Subcategoria 3: Programação Front-End com HTML, CSS e JavaScript**.

## Tema do Concurso

**Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.**

## Sobre o projeto

O projeto **Portal Semeando Conhecimento** foi desenvolvido pelo estudante **Allan da Silva Gracioli Santos** com o objetivo de apresentar, de forma simples, acessível e organizada, informações úteis sobre agricultura, técnicas de cultivo, sistemas de irrigação e nutrição do solo.

A proposta do site é relacionar agricultura, tecnologia, sustentabilidade e acesso à informação. O projeto mostra como conteúdos sobre o campo podem ser organizados em uma página digital interativa, facilitando a leitura e a compreensão de temas ligados à produção agrícola, uso consciente da água, manejo do solo e equilíbrio ambiental.

O site utiliza seções organizadas, navegação por rolagem, cards informativos e carregamento dinâmico de dados por meio de arquivos JSON. Além disso, possui recursos de acessibilidade, como modo escuro, leitura por voz com duplo clique em textos e suporte ao VLibras.

## Objetivo

O objetivo do projeto é facilitar o acesso a informações sobre práticas agrícolas e sustentabilidade, principalmente para estudantes, agricultores iniciantes e pessoas interessadas em compreender melhor o uso da tecnologia no campo.

O site busca mostrar que a programação pode ser usada como ferramenta de apoio à organização do conhecimento, permitindo apresentar dados agrícolas de maneira clara, visual, acessível e interativa.

Além disso, o projeto valoriza o uso responsável dos recursos naturais, especialmente da água e do solo, reforçando a importância do equilíbrio entre produção agrícola, preservação ambiental e inclusão digital no meio rural.

## Conteúdos apresentados

O projeto apresenta informações sobre:

- O papel da agricultura no mundo;
- Segurança alimentar;
- Desenvolvimento econômico no campo;
- Sustentabilidade ambiental;
- Tipos de agricultura;
- Sistemas agrícolas extensivo e intensivo;
- Técnicas de cultivo;
- Hortaliças e verduras;
- Milho;
- Soja;
- Sistemas de irrigação;
- Eficiência hídrica;
- Macronutrientes do solo;
- Micronutrientes de proteção;
- Acessibilidade e inclusão no campo.

## Funcionalidades do site

O site possui as seguintes funcionalidades:

- Página inicial com apresentação do projeto;
- Menu de navegação entre as seções principais;
- Navegação por rolagem dentro da mesma página;
- Cards informativos sobre agricultura e sustentabilidade;
- Carregamento de dados a partir de arquivos JSON;
- Exibição dinâmica das informações usando JavaScript;
- Guia técnico de cultivo com seleção de culturas;
- Painel de comparação de sistemas de irrigação;
- Barras visuais de eficiência hídrica;
- Seção sobre nutrientes do solo;
- Botão de modo escuro;
- Leitura por voz ao dar duplo clique em textos;
- Indicador visual durante a leitura por voz;
- Tecla Esc para interromper a leitura;
- Suporte ao VLibras;
- Layout adaptado para diferentes tamanhos de tela;
- Tratamento de erro caso algum arquivo JSON não seja encontrado.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias básicas de front-end:

- HTML5;
- CSS3;
- JavaScript;
- JSON.

Não foram utilizados frameworks.

O CSS está em arquivo separado.

O JavaScript está em arquivos separados.

Os arquivos JSON são usados apenas para organizar os dados que aparecem no site.

## Organização dos dados

Além dos arquivos HTML, CSS e JavaScript, o projeto utiliza arquivos JSON como forma de organização das informações.

Os conteúdos sobre agricultura, práticas de cultivo e irrigação foram salvos em arquivos `.json`, que são lidos pelo JavaScript e exibidos dinamicamente na página.

A escolha pelo uso de arquivos JSON foi feita para deixar o projeto mais organizado e mais fácil de atualizar. Dessa forma, os dados ficam separados da estrutura visual do site.

Isso permite corrigir, ampliar ou atualizar informações sem precisar modificar diretamente todo o HTML. Por exemplo, caso seja necessário acrescentar uma nova prática de cultivo ou atualizar informações sobre irrigação, basta editar o arquivo JSON correspondente.

Os arquivos JSON não representam uma linguagem de programação adicional. Eles funcionam somente como uma forma de armazenar e organizar as informações usadas pelo projeto.

## Estrutura de arquivos

```text
/
├── index.html
├── README.md
├── LICENSE
├── css/
│   └── style.css
├── js/
│   ├── acessibilidade.js
│   └── script.js
└── bd/
    ├── agricultura.json
    ├── irrigacao.json
    └── praticas.json
```

## Como executar o projeto

Para visualizar o projeto localmente, é recomendado utilizar o **Visual Studio Code** com a extensão **Live Server**.

Passos:

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Clique com o botão direito no arquivo `index.html`.
4. Selecione a opção **Open with Live Server**.
5. Navegue pelo site usando o menu e as seções da página.

O uso do Live Server é recomendado porque o projeto carrega dados de arquivos JSON. Caso o arquivo seja aberto diretamente no navegador, algumas informações podem não aparecer corretamente por causa das regras de segurança do navegador.

Também é possível acessar o projeto publicado pelo GitHub Pages ou Vercel, por meio do link disponível na seção **About** deste repositório.

## Acessibilidade

O projeto inclui recursos de acessibilidade para melhorar a experiência de navegação.

Foram implementados:

- Botão para alternar entre modo claro e modo escuro;
- Leitura por voz com duplo clique em textos;
- Indicador visual enquanto a leitura está ativa;
- Tecla Esc para interromper a leitura;
- Suporte ao VLibras;
- Navegação organizada por seções;
- Layout responsivo para diferentes dispositivos;
- Estrutura HTML com elementos como header, main, section, nav e footer.

A leitura por voz utiliza o recurso de voz do próprio navegador. Esse recurso não substitui leitores de tela profissionais, mas ajuda a tornar o conteúdo mais acessível e mais fácil de acompanhar.

O VLibras foi utilizado como recurso de apoio à acessibilidade para ampliar a inclusão de usuários que utilizam Libras.

## Sustentabilidade

O projeto se relaciona com o tema do Agrinho ao mostrar que a produção agrícola precisa caminhar junto com o cuidado com o meio ambiente.

As seções do site abordam temas como uso consciente da água, técnicas de irrigação, manejo do solo, nutrientes essenciais, agricultura familiar, segurança alimentar e preservação ambiental.

A proposta é mostrar que o futuro do campo depende do equilíbrio entre produção, conhecimento, tecnologia, renda, preservação ambiental e acesso à informação de qualidade.

## Conceitos de programação aplicados

Durante o desenvolvimento do projeto, foram aplicados conceitos importantes de programação front-end, como:

- Estruturação de página com HTML;
- Uso de tags semânticas como header, main, section, nav e footer;
- Estilização com CSS externo;
- Organização visual com classes e seletores CSS;
- Uso de Flexbox e Grid para organização do layout;
- Responsividade com media queries;
- Manipulação do DOM com JavaScript;
- Uso de variáveis;
- Uso de funções;
- Uso de condicionais;
- Uso de eventos de clique;
- Leitura de arquivos JSON com fetch;
- Tratamento de erros no carregamento dos dados;
- Montagem dinâmica de conteúdo na página;
- Separação do código em arquivos próprios.

## Principais interações implementadas

O JavaScript foi usado para tornar o site mais dinâmico e interativo. Entre as principais interações implementadas estão:

- Carregamento automático dos dados sobre agricultura a partir de `agricultura.json`;
- Carregamento das práticas de cultivo a partir de `praticas.json`;
- Carregamento dos sistemas de irrigação a partir de `irrigacao.json`;
- Montagem dinâmica de cards informativos;
- Troca de conteúdo conforme a cultura selecionada;
- Criação dinâmica do painel de eficiência hídrica;
- Tratamento de erro quando algum arquivo JSON não é encontrado;
- Alternância entre modo claro e modo escuro;
- Leitura por voz com duplo clique;
- Interrupção da leitura com a tecla Esc;
- Inicialização do VLibras por arquivo JavaScript externo.

## Uso de Inteligência Artificial no desenvolvimento

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

O ChatGPT foi usado como apoio na revisão de códigos HTML, CSS e JavaScript, na organização de ideias, na correção de problemas de estrutura e na elaboração de textos de apoio para o projeto.

A organização final do projeto, a escolha das informações, a montagem dos arquivos, a adaptação do conteúdo e os testes foram realizados pelo estudante **Allan da Silva Gracioli Santos**, com orientação do professor **Roberto Nunes dos Santos**.

A Inteligência Artificial foi usada como apoio educacional, sem substituir a autoria do estudante, a pesquisa realizada e a organização do projeto.

## Modelos de prompts utilizados

Os modelos abaixo representam o tipo de orientação usada nas ferramentas de Inteligência Artificial durante o desenvolvimento do projeto. Eles foram adaptados conforme a necessidade de cada etapa.

### Modelo de prompt para correção de código

Analise este código HTML, CSS e JavaScript de um projeto escolar do Concurso Agrinho. Corrija erros de estrutura, organização e funcionamento, mantendo a proposta original do estudante. Não utilize frameworks, não coloque CSS ou JavaScript interno no HTML e mantenha os arquivos separados.

### Modelo de prompt para melhoria do JavaScript

Verifique este código JavaScript e melhore a organização das funções, o carregamento dos arquivos JSON e o tratamento de erros. O projeto deve continuar funcionando apenas com HTML, CSS, JavaScript e JSON, sem uso de API externa.

### Modelo de prompt para criação de conteúdo educativo

Crie textos educativos sobre agricultura, sustentabilidade, irrigação, cultivo e nutrição do solo, com linguagem clara e adequada para estudantes. O conteúdo deve estar relacionado ao tema do Concurso Agrinho 2026: Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.

### Modelo de prompt para revisão dos textos

Revise este texto de um projeto escolar sobre agricultura, sustentabilidade e tecnologia no campo. Mantenha uma linguagem simples, clara e adequada para estudantes, sem deixar o texto artificial ou exagerado. Preserve a ideia principal e corrija apenas problemas de clareza, coesão e escrita.

## Créditos dos recursos utilizados

Os textos informativos foram organizados com base em conteúdos relacionados à agricultura, sustentabilidade, técnicas de cultivo, irrigação, nutrição do solo e preservação ambiental.

O conteúdo foi adaptado para fins educacionais no contexto do Concurso Agrinho 2026.

Os recursos de acessibilidade foram implementados com JavaScript, utilizando recursos do próprio navegador para leitura por voz e integração com o VLibras.

## Autoria

**Estudante:** Allan da Silva Gracioli Santos  
**Professor orientador:** Roberto Nunes dos Santos  
**Escola:** Escola Estadual Ottilia Homero da Silva  
**Município:** Pinhais – Paraná

## Tags do projeto

Sugestões de tags para o GitHub:

```text
agrinho programacao frontend html css javascript json agricultura sustentabilidade irrigacao plantio solo acessibilidade libras parana
```

## Licença

Este projeto foi desenvolvido para fins educacionais e para participação no Concurso Agrinho 2026.

O repositório possui um arquivo de licença próprio, disponível em `LICENSE`.

## Considerações finais

O **Portal Semeando Conhecimento** mostra como a programação pode ser usada para organizar e apresentar informações importantes sobre o campo.

O projeto une tecnologia, agricultura, sustentabilidade e acessibilidade, buscando tornar o conhecimento mais claro e mais fácil de consultar.

A intenção principal do projeto é mostrar que o uso da tecnologia no campo pode contribuir para a aprendizagem, para o planejamento rural e para a valorização de práticas mais responsáveis na produção agrícola.
