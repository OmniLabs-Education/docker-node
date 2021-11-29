## Usar o Dockerfile para criar imagem (Dockerfile) do projeto

```docker build -t node-docker .```

## Rodar um container com a imagem (Dockerfile) do projeto

```docker run --name node-docker-container -p 3000:3000 node-docker```

## Rodando com docker compose

```docker-compose up``` ou ```docker-compose up -d``` para rodar em segundo plano
 
e para ver logs dessa aplicação rodando:

```docker logs docker-app``` 
