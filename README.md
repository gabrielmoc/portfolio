<div align="center">
  <img src="public/uploads/logo.png" alt="Logo de Gabriel Cavalcanti" width="88" />

  <h1>Gabriel Cavalcanti · Portfólio</h1>

  <p><strong>Desenvolvimento Full Stack · Interfaces, APIs e soluções digitais</strong></p>
  <p>Meu espaço para apresentar projetos, trajetória profissional, habilidades e serviços.</p>

  <p>
    <a href="https://gabrielcavalcanti.tech/">Acessar o site</a> ·
    <a href="https://www.linkedin.com/in/gabrielmoc/">LinkedIn</a> ·
    <a href="mailto:gabrielmoc2010@gmail.com">Entrar em contato</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=61DAFB" alt="React 18" />
    <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 5" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 3" />
  </p>

  <p>🇧🇷 Português · 🇺🇸 English · 🇪🇸 Español</p>
</div>

---

## Sobre o projeto

Este repositório contém o código do meu portfólio profissional: uma aplicação React com TypeScript, navegação por seções e publicação como site estático. O objetivo é reunir minha experiência em desenvolvimento, apresentar soluções que construí e facilitar o contato para novos projetos.

A interface combina uma identidade visual em tons de azul, suporte a telas menores e recursos de navegação que ajudam a explorar o conteúdo.

## Funcionalidades

- **Apresentação pessoal:** hero com foto, acesso aos projetos e currículo em PDF.
- **Fundo interativo:** partículas desenhadas em Canvas que reagem ao cursor, acompanhadas de iluminação e animações sutis.
- **Busca rápida:** pesquisa de seções, projetos e tecnologias pela lupa ou pelo atalho `Ctrl + K` / `⌘ + K`, ignorando diferenças de acentuação e maiúsculas.
- **Três idiomas:** português brasileiro, inglês e espanhol, com preferência salva em `localStorage` e atualização do idioma do documento, título e descrição da página.
- **Temas claro e escuro:** alternância pelo cabeçalho, com tema escuro como estado inicial.
- **Trajetória profissional:** abas de tecnologias, experiência, formação e cursos/projetos complementares.
- **Catálogo de projetos:** imagens, descrições, tecnologias utilizadas e links para as aplicações.
- **Serviços e contato:** apresentação dos serviços, formulário, WhatsApp e redes sociais.
- **Movimento reduzido:** respeito à preferência `prefers-reduced-motion`; o loop de animação do Canvas é suspenso quando a hero sai da área visível ou a aba fica oculta.

> O formulário monta um link `mailto:` com os dados preenchidos e abre o aplicativo de e-mail do visitante. O envio depende desse aplicativo; este repositório não possui um serviço de envio de mensagens no back-end.

## Tecnologias

| Camada | Tecnologias | Uso no portfólio |
| --- | --- | --- |
| Interface | React 18 + TypeScript | Componentes, estado e tipagem |
| Desenvolvimento e build | Vite 5 + SWC | Servidor local e geração dos arquivos de produção |
| Estilização | Tailwind CSS 3 + CSS | Layout responsivo, temas e animações |
| Componentes de interface | shadcn/ui + Radix UI | Botões, abas, menus, diálogos e outros elementos |
| Ícones | Lucide React | Iconografia da navegação e das seções |
| Navegação | React Router DOM | Rota principal e página de rota não encontrada |
| Pesquisa | cmdk + filtragem local | Interface de busca e seleção de resultados |
| Internacionalização | React Context + JSON | Traduções e gerenciamento do idioma |
| Animação | Canvas 2D + APIs do navegador | Partículas, interação com o cursor e controle de visibilidade |
| Análise estática | ESLint + TypeScript | Verificação de código e tipos |

As tecnologias citadas nos cards, como Django, PostgreSQL, Go, WordPress e Stripe, pertencem aos projetos apresentados. Não são dependências necessárias para executar este portfólio.

## Projetos apresentados

Uma seleção das soluções disponíveis na seção de portfólio:

| Projeto | Contexto |
| --- | --- |
| [Relato Temporal](https://relato-temporal-web.vercel.app/) | Site institucional com blog e aplicação de monitoramento de estoque/importações |
| [SIGA](https://siga.igarn.rn.gov.br/) | Gestão de outorgas de recursos hídricos, validações, georreferenciamento e documentos |
| [Avivia](https://avivia-tau.vercel.app/) | Conteúdo institucional, blog, autenticação e gerenciamento de conteúdo |
| [Nobile](https://nobile-three.vercel.app/) | Marketplace de relógios de luxo, pagamentos e área administrativa |
| [JKAI Brindes](https://jkaibrindes.com.br/) | E-commerce com catálogo, checkout, frete e gestão de estoque |
| [Migusmar](https://migusmar.com.br/) | Site institucional com aplicação para acompanhamento de estoque |

O catálogo também inclui Cherry Home Decor, Portal Brasil, Ceno, Marchef, Repórter Lucas Miranda, Agência Triv, Luciana Prazeres, CR Code, MK Fretes e Mudanças e este portfólio.

## Executar localmente

### Pré-requisitos

- Node.js e npm compatíveis com as dependências do projeto.
- Git para clonar o repositório.

Não é necessário configurar banco de dados, credenciais ou arquivo `.env` para a aplicação atual.

### Instalação

```bash
git clone https://github.com/gabrielmoc/portfolio.git
cd portfolio
npm ci
npm run dev
```

O servidor de desenvolvimento está configurado para a porta **8080**. Acesse `http://localhost:8080` ou o endereço informado pelo Vite no terminal caso a porta esteja ocupada.

O repositório contém `package-lock.json` e `bun.lockb`. Os comandos deste README usam npm e o `package-lock.json` para uma instalação reproduzível.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run build:dev` | Gera o build usando o modo `development` |
| `npm run preview` | Serve o build localmente para conferência |
| `npm run lint` | Executa o ESLint |
| `npx tsc --noEmit -p tsconfig.app.json` | Verifica os tipos do código da aplicação |

O build do Vite e a verificação de tipos são etapas separadas. Não há um script de testes automatizados definido no `package.json`.

## Organização do código

```text
portfolio/
├── public/
│   ├── uploads/                 # Imagens, ícones e currículo em PDF
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── about/               # Conteúdo das abas da seção Sobre
│   │   ├── ui/                  # Componentes de interface reutilizáveis
│   │   ├── Header.tsx           # Navegação, pesquisa, idiomas e tema
│   │   ├── HeroBackdrop.tsx     # Animação de partículas em Canvas
│   │   ├── HomeSection.tsx      # Apresentação e ações principais
│   │   ├── AboutSection.tsx     # Perfil, habilidades e trajetória
│   │   ├── ServicesSection.tsx  # Serviços oferecidos
│   │   ├── PortfolioSection.tsx # Catálogo exibido no site
│   │   └── ContactSection.tsx   # Formulário e canais de contato
│   ├── data/                   # Dados profissionais e catálogo auxiliar
│   ├── hooks/                  # Hooks compartilhados
│   ├── i18n/                   # Contexto de idioma e traduções
│   ├── lib/                    # Utilitários
│   ├── pages/                  # Página principal e página 404
│   ├── App.tsx                 # Providers e rotas
│   ├── main.tsx                # Entrada da aplicação
│   └── index.css               # Estilos globais, temas e animações
├── index.html                  # Documento HTML e metadados iniciais
├── package.json                # Dependências e scripts
├── tailwind.config.ts          # Configuração de estilos
└── vite.config.ts              # Configuração do Vite e alias @/
```

A árvore resume os arquivos principais. A composição da página ativa está em `src/pages/Index.tsx`.

## Manutenção do conteúdo

| O que atualizar | Arquivo ou diretório |
| --- | --- |
| Apresentação, foto e ações da hero | `src/components/HomeSection.tsx` |
| Experiência, tecnologias e cursos | `src/data/aboutData.ts` |
| Texto sobre o perfil e formação | `src/components/AboutSection.tsx` e `src/components/about/EducationTab.tsx` |
| Serviços | `src/components/ServicesSection.tsx` |
| Projetos exibidos, imagens, tecnologias e links | Array `projects` em `src/components/PortfolioSection.tsx` |
| Traduções | `src/i18n/messages.json` |
| Idiomas disponíveis e persistência | `src/i18n/LanguageProvider.tsx` |
| E-mail, redes sociais e formulário | `src/components/ContactSection.tsx` |
| Atalho de contato do cabeçalho | `src/components/Header.tsx` |
| Currículo | `public/uploads/curriculo.pdf` |
| Imagens e outros arquivos públicos | `public/uploads/` |
| Metadados iniciais e compartilhamento social | `index.html` |
| Título e descrição atualizados por idioma | `src/i18n/LanguageProvider.tsx` |

**Catálogo:** existe também `src/data/portfolioProjects.ts`, mas o componente ativo define sua própria lista de projetos. Para alterar os cards visíveis, edite `PortfolioSection.tsx`.

**Traduções:** as chaves são os textos em português e os valores são arrays com inglês e espanhol, nessa ordem:

```json
{
  "Ver projetos": ["View projects", "Ver proyectos"]
}
```

Ao adicionar um texto à interface, use `t("Texto em português")` por meio de `useLanguage()` e inclua as traduções no JSON. Quando não há tradução cadastrada, o texto original é exibido.

## Build e publicação

Gere e confira a versão de produção:

```bash
npm run build
npm run preview
```

O Vite produz a pasta `dist/`, incluindo os arquivos públicos necessários ao site. Ela pode ser publicada em uma hospedagem de arquivos estáticos.

Para publicar pelo gerenciador de arquivos de uma hospedagem:

1. Faça um backup da versão publicada.
2. Envie **o conteúdo de dentro de `dist/`** para a pasta pública do domínio, normalmente `public_html/`.
3. Mantenha `index.html` diretamente nessa pasta, junto de `assets/`, `uploads/` e dos demais arquivos gerados.
4. Preserve configurações da hospedagem, como um `.htaccess` existente, ao substituir os arquivos do site.

Não é necessário enviar `node_modules/`, `src/` ou executar um servidor Node.js na hospedagem para servir o build.

A configuração atual usa caminhos a partir da raiz, como `/uploads/`. Publicar em um subdiretório exige revisar esses caminhos e a configuração `base` do Vite. Como a aplicação usa `BrowserRouter`, configure o fallback para `index.html` caso queira que acessos diretos a outras URLs sejam tratados pelo React, incluindo a página 404 da aplicação.

## Autor

**Gabriel Moura de Oliveira Cavalcanti** — Desenvolvedor Full Stack, Recife/PE.

- **Portfólio:** [gabrielcavalcanti.tech](https://gabrielcavalcanti.tech/)
- **GitHub:** [@gabrielmoc](https://github.com/gabrielmoc)
- **LinkedIn:** [gabrielmoc](https://www.linkedin.com/in/gabrielmoc/)
- **E-mail:** [gabrielmoc2010@gmail.com](mailto:gabrielmoc2010@gmail.com)

## Licença

Este repositório não possui um arquivo de licença definido. Para reutilizar o código, o design ou os materiais do portfólio, entre em contato com o autor. Marcas e materiais dos projetos apresentados pertencem aos respectivos titulares.
