# FocusTimer: Aplicativo de Produtividade

![Status](https://img.shields.io/badge/status-finalizado-green)
![GitHub last commit](https://img.shields.io/github/last-commit/PabloBarcellos-0522/FocusTimer?color=blue)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/PabloBarcellos-0522/FocusTimer?color=blue)

<div align="center">
  <img src="https://raw.githubusercontent.com/PabloBarcellos-0522/FocusTimer/main/public/FocusTimer%20Logo.png" alt="Logo do FocusTimer" width="300px"/>
</div>

<p align="center">
  Um aplicativo de produtividade moderno e intuitivo baseado na Técnica Pomodoro, construído com React e Tailwind CSS.
</p>

---

### 🔗 **Aplicação Online: [Acesse o FocusTimer Aqui](https://PabloBarcellos-0522.github.io/FocusTimer/)**

---

<br/>

## 🎨 Processo de Design

A identidade visual e a experiência do usuário do FocusTimer foram cuidadosamente planejadas antes da implementação. O objetivo era criar uma interface limpa, moderna e intuitiva que ajude o usuário a se manter focado.

-   **Esboços Iniciais**: As primeiras ideias e layouts foram rascunhados usando **Excalidraw**, permitindo uma rápida exploração de diferentes estruturas e componentes.
    -   *(Você pode adicionar um link para seus esboços ou imagens do Excalidraw aqui)*
-   **Design Polido (UI/UX)**: Um design mais detalhado e de alta fidelidade foi criado no **Figma**, servindo como o guia definitivo para cores, tipografia e estilo dos componentes.
    -   **Design: [Acesse o design no Figma aqui](http://www.figma.com/design/ojIinc4QpL39jAhtpazVkt)**

<br/>

## ✨ Principais Funcionalidades

O FocusTimer não é apenas um simples cronômetro; é uma ferramenta completa para gerenciar seus ciclos de trabalho e descanso.

-   **Três Modos de Timer**:
    -   **Pomodoro**: Para sessões de trabalho focado.
    -   **Pausa Curta**: Para descansos rápidos.
    -   **Pausa Longa**: Para pausas mais longas após múltiplos ciclos Pomodoro.
-   **Interface Temática**: O esquema de cores do aplicativo muda dinamicamente para refletir o modo atual (Trabalho, Pausa Curta ou Pausa Longa), ajudando o usuário a identificar visualmente o contexto atual.
-   **Timers Customizáveis**: Os usuários podem ajustar a duração (em minutos) para cada um dos três modos através do painel de configurações.
-   **Gerenciador de Tarefas**:
    -   Adicionar, editar e excluir tarefas.
    -   Marcar tarefas como concluídas.
    -   As tarefas são salvas localmente, persistindo mesmo após fechar o navegador.
-   **Configurações Persistentes**: Todas as preferências do usuário, incluindo durações dos timers, configurações de som e tarefas, são salvas automaticamente no `localStorage` do navegador.
-   **Integração de Áudio**:
    -   **Sons de Alarme**: Escolha entre diferentes sons para ser notificado quando um ciclo termina.
    -   **Sons de Tique-taque**: Sons ambientes opcionais (como um relógio ou ruído branco) durante as sessões de foco para melhorar a concentração.
    -   Controle de volume para alarmes e sons ambientes.
-   **Mídia Incorporada**: Inclui um player do YouTube incorporado, perfeito para streams "Lofi" ou outros vídeos de ambiente, com opções para reproduzir/pausar automaticamente o vídeo quando o timer inicia ou para.
-   **Automação**:
    -   Opção para iniciar pausas automaticamente após uma sessão Pomodoro.
    -   Opção para iniciar o próximo Pomodoro automaticamente após uma pausa.
-   **Design Responsivo**: A interface foi projetada para ser agradável e funcional em diferentes tamanhos de tela.

<br/>

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com tecnologias modernas de desenvolvimento web para garantir desempenho, escalabilidade e uma ótima experiência de desenvolvimento.

-   **Frontend**:
    -   [**React 19**](https://react.dev/): Uma biblioteca JavaScript para construir interfaces de usuário.
    -   [**Tailwind CSS**](https://tailwindcss.com/): Um framework CSS utility-first para desenvolvimento rápido de UI.
    -   [**Vite**](https://vitejs.dev/): Uma ferramenta de build de frontend de nova geração que proporciona uma experiência de desenvolvimento extremamente rápida.
-   **Gerenciamento de Estado**:
    -   React Hooks (`useState`, `useEffect`, `useRef`) para gerenciamento de estado local e a nível de componente.
-   **Implantação (Deploy)**:
    -   [**gh-pages**](https://www.npmjs.com/package/gh-pages): Uma maneira simples de implantar a aplicação no GitHub Pages.
-   **Qualidade de Código**:
    -   [**ESLint**](https://eslint.org/): Para identificar e corrigir problemas no código JavaScript.

<br/>

## 📂 Estrutura do Projeto

O projeto está organizado em uma estrutura de pastas clara e lógica:

```
/
├── public/               # Recursos estáticos (logos, ícones)
├── src/
│   ├── assets/           # Arquivos de áudio (alarmes, sons de tique-taque)
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── SettingsInputs/ # Componentes específicos do painel de configurações
│   │   ├── Button.jsx
│   │   ├── Icons.jsx
│   │   ├── SettingsFrame.jsx
│   │   ├── Task.jsx
│   │   ├── TaskManager.jsx
│   │   └── Timer.jsx
│   ├── styles/           # Arquivos CSS globais
│   ├── App.jsx           # Componente principal da aplicação (gerenciamento de estado)
│   └── main.jsx          # Ponto de entrada da aplicação React
├── .gitignore
├── index.html            # Arquivo HTML principal
├── package.json          # Dependências e scripts do projeto
├── tailwind.config.js    # Configuração do Tailwind CSS
└── vite.config.js        # Configuração do Vite
```

<br/>

## ⚙️ Como Executar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/pabloxt14/FocusTimer.git
    cd FocusTimer
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).

<br/>

## 📦 Implantação (Deploy)

O projeto está configurado para fácil implantação no GitHub Pages.

Para implantar a sua versão, execute o seguinte comando:

```bash
npm run deploy
```

Este comando executará automaticamente o script `predeploy` (que executa `npm run build`) para gerar os arquivos de produção na pasta `dist` e, em seguida, publicá-los na branch `gh-pages` do seu repositório.
