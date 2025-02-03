# Usar uma imagem oficial do Python
FROM python:3.9-slim

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o requirements.txt e instalar as dependências
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar o código do backend
COPY backend/app ./app

# Expôr a porta 5000 (Flask)
EXPOSE 5000

# Iniciar a aplicação Flask com PYTHONPATH
CMD PYTHONPATH=/app python -m app.main
