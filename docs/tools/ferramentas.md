## Ferramentas de Acessibilidade

Para auxiliar e facilitar o desenvolvimento de soluções acessíveis, foram elencadas ferramentas de acessibilidade abaixo.

---

### 1. [Framework de Testes de Acessibilidade](https://github.com/google/Accessibility-Test-Framework-for-Android)

* **Propósito:** Ajuda desenvolvedores a garantir que **aplicativos Android** sejam acessíveis para pessoas com deficiência, fornecendo **verificações automatizadas** de problemas de acessibilidade.
* **Como usar:** Integre a biblioteca em seu processo de teste. Por exemplo, você pode rodar verificações de acessibilidade em uma hierarquia de `View` para identificar erros como a falta de uma `contentDescription`. O framework é capaz de sinalizar esses erros, e você pode configurar para que ele lance uma exceção se forem encontrados problemas, o que ajuda a automatizar a detecção de questões comuns de acessibilidade.

---

### 2. [Wave - web Accessibility Evaluation Tool](https://wave.webaim.org/)

* **Propósito:** Uma suíte de ferramentas para ajudar a tornar o **conteúdo da web mais acessível**, identificando **erros de acessibilidade e WCAG**, e facilitando a avaliação humana. Ele foca em problemas que impactam usuários finais e educa sobre acessibilidade web.
* **Como usar:** Você pode usar a ferramenta online inserindo o endereço de uma página web (URL). Além disso, o WAVE oferece **extensões de navegador** (Chrome, Firefox, Edge) que permitem testar páginas diretamente enquanto você navega, o que é ótimo para conteúdo protegido por senha ou dinâmico. Para grandes volumes de dados, o WAVE disponibiliza uma API de assinatura e um mecanismo de teste autônomo que pode ser integrado ao seu processo de integração contínua (CI).

---

### 3. [DynoVisual Sitemap Generator](https://dynomapper.com/)

* **Propósito:** Um poderoso gerador de sitemap visual que ajuda equipes web a obter clareza, organização e controle sobre websites complexos, permitindo **planejar a estrutura de sites** com precisão.
* **Como usar:** Você pode rastrear seu site para gerar sitemaps visuais que mostram a verdadeira arquitetura do seu site, eliminando a necessidade de classificação manual. A ferramenta também permite **editar sitemaps com arrastar e soltar**, integrar com o Google Analytics para visualizar dados de usuário em tempo real, inventariar todos os arquivos do site, e inclui ferramentas para auditoria de desempenho, atribuição de tarefas de conteúdo, planejamento estratégico, **testes de acessibilidade (WCAG/ADA)** e rastreamento de palavras-chave.

---

### 4. [JAWS - leitor de telas para Windows](https://www.tecassistiva.com.br/catalogo/jaws/)

* **Propósito:** Software de leitura de tela projetado para **usuários cegos** que **lê em voz alta** o que é exibido na tela do PC, proporcionando acesso eficaz a aplicativos e ao sistema operacional.
* **Como usar:** Instale o JAWS em seu PC Windows (desktop, laptop ou tablet). Uma vez instalado, ele começará a ler o conteúdo na sua tela. Ele suporta teclados padrão e a maioria das linhas Braille. O software inclui recursos de ajuda sensível ao contexto (`Insert+F1`, `Insert+H`, `Insert+W`) e uma poderosa linguagem de script para personalizar a experiência do usuário em diversas aplicações.

---

### 5. [ACHECKS - Caixa de ferramentas para acessibilidade](https://www.achecks.org/)

* **Propósito:** Uma coleção de ferramentas gratuitas projetadas para ajudar usuários a **verificar e melhorar a acessibilidade** de seus websites e conteúdo.
* **Como usar:** Você pode acessar a caixa de ferramentas através do site. O site lista várias ferramentas, incluindo:
    * **AChecker+ Web Checker:** Para verificações gerais de acessibilidade web.
    * **AChecker Legacy:** Uma versão anterior ou tipo diferente de verificador web.
    * **Tingtun PDF Checker:** Para verificar a acessibilidade de documentos PDF.
    * **WCAG 2 Colour Contrast Checker:** Ajuda a garantir que os contrastes de cores atendam às diretrizes WCAG 2.
    * **APCA Colour Contrast Checker:** Outra ferramenta para verificar o contraste de cores, usando o algoritmo APCA (Accessible Perceptual Contrast Algorithm).
    Normalmente, você navegará até o site da ACHECKS e selecionará a ferramenta desejada para iniciar a utilização.

---

### 6. [AXE - Accessibility engine for automated Web UI testing](https://github.com/dequelabs/axe-core)

* **Propósito:** Um motor de teste de acessibilidade **rápido, seguro e leve** para websites e outras interfaces de usuário baseadas em HTML. Ele é construído para integrar-se perfeitamente com ambientes de teste existentes, permitindo **testes automatizados de acessibilidade** junto com testes funcionais regulares.
* **Como usar:** Primeiro, baixe o pacote executando `npm install axe-core --save-dev`. Após a instalação, inclua o arquivo JavaScript (`axe.min.js`) em cada um dos seus iframes dentro dos seus ambientes de teste usando `<script src="node_modules/axe-core/axe.min.js"></script>`. Finalmente, insira chamadas para `axe.run()` em pontos dos seus testes onde uma nova interface de usuário se torna visível ou exposta. O método `axe.run()` retorna uma promessa que se resolve com os resultados, incluindo quaisquer violações de acessibilidade encontradas. Se houver violações, você pode lançar um erro para fazer o teste falhar ou tratar os erros de outra forma.

---

### 7. [Lighthouse - Google - Auditar acessibilidade](https://developer.chrome.com/docs/lighthouse)

* **Propósito:** Uma ferramenta que audita páginas da web para vários aspectos, incluindo desempenho, **acessibilidade**, Progressive Web Apps e SEO. Ele funciona executando uma série de auditorias e gerando um **relatório** que indica o desempenho da página.
* **Como usar:** Você pode rodar o Lighthouse diretamente no seu navegador Chrome (integrado nas Ferramentas do Desenvolvedor), como uma extensão, ou via linha de comando. Após a execução, o relatório gerado pelo Lighthouse destacará quaisquer problemas de acessibilidade e fornecerá orientações detalhadas sobre como resolvê-los, com referências para entender a importância de cada auditoria e como corrigi-la.

---

### 8. [WebAim - Contrast Checker](https://webaim.org/resources/contrastchecker/)

* **Propósito:** Uma ferramenta projetada para ajudar usuários a determinar se a **relação de contraste** entre as cores de primeiro plano e de fundo atende aos padrões das **Web Content Accessibility Guidelines (WCAG)**. Isso é crucial para garantir que o conteúdo da web seja acessível a indivíduos com deficiência visual.
* **Como usar:** Você precisa inserir uma cor de primeiro plano e uma cor de fundo. Isso pode ser feito digitando valores hexadecimais RGB ou usando o seletor de cores integrado, que também permite ajustar a transparência (Alpha) e a luminosidade. Uma vez que as cores são inseridas, a ferramenta calcula a relação de contraste e indica se ela passa nos requisitos WCAG AA e AAA para texto normal, texto grande e objetos gráficos/componentes de interface do usuário. Há também uma ferramenta de conta-gotas dentro do seletor de cores para extrair valores de cor diretamente da sua tela.

---

### 9. [Acessible Colors - Hex Codes em WCAG](https://accessible-colors.com)

* **Propósito:** Uma ferramenta online para **verificar o contraste de cores** para conformidade com **WCAG 2.0 AA e AAA**. Ela avalia combinações de cores com base nas diretrizes de acessibilidade de contraste da WCAG 2.0.
* **Como usar:** Você insere a cor do seu texto e a cor de fundo. A ferramenta calcula sua relação de contraste e sugere modificações (alterando apenas o valor de luminosidade) para atingir a conformidade, se necessário. A ferramenta tenta modificar apenas o valor de luminosidade das cores para permanecer o mais fiel possível à cor original.

---

### 10. [NVA - Leitor gratuito](https://www.nvaccess.org/)

* **Propósito:** O NVDA, que significa **Non-Visual Desktop Access**, é um **leitor de tela gratuito**, de alta qualidade e globalmente acessível, projetado para indivíduos cegos e com deficiência visual. Seu objetivo é traduzir as informações visuais na tela de um computador verbalmente, tornando a tecnologia acessível para aqueles que não podem ver.
* **Como usar:** Você pode **baixar o NVDA Screen Reader diretamente** do site da NV Access. A NV Access também fornece materiais de treinamento e suporte para ajudar os usuários a começar e a usar o software de forma eficaz.

---

### 11. [Pally - executa testes automatizados de acessibilidade](https://pa11y.org/)

* **Propósito:** Uma interface de linha de comando projetada para carregar páginas web e **identificar problemas de acessibilidade**. É útil para realizar testes únicos em uma página web e oferece várias ferramentas para **testes automatizados de acessibilidade**.
* **Como usar:** Para testes avulsos, você pode usar a ferramenta de linha de comando. Para testes automatizados, o Pa11y oferece:
    * **Pa11y Dashboard:** Uma ferramenta baseada na web que testa páginas web automaticamente diariamente e rastreia melhorias ou regressões ao longo do tempo, ideal para não desenvolvedores.
    * **Pa11y Webservice:** Um webservice baseado em JSON que alimenta o Dashboard, permitindo construir front-ends personalizados ou reutilizar os dados.
    * **Pa11y CI:** Uma ferramenta de linha de comando especificamente voltada para ambientes de integração contínua (CI), que itera sobre uma lista de páginas web para destacar problemas de acessibilidade.

---

### 12. [Funkify - Simula diferentes deficiências no navegador](https://www.funkify.org/)

* **Propósito:** Uma extensão do Chrome projetada para **simular várias deficiências**, permitindo que os usuários experimentem a web e as interfaces sob a perspectiva de pessoas com diferentes habilidades. Isso ajuda especialistas em usabilidade e acessibilidade a entender como usuários com necessidades especiais interagem com websites.
* **Como usar:** Você precisa **instalar a extensão no seu navegador Chrome**. Uma vez instalada, você pode escolher entre uma versão gratuita e uma versão premium. A versão gratuita oferece alguns simuladores, enquanto a premium dá acesso a todos os simuladores, permite ajustá-los e criar suas próprias simulações. Após selecionar a versão desejada, você pode ativar os simuladores para vivenciar diferentes deficiências como cognitivas, disléxicas, motoras e visuais diretamente no seu navegador.