<div align="center">
  <img src="public/uploads/logo.png" alt="Logo de Gabriel Cavalcanti" width="88" />

  <h1>Gabriel Cavalcanti · Portfólio</h1>

  <p><strong>Desenvolvimento Full Stack · Interfaces, APIs e soluções digitais</strong></p>
  <p>Meu espaço para apresentar projetos, trajetória profissional, habilidades e serviços.</p>

  <p>
    <a href="https://gabrielcavalcantidev.com/">Acessar o site</a> ·
    <a href="https://www.linkedin.com/in/gabrielmoc/">LinkedIn</a> ·
    <a href="mailto:gabrielmoc2010@gmail.com">Entrar em contato</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=61DAFB" alt="React 18" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 5" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
    <img src="https://img.shields.io/badge/PHP-SMTP-777BB4?style=flat-square&logo=php&logoColor=white" alt="Backend PHP com envio SMTP" />
  </p>

  <p>🇧🇷 Português · 🇺🇸 English · 🇪🇸 Español</p>
</div>

---

## Sobre o projeto

Este repositório contém o código do meu portfólio profissional: uma aplicação React com TypeScript e navegação por seções, acompanhada de um backend PHP para o envio de mensagens pelo formulário de contato. O front-end é distribuído como arquivos estáticos, e o endpoint de e-mail é executado pela hospedagem. O objetivo é reunir minha experiência em desenvolvimento, apresentar soluções que construí e facilitar o contato para novos projetos.

A interface combina uma identidade visual em tons de azul, tipografia Space Grotesk hospedada localmente, suporte a telas menores e recursos de navegação que ajudam a explorar o conteúdo.

## Funcionalidades

- **Apresentação pessoal:** hero com foto, acesso aos projetos e currículo em PDF.
- **Fundo interativo:** partículas desenhadas em Canvas que reagem ao cursor, acompanhadas de iluminação e animações sutis.
- **Busca rápida:** pesquisa de seções, projetos e tecnologias pela lupa ou pelo atalho `Ctrl + K` / `⌘ + K`, ignorando diferenças de acentuação e maiúsculas.
- **Três idiomas:** português brasileiro, inglês e espanhol, com preferência salva em `localStorage` e atualização do idioma do documento, título e descrição da página.
- **Temas claro e escuro:** alternância pelo cabeçalho, com tema escuro como estado inicial.
- **Trajetória profissional:** abas de tecnologias, experiência, formação e cursos/projetos complementares.
- **Catálogo de projetos:** destaques, filtros por categoria, contador de resultados, imagens, tecnologias e detalhes técnicos.
- **Arquitetura explorável:** visões conceituais clicáveis de Relato, SIGA e Avivia, baseadas nas tecnologias cadastradas.
- **Simulações interativas:** exemplos de solicitações, estoque, carrinho e publicação de conteúdo, com dados fictícios e execução apenas no navegador. Não acessam os sistemas reais, não fazem pagamentos e não persistem dados ao fechar a janela.
- **Formulário com envio pelo servidor:** integração PHP + PHPMailer + SMTP do Gmail, sem abrir um aplicativo de e-mail, com estados de carregamento, sucesso e erro.
- **Validação do contato:** máscara de celular `(99)99999-9999`, validação no cliente e no servidor, campo antispam e limite de tentativas de envio.
- **WhatsApp flutuante:** acesso direto com mensagem preenchida conforme o idioma escolhido, além dos canais de contato e redes sociais.
- **Rodapé:** identificação do autor e ano atualizado automaticamente.
- **Movimento reduzido:** respeito à preferência `prefers-reduced-motion`; o loop de animação do Canvas é suspenso quando a hero sai da área visível ou a aba fica oculta.

> O envio depende da configuração do Gmail no servidor. O endpoint usa credenciais privadas fora de `public_html`, envia para `gabrielmoc2010@gmail.com` e define o e-mail do visitante como endereço de resposta. Publicar somente `dist/` não conclui a primeira ativação: a pasta privada de envio também precisa ser instalada e configurada. Consulte o [guia de configuração do formulário](docs/FORMULARIO-CONTATO.md).

## Tecnologias

| Camada | Tecnologias | Uso no portfólio |
| --- | --- | --- |
| Interface | React 18 + TypeScript | Componentes, estado e tipagem |
| Desenvolvimento e build | Vite 5 + SWC | Servidor local e geração dos arquivos de produção |
| Estilização | Tailwind CSS 3 + CSS | Layout responsivo, temas e animações |
| Tipografia | Space Grotesk em WOFF2 | Fonte variável servida pelo próprio site |
| Componentes de interface | shadcn/ui + Radix UI | Botões, abas, menus, diálogos e outros elementos |
| Ícones | Lucide React | Iconografia da navegação e das seções |
| Navegação | React Router DOM | Rota principal e página de rota não encontrada |
| Pesquisa | cmdk + filtragem local | Interface de busca e seleção de resultados |
| Internacionalização | React Context + JSON | Traduções e gerenciamento do idioma |
| Animação | Canvas 2D + APIs do navegador | Partículas, interação com o cursor e controle de visibilidade |
| Backend de contato | PHP + PHPMailer | Validação e envio de mensagens por SMTP autenticado do Gmail |
| Análise estática | ESLint + TypeScript | Verificação de código e tipos |

As tecnologias citadas nos cards, como Django, PostgreSQL, Go, WordPress e Stripe, pertencem aos projetos apresentados. Não são dependências necessárias para executar este portfólio.

## Autor

**Gabriel Moura de Oliveira Cavalcanti** — Desenvolvedor Full Stack, Recife/PE.

- **Portfólio:** [gabrielcavalcantidev.com](https://gabrielcavalcantidev.com/)
- **GitHub:** [@gabrielmoc](https://github.com/gabrielmoc)
- **LinkedIn:** [gabrielmoc](https://www.linkedin.com/in/gabrielmoc/)
- **E-mail:** [gabrielmoc2010@gmail.com](mailto:gabrielmoc2010@gmail.com)
