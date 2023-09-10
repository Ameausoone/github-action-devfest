<!-- .slide: class="with-code max-height" -->

# Slug-action | 1st Implementation

## Container action

```shell
#!/bin/sh -l
slug_ref() {
  echo "$1" |
    tr "[:upper:]" "[:lower:]" |
    sed -r 's#refs/[^\/]*/##;s/[~\^]+//g;s/[^a-zA-Z0-9]+/-/g;s/^-+\|-+$//g;s/^-*//;s/-*$//' |
    cut -c1-63
}
short_sha() {
  echo "$1" |
    cut -c1-8
}
{
  echo "GITHUB_REF_SLUG=$(slug_ref "$GITHUB_REF")"
  echo "GITHUB_HEAD_REF_SLUG=$(slug_ref "$GITHUB_HEAD_REF")"
  echo "GITHUB_BASE_REF_SLUG=$(slug_ref "$GITHUB_BASE_REF")"
  echo "GITHUB_SHA_SHORT=$(short_sha "$GITHUB_SHA")"
} >>"$GITHUB_ENV"
```

Notes: La première implémentation était une container action qui utilise du sed. Là c'est la toute première implémentation. ça s'est étoffé depuis, il y a plus de variables disponibles maintenant. Alors question : qui a déjà contribué sur un workflow ? Qui a ajouté des tests unitaires sur un workflow ? C'est l'une de mes premières contributions : c'est l'ajout de tests unitaires avec bats. C'est tout simple, mais l'idée est là : avoir une github action qui fait un job simple mais le faire bien. ➡️ Alors on a une issue qui est tombé ensuite  

##==##

# Slug-action | Issue

![issue h-400 center](./assets/images/issue-other-os.png)

Notes: la github action ne fonctionne que pour les runners linux, en effet les container action ne sont compatibles que Linux, et ne fonctionnent pas sur Windows et Mac. ➡️ Du coup 

##==##

# Slug-action | PR

![pr h-400 center](./assets/images/issue-os-pr.png)

Notes: J'ai proposé une réécriture complète en typescript. 

##==##

# Slug-action | Merged

![merged h-600 center](./assets/images/twitter-merge-os-pr.png)

Notes: un autre avantage, c'est que l'on évite la phase de construction de l'image docker. Une github action javascript démarre un peu plus vite qu'une container action.  

##==##

# Slug-action | Result

![search h-600 center](./assets/images/github-code-search.png)

Notes: 43:14:24 Résultat: Notre github action est utilisé par près de 2000 projets opensource. 

##==##

<!-- .slide: class="transition sfeir-bg-red" -->

# Action | 3 advises to write an action

Notes: Alors 3 conseils si vous voulez écrire une github action

##==##

# Advise | Find ...

# a simple use case

> THE RIGHT TOOL FOR THE RIGHT JOB.

Notes: Implémenter une action unitaire qui fait bien le job. Qui réponds à un besoin. 

##==##

# Advise | Semantic

- Use semantic versioning
- Use semantic branching
- ![default h-100 center](./assets/images/github-default-branch.png)
- ![stale h-150 center](./assets/images/github-stale-branches.png)
<!-- .element: class="list-fragment" -->

Notes: alors je vous ai dit vous pouvez référencer un tag ou une branche, vous pouvez simplement utiliser une branche jusqu'au prochain breaking change, et ensuite passer à la branche suivante. ➡️ et un dernier conseil, peut-être le plus important !

##==##

# Documentation

![rtfm h-500 center](./assets/images/RTFM.png)

Notes:  Une bonne documentation ! Aidez vos utilisateurs, vous avez le fichier README dispo pour ceux là. Faites une bonne documentation ! Qui est déjà tomber sur un cas bizarre avec un produit, et a été heureux de trouver la documentation à propos de ce problème. 
