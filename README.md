# Sintonia Interiores — landing page

Página estática (HTML, CSS e JS puros) criada a partir da apresentação
`Sintonia Interiores.pptx` e dos Projetos Integradores do grupo.

## Ver localmente

Abra o arquivo `index.html` no navegador. Não precisa de servidor nem de build.

## Publicar no GitHub Pages

1. Crie um repositório vazio em <https://github.com/new>
   (sugestão de nome: `sintonia-interiores`; pode ser público).
2. No terminal, dentro desta pasta:

   ```bash
   git remote add origin https://github.com/SEU-USUARIO/sintonia-interiores.git
   git push -u origin main
   ```

   O Git vai abrir o navegador para você entrar na conta na primeira vez.
3. No repositório, abra **Settings → Pages** e em *Build and deployment*
   escolha **Source: GitHub Actions**.
4. O workflow `.github/workflows/pages.yml` roda sozinho a cada `push` na
   branch `main` e publica em:

   `https://SEU-USUARIO.github.io/sintonia-interiores/`

Também funciona no Netlify ou na Vercel: basta importar o mesmo repositório,
sem comando de build e com a raiz como diretório de publicação.

## Estrutura

```
index.html          página única (todas as seções)
styles.css          estilos, cores e tipografia
script.js           menu, animações e formulário demonstrativo
assets/             logo e imagens dos projetos
.github/workflows/  deploy automático no GitHub Pages
```

## O que editar

- **Textos**: direto no `index.html`, por seção (`<!-- ABERTURA -->`,
  `<!-- QUEM SOMOS -->`, `<!-- NOSSOS PROJETOS -->` etc.).
- **Cores**: variáveis no topo do `styles.css` (`--bg`, `--accent`, `--ink`).
- **Imagens**: substitua os arquivos em `assets/` mantendo os mesmos nomes.

## Domínio próprio

Depois de publicar, em **Settings → Pages → Custom domain**, informe o domínio
e crie o arquivo `CNAME` na raiz com o domínio dentro. No Registro.br, aponte
o DNS conforme as instruções que o GitHub mostra.

## Observações

- O formulário é demonstrativo: valida e mostra a mensagem, mas não envia nada.
  Para receber mensagens, conecte um serviço (Formspree, Netlify Forms) ou
  troque o botão por um link de e-mail/WhatsApp.
- O e-mail e a base no rodapé são fictícios — troque pelos dados reais antes
  de divulgar a página.
- As imagens são perspectivas e painéis de referência dos Projetos Integradores,
  identificados nas legendas.
