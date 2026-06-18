# Stage 1: build
FROM node:22 AS builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Stage 2: imagem final mínima
FROM alpine:latest

WORKDIR /app

COPY --from=builder /app/dist.txt .

CMD ["cat", "dist.txt"]