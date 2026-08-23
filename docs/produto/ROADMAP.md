# Roadmap — Site Institucional TecnoDreamer

Cada fase corresponde a um ou mais Epics do `PRODUCT_BACKLOG.md` e, quando
aplicável, a uma branch `feature/*` própria.

| Fase | Escopo | Epic(s) | Status |
|---|---|---|---|
| Fase 0 | Auditoria e planejamento | — | ✅ Concluído |
| Fase 1 | Arquitetura e Design System | EPIC-001 | 🔄 Em andamento |
| Fase 2 | Layout global (Header, Footer, Nav, componentes base) | EPIC-001 | ⬜ Pendente |
| Fase 3 | Home | EPIC-002 | ⬜ Pendente |
| Fase 4 | Produtos (geral + 4 páginas individuais) | EPIC-003 | ⬜ Pendente |
| Fase 5 | Empresa e Equipe | EPIC-004 | ⬜ Pendente |
| Fase 6 | Contato + backend do formulário | EPIC-005 | ⬜ Pendente |
| Fase 7 | SEO, acessibilidade e performance | EPIC-006 | ⬜ Pendente |
| Fase 8 | Segurança (headers, CSP, revisão OWASP) | EPIC-006 | ⬜ Pendente |
| Fase 9 | Testes (unitários, integração, E2E) | EPIC-007 | ⬜ Pendente |
| Fase 10 | Deploy e documentação final | EPIC-008 | ⬜ Pendente |

Notas:
- Persistência em banco de dados **não está no roadmap inicial** — só será
  adicionada se a Fase 6 concluir que é realmente necessária (ex.: exigir
  histórico de leads além de e-mail/log).
- Cada fase gera commits pequenos e, quando fizer sentido, um Pull Request
  próprio contra `main`, seguindo o Git Workflow descrito no README.
