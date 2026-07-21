# 🤖 Chatbot IA com n8n + React + PostgreSQL

Um chatbot inteligente desenvolvido com **React**, **n8n**, **PostgreSQL** e **Docker**, projetado para servir como base para agentes de IA, automações e integrações com modelos de linguagem (LLMs).

---

## 📌 Visão Geral

Este projeto fornece uma arquitetura moderna para construção de chatbots baseados em IA.

Atualmente o sistema possui:

- Interface web desenvolvida em React
- Backend orquestrado pelo n8n
- PostgreSQL para persistência de dados
- Ambiente totalmente containerizado com Docker
- Comunicação entre frontend e backend via Webhook

A estrutura foi preparada para futura integração com:

- OpenAI
- Ollama
- LM Studio
- OpenRouter
- Claude
- Gemini
- Memória conversacional
- RAG (Retrieval-Augmented Generation)
- Banco vetorial

---

## 🏗 Arquitetura

```
                +------------------+
                |     React UI     |
                +---------+--------+
                          |
                          |
                    /api/chat
                          |
                    Vite Proxy
                          |
                          ▼
                +------------------+
                |       n8n        |
                | Workflow Chatbot |
                +---------+--------+
                          |
          +---------------+----------------+
          |                                |
          ▼                                ▼
   PostgreSQL                      Modelos de IA
                              (OpenAI / Ollama / etc.)
```

---

## 📁 Estrutura do Projeto

```
chatbot-n8n/

├── frontend/
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── ...
│
├── n8n/
│   ├── data/
│   └── workflows/
│
├── postgres/
│   ├── data/
│   └── init/
│
├── docker-compose.yml
├── .env
└── README.md
```

---

## 🚀 Tecnologias

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend

- n8n

### Banco de Dados

- PostgreSQL 17

### Infraestrutura

- Docker
- Docker Compose

---

## ⚙️ Requisitos

- Docker
- Docker Compose

Não é necessário instalar Node.js ou PostgreSQL localmente.

---

## ▶️ Executando o projeto

Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/chatbot-n8n.git

cd chatbot-n8n
```

Suba os containers:

```bash
docker compose up -d --build
```

---

## 🌐 Serviços

| Serviço | URL |
|----------|-----|
| Frontend | http://localhost:5173 |
| n8n | http://localhost:5678 |
| pgAdmin | http://localhost:8080 |

---

## 🔐 Variáveis de Ambiente

Arquivo `.env`

```env
TZ=America/Sao_Paulo

N8N_PORT=5678
N8N_HOST=localhost
WEBHOOK_URL=http://localhost:5678/

POSTGRES_DB=chatbot
POSTGRES_USER=n8n
POSTGRES_PASSWORD=senha123

PGADMIN_EMAIL=admin@admin.com
PGADMIN_PASSWORD=admin123
```

---

## 📦 Containers

O projeto executa quatro containers:

- chatbot-frontend
- n8n
- postgres
- pgadmin

---

## 🔄 Fluxo da Aplicação

```
Usuário

↓

React

↓

/api/chat

↓

n8n Webhook

↓

Workflow

↓

IA

↓

Resposta

↓

Frontend
```

---

## 📌 Roadmap

- [x] Estrutura inicial
- [x] Dockerização
- [x] Integração React ↔ n8n
- [x] PostgreSQL
- [ ] Histórico de conversas
- [ ] Memória de longo prazo
- [ ] Integração com OpenAI
- [ ] Integração com Ollama
- [ ] Upload de arquivos
- [ ] RAG
- [ ] Banco Vetorial
- [ ] Autenticação
- [ ] Painel Administrativo

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.

---

## 👨‍💻 Autor

Paulo Anderson Gonçalves de Lima

- GitHub: https://github.com/Pucapuka
- LinkedIn: https://linkedin.com/in/dev-pauloandersonlima