# AGENTS.md — Sintonia Interiores

Instruções para agentes (DSH / superagente de sessão) que trabalharem neste repositório.
Leia antes de alterar qualquer coisa. Em conflito entre uma issue e este arquivo, **este arquivo vence** —
avise na issue e peça confirmação em vez de contrariar as regras.

## O que é

Landing page institucional do estúdio **Sintonia Interiores** (projetos integradores do curso).
Página única, estática, em português do Brasil.

Publicação: `push` em `main` → GitHub Actions → Pages. O domínio canônico é
<https://sintoniainteriores.rreis.app/> (definido em `canonical`, `og:url`, `sitemap.xml` e `robots.txt`);
o endereço `agentehermesreis.github.io/sintonia-interiores` também responde. O domínio próprio está
configurado nas Settings do Pages — **não existe `CNAME` no repositório**, então não crie um por conta própria.

## Stack e restrições

- **HTML + CSS + JS puros.** Sem framework, sem bundler, sem `package.json`, sem etapa de build.
- Não introduza dependências, CDNs novos, pré-processadores ou frameworks (React, Tailwind, Bootstrap…).
- Não converta a página em SPA nem fragmente em múltiplos arquivos HTML sem pedido explícito.
- Fontes vêm do sistema (`Century Gothic` / `Poppins` / `Inter`) — não adicione webfonts externas.
- O site precisa continuar funcionando aberto direto do disco (`file://`), sem servidor.

## Estrutura

```
index.html                    página única — todas as seções, na ordem abaixo
styles.css                    estilos, cores e tipografia (variáveis no :root)
script.js                     menu, animações de scroll e formulário demonstrativo
assets/                       logo, fotos da equipe e imagens dos projetos
_headers                      cache e cabeçalhos de segurança (Cloudflare/Netlify; GitHub Pages ignora)
robots.txt, sitemap.xml       indexação
.nojekyll                     impede o Jekyll de processar o site no Pages — não remova
.github/workflows/pages.yml   deploy automático a cada push em main
```

Seções de `index.html`, delimitadas por comentários — mantenha os marcadores:

`FAIXA` → `QUEM SOMOS` → `MISSÃO` → `NOSSA HISTÓRIA` → `O QUE NOS MOVE` →
`NOSSOS PROJETOS` → `GALERIA` → `CONTATO`

## Identidade visual (não mexer sem pedido explícito)

Cores definidas em `:root` no topo de `styles.css`, tiradas do slide master da apresentação:

- creme `#F4EFE8` (`--bg`), areia `#E1D5C8` (`--sand`), cobre `#A65F3E` (`--accent`), preto `#141210` (`--ink`)
- tipografia geométrica para títulos (`--display`), sans legível para corpo (`--text`)

Alterar paleta, tipografia, espaçamento global ou a estrutura das seções é **mudança de design**:
exige pedido explícito na issue e descrição do antes/depois.

## Como validar (não existe suíte de testes)

Não há testes automatizados. Toda entrega precisa de verificação declarada:

1. Abrir `index.html` no navegador (duplo clique já serve).
2. Conferir em **duas larguras**: desktop (~1280 px) e celular (~390 px).
3. Console do navegador sem erro; menu abre e fecha; âncoras do menu levam à seção certa.
4. Imagens carregando (nenhum ícone quebrado) e textos sem sobreposição/corte.
5. `git diff --check` sem espaços em branco problemáticos.
6. Se mexeu em `sitemap.xml`, `robots.txt` ou no canonical: URLs coerentes com o domínio publicado.

Se não foi possível validar algo, diga isso na issue em vez de afirmar que passou.

## Deploy

- `push` em `main` dispara `.github/workflows/pages.yml` → GitHub Pages.
- Não crie branch de deploy nem mude o workflow sem pedido; não habilite build.
- Não altere `CNAME` (quando existir) nem `Settings → Pages`.

## Fluxo de trabalho do agente

1. Ler a issue inteira e o(s) arquivo(s) envolvidos **antes** de editar.
2. Reproduzir o problema ou localizar o trecho exato citado.
3. Fazer a menor mudança que resolve — nada de refatoração oportunista, renomeação em massa
   ou "limpeza" fora do escopo da issue.
4. Validar conforme a seção acima.
5. Escrever na issue: **o que mudou** (arquivos + por quê), **como validou** (o que olhou, em quais larguras)
   e qualquer limitação. Depois aplicar `watch_ack`.

Tamanho da entrega:

- Texto, cor de um elemento, imagem, ajuste de CSS localizado → pode ir direto para `main`.
- Mudança estrutural (nova seção, novo componente, alteração de layout, `script.js`) → abrir **PR**
  e explicar o racional; não commitar direto em `main`.

## Commits

- Mensagem em **português**, imperativo, curta, sem prefixo convencional (`feat:`, `fix:`).
  Siga o histórico: "Justifica o texto da missão", "Adiciona cabeçalhos de cache e segurança".
- Um commit por assunto. Nunca `--force`, nunca reescrever histórico publicado, nunca commitar `.git`.

## Conteúdo e tom

- Português do Brasil, tom institucional e sóbrio; sem emoji, sem exclamações publicitárias.
- Não invente fatos, números, prêmios, clientes ou depoimentos. Se faltar informação, pergunte na issue.
- **Dados de contato do rodapé são fictícios** (e-mail e base). Não os divulgue como reais;
  se a issue pedir dados verdadeiros, peça os dados ao responsável.
- O formulário é **demonstrativo**: valida e mostra mensagem, mas não envia nada.
  Não afirme que "mensagens chegam" nem conecte serviços de terceiros sem pedido explícito.
- Imagens de `assets/` são perspectivas/painéis dos projetos integradores — mantenha as legendas
  e não substitua por banco de imagens.

## Nunca faça

- Remover `.nojekyll`, `_headers`, `robots.txt` ou `sitemap.xml` "por limpeza".
- Apagar ou renomear arquivos de `assets/` ainda referenciados pelo HTML.
- Adicionar rastreadores, analytics, pixels ou cookies sem pedido explícito.
- Alterar deploy, permissões do repositório ou configurações do Pages.
- Fechar issue sem comentário de conclusão e sem `watch_ack`.

## Pendências conhecidas (úteis para triagem)

- Contato real (e-mail/WhatsApp) ainda não definido — rodapé com dados fictícios.
- Formulário sem backend.
- Sem `favicon` próprio além do logo em `assets/`.
