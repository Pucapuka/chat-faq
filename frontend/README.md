Ótima ideia. Vale a pena versionar desde o início.

# Chat FAQ Assistant

Um assistente conversacional desenvolvido com **React** e **n8n**, projetado para responder perguntas frequentes (FAQ) de forma automatizada utilizando um modelo de linguagem local. Quando uma pergunta não puder ser respondida pela base de conhecimento, o sistema coleta o e-mail do usuário e encaminha a solicitação para a equipe de suporte.

O projeto foi desenvolvido com foco em **arquitetura modular**, **boas práticas de desenvolvimento** e **integração com ferramentas de automação**, permitindo sua evolução para soluções mais avançadas como RAG (Retrieval-Augmented Generation), bancos vetoriais e agentes inteligentes.

---

# Objetivos

* Desenvolver uma interface moderna para atendimento ao cliente.
* Integrar o frontend com workflows do n8n.
* Utilizar um modelo de linguagem local via HTTP.
* Responder automaticamente perguntas existentes na FAQ.
* Encaminhar dúvidas não respondidas para o suporte.
* Coletar o e-mail do usuário para retorno posterior.
* Manter uma arquitetura desacoplada e de fácil manutenção.

---

# Tecnologias

### Frontend

* React
* Vite
* JavaScript
* CSS3

### Backend / Automação

* n8n
* HTTP Request
* Webhook
* Gmail
* PostgreSQL

### Inteligência Artificial

* Modelo de linguagem local
* API HTTP (compatível com OpenAI)

### Infraestrutura

* Docker
* Docker Compose
* Vercel

---

# Arquitetura

```text
                Frontend (React)
                        │
                        │
                        ▼
                  Webhook (n8n)
                        │
                        ▼
              Consulta da FAQ
                        │
          ┌─────────────┴─────────────┐
          │                           │
          ▼                           ▼
     Resposta encontrada      Resposta inexistente
          │                           │
          ▼                           ▼
Modelo Local (LLM)         Solicita e-mail do usuário
          │                           │
          ▼                           ▼
Resposta ao frontend        Envia e-mail ao suporte
                                        │
                                        ▼
                           Equipe responde posteriormente
```

---

# Estrutura do Projeto

```text
chat-faq/

├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ChatWindow.jsx
│   │   ├── Header.jsx
│   │   ├── InputArea.jsx
│   │   ├── Message.jsx
│   │   └── Typing.jsx
│   │
│   ├── config/
│   │   └── config.js
│   │
│   ├── hooks/
│   │   └── useChat.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── utils/
│   │   └── session.js
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── package.json
└── README.md
```

---

# Fluxo da Conversa

```text
Usuário

↓

Envia pergunta

↓

Webhook n8n

↓

Consulta FAQ

↓

Pergunta encontrada?

├── Sim
│      ↓
│  Modelo Local
│      ↓
│  Resposta ao usuário
│
└── Não
       ↓
Solicita e-mail

↓

Usuário informa e-mail

↓

n8n envia e-mail ao suporte

↓

Mensagem de confirmação
```

---

# Comunicação

O frontend envia uma requisição POST para o webhook do n8n.

### Requisição

```json
{
    "session": "550e8400-e29b-41d4-a716-446655440000",
    "message": "Como faço meu cadastro?"
}
```

### Resposta

```json
{
    "message": "Você pode realizar seu cadastro clicando em 'Criar Conta'."
}
```

---

# Session ID

Cada usuário recebe automaticamente um identificador único (UUID) armazenado no navegador.

Exemplo:

```text
550e8400-e29b-41d4-a716-446655440000
```

Esse identificador permite manter o contexto da conversa sem exigir autenticação.

---

# Funcionalidades Implementadas

* Interface de chat.
* Componentização em React.
* Scroll automático.
* Indicador de "Digitando...".
* Bloqueio de múltiplos envios simultâneos.
* Session ID persistente.
* Comunicação desacoplada através de `services/api.js`.

---

# Funcionalidades Planejadas

* Integração completa com n8n.
* Integração com modelo de linguagem local.
* FAQ armazenada em PostgreSQL.
* Histórico de conversas.
* Encaminhamento automático para Gmail.
* Painel administrativo da FAQ.
* Upload de arquivos.
* Suporte a Markdown.
* Streaming de respostas.
* Tema escuro.
* Avaliação das respostas.
* Logs de atendimento.

---

# Configuração

Instale as dependências:

```bash
npm install
```

Execute em modo de desenvolvimento:

```bash
npm run dev
```

Configure o arquivo `.env`:

```env
VITE_API_URL=http://localhost:5678/webhook/chat
```

---

# Deploy

O frontend pode ser publicado facilmente utilizando o Vercel.

Após o deploy, basta alterar a variável de ambiente:

```env
VITE_API_URL=https://SEU-ENDERECO/webhook/chat
```

---

# Roadmap

* [x] Estrutura inicial do frontend
* [x] Componentização
* [x] Gerenciamento de mensagens
* [x] Session ID
* [x] Camada de serviços
* [ ] Integração com n8n
* [ ] Modelo de linguagem local
* [ ] FAQ em PostgreSQL
* [ ] Encaminhamento para Gmail
* [ ] Persistência de histórico
* [ ] Painel administrativo
* [ ] Deploy completo

---

# Licença

Este projeto está licenciado sob a licença MIT.

Sinta-se à vontade para estudar, modificar e utilizar este projeto como base para aplicações próprias.

---

## Autor

**Paulo Anderson Gonçalves de Lima**

* GitHub: [https://github.com/Pucapuka](https://github.com/Pucapuka)
* LinkedIn: [https://linkedin.com/in/dev-pauloandersonlima](https://linkedin.com/in/dev-pauloandersonlima)

---

Este projeto tem como objetivo servir tanto como uma solução prática de atendimento automatizado quanto como um laboratório de estudos sobre React, n8n, automação de processos e integração com modelos de linguagem locais.

