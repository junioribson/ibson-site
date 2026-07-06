# Item do Wikidata, Ibson Junior (pronto para publicar)

> Objetivo: criar uma entidade estruturada e neutra para "Ibson Junior" no Wikidata,
> uma das principais fontes que o Google (Knowledge Graph) e as IAs (ChatGPT, Perplexity,
> Gemini) usam para saber quem é a entidade. Ajuda a desambiguar do homônimo (ex-jogador)
> e a formar, com o tempo, um painel de conhecimento. Não garante painel; é um sinal forte.

## Antes de começar (importante)
- É preciso uma conta na Wikimedia (gratuita). O Ibson cria e publica; o Claude não faz login.
- Itens de pessoas vivas com **só fontes próprias** podem ser contestados/apagados (política de
  notabilidade). Por isso, **anexe as referências independentes** listadas abaixo em cada
  declaração que der. Isso sustenta o item. O PR (matérias em portais) reforça com o tempo.
- Nada de dados falsos ou inflados. Só o que é público e verdadeiro.

## Passo a passo
1. Entrar em https://www.wikidata.org e criar/logar a conta.
2. Menu lateral, "Criar um novo item" (Create a new item).
3. Preencher **Label**, **Description** e **Aliases** (tabela abaixo), em pt, en e es.
4. Adicionar as **declarações (statements)**: clicar "add statement", digitar o NOME da
   propriedade (o Wikidata autocompleta o código P...), escolher o valor.
5. Em cada declaração relevante, clicar no ícone de referência e adicionar a URL de referência.
6. Salvar. O item fica no ar na hora; a ingestão pelo Google/IAs leva de semanas a meses.

## Labels / Description / Aliases
| Idioma | Label | Description |
|---|---|---|
| pt | Ibson Junior | executivo brasileiro de conteúdo, liderança e comunicação |
| en | Ibson Junior | Brazilian content, leadership and communication executive |
| es | Ibson Junior | ejecutivo brasileño de contenido, liderazgo y comunicación |

**Aliases (also known as), nos 3 idiomas:** Ibson Lima dos Santos Junior · Ibson Júnior · Ibson

## Declarações (statements)
Digite o nome da propriedade; o Wikidata sugere o código. Valores:

| Propriedade (nome) | Valor | Observação |
|---|---|---|
| instance of (P31) | human | obrigatório para pessoa |
| sex or gender (P21) | male | |
| country of citizenship (P27) | Brazil | |
| occupation (P106) | executive; communicator; writer | adicione uma por vez |
| employer (P108) | Futbol Sites | só se existir item; senão deixe |
| birth name (P1477) | Ibson Lima dos Santos Junior | |
| official website (P856) | https://ibsonjunior.com.br/ | referência de si mesma |
| X username (P2002) | IbsonJunior | (sem @) |
| LinkedIn personal profile ID | ibson-junior | busque "LinkedIn" na lista de propriedades |
| image (P18) | (opcional) | só se houver foto com licença livre no Wikimedia Commons |

> Não preencha data de nascimento a menos que queira torná-la pública.
> Não invente employer/itens que não existam; deixe em branco em vez de errar.

## Referências para anexar (independentes ajudam mais)
- Site oficial: https://ibsonjunior.com.br/
- LinkedIn: https://www.linkedin.com/in/ibson-junior/
- X: https://x.com/IbsonJunior
- Créditos em veículos de autoridade (mencionam o nome):
  - https://br.bolavip.com/staff
  - https://www.antenadosnofutebol.com.br/staff
  - https://somosfanaticos.fans/br/staff
- Notícia independente (venda da Futmarketing, Yahoo Finance):
  - https://es-us.finanzas.yahoo.com/noticias/compra-millonaria-gigante-medios-marketing-090600505.html

## Impacto esperado e prazo
- **Desambiguação** do homônimo e nó de entidade que o Google/IAs podem ingerir.
- **GEO:** melhora como as IAs descrevem e citam o Ibson (elas leem Wikidata direto).
- **Prazo:** item no ar imediato; ingestão externa de semanas a meses, sem garantia de painel.
- **Fortalece com o tempo:** cada matéria de PR nova = mais uma referência independente, o que
  consolida o item e a entidade.

## Depois de publicado
Avisar o Claude a URL do item (Q...) para: (1) opcionalmente adicionar ao `sameAs` do site,
fechando o ciclo entidade-site-Wikidata; (2) registrar no HANDOFF.
