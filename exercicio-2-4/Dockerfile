# Stage 1: build
FROM node:22 AS builder

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# Stage 2: imagem final mínima
FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

CMD ["node", "dist/index.js"]