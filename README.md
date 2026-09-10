# Portfolio

## Développement local

```
npm install
npm run dev
```

## Déploiement sur GitHub Pages

1. Dans `vite.config.js`, mettre `base` sur le nom exact de ton repo GitHub
   (ex : `/portfolio/` si ton repo s'appelle `portfolio`).
2. Créer le repo sur GitHub et pousser ce projet dessus.
3. Lancer :

```
npm run build
npm run deploy
```

`npm run deploy` utilise le paquet `gh-pages` pour publier le contenu de
`dist/` sur la branche `gh-pages` du repo. Il faut ensuite activer GitHub
Pages sur cette branche dans les réglages du repo ("Settings" > "Pages").

## Notes techniques

- Routing en `HashRouter` (react-router-dom) : les URLs auront la forme
  `.../#/a-propos`. Ça évite d'avoir à configurer un fallback 404 côté
  GitHub Pages pour que le rafraîchissement de page fonctionne sur les
  sous-pages.
- Aucune autre librairie que React + react-router-dom n'est utilisée.
- Pas d'animation, pas de bordures, box-sizing: border-box partout,
  layout en flexbox uniquement.
