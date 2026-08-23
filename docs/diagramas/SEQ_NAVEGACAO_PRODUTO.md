# Sequência — Navegação até um produto

```mermaid
sequenceDiagram
    actor V as Visitante
    participant H as Home (/)
    participant P as /produtos
    participant PD as /produtos/[produto]

    V->>H: Acessa a Home
    H-->>V: Renderiza hero + cards de produtos
    V->>H: Clica em "Conhecer produto" (ex.: PetConnect)
    H->>PD: Navega via <Link href="/produtos/petconnect">
    PD-->>V: Renderiza hero do produto, problema, solução, status, FAQ

    alt Visitante prefere ver todos os produtos primeiro
        V->>P: Clica em "Produtos" no menu
        P-->>V: Lista todos os produtos
        V->>PD: Clica no produto desejado
        PD-->>V: Renderiza página do produto
    end
```
