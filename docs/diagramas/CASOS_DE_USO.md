# Casos de Uso

```mermaid
graph LR
    Visitante((Visitante))

    UC1[Navegar pelo site]
    UC2[Conhecer a empresa]
    UC3[Conhecer um produto]
    UC4[Conhecer a equipe]
    UC5[Enviar mensagem de contato]
    UC6[Ler política de privacidade / termos]

    Visitante --> UC1
    Visitante --> UC2
    Visitante --> UC3
    Visitante --> UC4
    Visitante --> UC5
    Visitante --> UC6

    UC1 -.include.-> UC3
    UC5 -.include.-> UC6
```

## UC5 — Enviar mensagem de contato (detalhado)

**Ator primário:** Visitante
**Pré-condição:** Visitante está em `/contato`.
**Fluxo principal:**
1. Visitante preenche nome, e-mail, empresa (opcional), telefone (opcional),
   assunto, produto de interesse e mensagem.
2. Visitante marca o consentimento de privacidade.
3. Visitante envia o formulário.
4. Sistema valida no client (feedback imediato) e reenvia ao servidor.
5. Servidor revalida todos os campos, sanitiza e verifica rate limit.
6. Servidor confirma sucesso; UI exibe mensagem de confirmação.

**Fluxos alternativos:**
- 4a. Campo obrigatório inválido → erro específico exibido, sem envio.
- 5a. Payload malicioso/malformado → servidor rejeita com erro genérico.
- 5b. Limite de envios excedido → servidor responde 429.
