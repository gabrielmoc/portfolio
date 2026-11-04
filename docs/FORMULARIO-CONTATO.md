# Ativar o formulário na Hostinger

O formulário envia uma requisição ao endpoint PHP `/api/contact.php`. O PHP usa SMTP autenticado do Gmail para entregar a mensagem a `gabrielmoc2010@gmail.com`, sem abrir o aplicativo de e-mail do visitante.

O remetente é o próprio Gmail configurado. O endereço do visitante fica no campo **Responder para**, permitindo responder diretamente a ele. Não há resposta automática enviada ao visitante.

## 1. Preparar a conta Google

Na conta `gabrielmoc2010@gmail.com`, ative a verificação em duas etapas e crie uma **senha de app** específica para este portfólio:

- [Instruções oficiais do Google](https://support.google.com/accounts/answer/185833?hl=pt-BR)
- [Criar senha de app](https://myaccount.google.com/apppasswords)

Use a senha de app, nunca a senha comum da conta. Não envie a senha no chat, não a coloque em arquivos React, variáveis `VITE_*` ou no Git. Se a conta não oferecer senhas de app, será necessário escolher outro remetente ou serviço SMTP antes de ativar.

## 2. Publicar os arquivos

Selecione PHP 8.2 ou superior na hospedagem, com OpenSSL habilitado. O envio também depende de a hospedagem permitir conexão SMTP com `smtp.gmail.com:465`.

Execute `npm run build` e envie **o conteúdo de `dist/`** para `public_html`. O build já inclui `api/contact.php`.

Envie também a pasta `server/portfolio-mail` para o diretório **imediatamente acima de `public_html`**, como uma pasta irmã:

```text
pasta-do-dominio/
├── public_html/
│   ├── index.html
│   ├── assets/
│   ├── uploads/
│   └── api/
│       └── contact.php
└── portfolio-mail/
    ├── .htaccess
    ├── config.example.php
    ├── config.php                 # Criado por você apenas no servidor
    └── PHPMailer/
        ├── PHPMailer.php
        ├── SMTP.php
        ├── Exception.php
        ├── LICENSE
        └── NOTICE.md
```

**Não coloque `portfolio-mail` dentro de `public_html`.** No gerenciador de arquivos, escolha o acesso aos arquivos da hospedagem que permite visualizar o diretório pai. Se o acesso disponível estiver restrito a `public_html`, peça acesso ao diretório pai ou configure `PORTFOLIO_MAIL_DIR` no servidor para outro diretório privado; não mova a senha para a área pública.

## 3. Configurar a senha no servidor

Copie `config.example.php` para `config.php`, dentro da pasta privada `portfolio-mail`. Edite apenas o campo `password`, inserindo a senha de app gerada. Os endereços de remetente/destinatário e os domínios permitidos já estão preenchidos.

O usuário PHP da hospedagem precisa conseguir ler esses arquivos e escrever na pasta privada: o endpoint cria `rate-limit.json` para limitar tentativas. Não use permissões `777`. Esse arquivo guarda horários e identificadores derivados do IP, não o conteúdo das mensagens.

O arquivo `.htaccess` é uma proteção adicional para Apache/LiteSpeed; não substitui a instalação fora da pasta pública.

## 4. Conferir o envio

1. Abra `https://gabrielcavalcantidev.com/` e preencha o formulário com seus próprios dados e uma mensagem de teste identificada como tal.
2. Clique em **Enviar**. O botão deve mostrar **Enviando…** e depois a confirmação.
3. Confira a caixa de entrada e a pasta de spam de `gabrielmoc2010@gmail.com`.
4. Ao responder à mensagem, confira se o destinatário é o e-mail informado no formulário.

A confirmação significa que o servidor SMTP aceitou a mensagem; filtros e regras do Gmail ainda podem direcioná-la ao spam. A entrega real só estará validada após esse teste com as credenciais configuradas.

## Comportamento e diagnóstico

- Enquanto envia, os campos e o botão ficam desabilitados para impedir cliques repetidos.
- Os campos só são limpos depois da confirmação do servidor. Em caso de erro, o conteúdo é preservado.
- Se a conexão cair ou expirar, o formulário informa que não conseguiu confirmar o envio. Não há repetição automática, para evitar mensagens duplicadas.
- Sem configuração privada ou com falha de autenticação, retorna erro, nunca uma confirmação falsa.
- Há validação no servidor, campo antispam e limites de 5 tentativas por IP em 15 minutos e 50 tentativas totais por hora.
- A interface tem mensagens em português, inglês e espanhol.
- `405` ao abrir `/api/contact.php` diretamente é esperado: o endpoint aceita somente `POST`.
- `503` no envio: confira o caminho privado, a senha de app, as permissões e a conexão SMTP. Consulte os logs de PHP da hospedagem. Não habilite diagnóstico SMTP público.
- `403`: confira se o domínio acessado está em `allowed_origins`.
- `429`: aguarde antes de tentar novamente.
- Se você mudar a senha principal da conta Google, pode ser necessário gerar uma nova senha de app.

## Conferência local

`npm run dev` e `npm run preview` executam o front-end; **não executam PHP**. Para uma conferência completa local, é preciso PHP instalado e uma configuração privada de teste. Depois de gerar o build, use:

```bash
PORTFOLIO_MAIL_DIR="$PWD/server/portfolio-mail" php -S localhost:8081 -t dist
```

Crie o `config.php` local a partir do exemplo e inclua `http://localhost:8081` em `allowed_origins` **somente na configuração local**. Acesse `http://localhost:8081`. Essa configuração envia e-mails reais se usar credenciais reais; limite-se a mensagens próprias de teste.

As credenciais locais e o arquivo de limites estão ignorados pelo Git. O build não copia a pasta `server/` para `dist/`.

## Biblioteca utilizada

PHPMailer 7.1.1, arquivos originais do [repositório oficial](https://github.com/PHPMailer/PHPMailer/tree/v7.1.1), com licença incluída. Não é necessário Composer na hospedagem para usar este pacote.
