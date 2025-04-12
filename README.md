# URL Redirector Service

Este é um serviço Node.js simples construído com Express para manipulação de redirecionamentos de URL com opções configuráveis.

## 📋 Funcionalidades

- URL de redirecionamento configurável
- Opção para preservar o caminho original da URL
- Código de status HTTP personalizável (3xx)
- Configuração baseada em variáveis de ambiente
- Log das URLs originais e de destino

## ⚙️ Configuração

O serviço é configurado através de variáveis de ambiente:

| Variável              | Obrigatório | Padrão               | Descrição |
|-----------------------|-------------|----------------------|-----------|
| `INTERNAL_PORT`       | Não         | 3000                 | Porta em que o servidor escuta |
| `REDIRECT_URL`        | Não         | 'http://localhost:3000' | URL base para redirecionamento |
| `REDIRECT_TYPE`       | Sim         | -                    | Código HTTP para redirecionamento (deve ser 3xx) |
| `COPY_ORIGINAL_PART`  | Não         | false                | Se deve anexar o caminho original à URL de redirecionamento |

## 🚀 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install

3. instale o tsx para rodar o arquivos typescript no nodejs
4. Em seguida roda o programa
    ```bash
   npm install

