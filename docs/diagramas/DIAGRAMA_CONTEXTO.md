# Diagrama de Contexto

```mermaid
graph TB
    Visitante((Visitante / Lead))
    Site[Site Institucional TecnoDreamer<br/>Next.js App Router]
    API[Route Handler /api/contato]
    Log[(Logs da aplicação)]
    SEO[Motores de busca /<br/>redes sociais]

    Visitante -->|navega, lê conteúdo| Site
    Visitante -->|envia formulário de contato| Site
    Site -->|valida e processa| API
    API -->|registra tentativa sem dados sensíveis| Log
    Site -->|metadata, sitemap, robots| SEO
    SEO -->|indexa e compartilha| Visitante
```

O site institucional é o único sistema desta fase. Não há integração com os
produtos (Gestão Pet, PetConnect, Marketing Analytics) — eles são apenas
apresentados como conteúdo. Não há banco de dados nesta fase inicial.
