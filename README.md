# Hinário do Maestro

Site oficial do Hinário do Maestro - Aprenda a Reger com Franqueza e Autoridade.

## Configuração para deploy no EasyPanel

### 1. Requisitos

- EasyPanel instalado no servidor
- Um projeto criado no EasyPanel
- Repositório Git configurado

### 2. Estrutura do Projeto

```
hinario-do-maestro/
├── assets/
│   ├── depoimentos/
│   ├── expert/
│   └── garantia/
├── index.html
├── package.json
├── server.js
└── .gitignore
```

### 3. Configuração no EasyPanel

1. No EasyPanel, crie um novo serviço do tipo **App**
2. Configure o repositório com:

   - **Owner**: seu-usuario-github
   - **Repository**: hinario-do-maestro
   - **Branch**: main (ou master)
   - **Build Path**: / (raiz do projeto)

3. Configure a build:

   - **Base Docker Image**: Node 20
   - **Build Command**: `npm install`
   - **Processo Principal**: Nome: `web`, Comando: `npm start`

4. Adicione um domínio:
   - Configure o domínio desejado
   - Ative a opção de HTTPS

### 4. Script de Deployment

O script de deployment padrão usado pelo EasyPanel para este projeto é:

```
cd /code
npm install
supervisorctl restart nodejs-server
```

### 5. Monitoramento

O EasyPanel fornece monitoramento de:

- CPU
- Memória
- Tráfego de Rede

## Desenvolvimento Local

Para executar o projeto localmente:

```bash
# Instalar dependências
npm install

# Iniciar em modo de desenvolvimento
npm run dev
```

O servidor será iniciado na porta 80 ou na definida pela variável de ambiente PORT.

## Performance e Segurança

Este projeto inclui:

- Compressão Brotli/Gzip para arquivos estáticos
- Headers de segurança adequados
- Cache configurado para otimização
- Logging básico de requisições

## Manutenção

Para atualizar o site, basta fazer push para o repositório. O EasyPanel detectará as mudanças e fará o deploy automaticamente.

---

© 2025 Hinário do Maestro. Todos os direitos reservados.
