# Frontend - React
FROM node:16

# Define a pasta onde o app vai residir
WORKDIR /app

# Copiar arquivos de dependências
COPY frontend/package.json frontend/package-lock.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY frontend/ ./

# Construir o projeto React
RUN npm run build

# Expor a porta para o React
EXPOSE 3000

# Rodar o React no ambiente de produção
CMD ["npm", "start"]
