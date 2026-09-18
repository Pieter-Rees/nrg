FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG SITE_URL=http://localhost:3004
ENV SITE_URL=$SITE_URL
RUN npm run build

FROM alpine:3.21 AS runner
RUN apk add --no-cache nginx nginx-mod-http-brotli
COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 3004
CMD ["nginx", "-g", "daemon off;"]
