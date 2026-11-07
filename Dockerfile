# syntax=docker/dockerfile:1

# Imagem de produção do site (Next.js em modo standalone).
# O `next/font/google` baixa as fontes durante o build, então o build precisa
# de acesso à internet.

FROM node:24-alpine AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# --- Dependências (camada reaproveitada enquanto o lockfile não muda) ------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# --- Build -----------------------------------------------------------------
FROM base AS builder
# NEXT_PUBLIC_* é embutida no código durante o build: para trocar a URL
# pública, reconstrua a imagem com outro valor.
ARG NEXT_PUBLIC_SITE_URL=http://localhost:3000
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
ENV NEXT_OUTPUT=standalone
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# --- Runtime ---------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

# O standalone não copia public/ nem .next/static por conta própria.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
