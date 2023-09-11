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

Notes: **Romain**

La première implémentation était une container action qui utilise du sed.

Elle s'est étoffée de plus de variables maintenant.

Alors question : qui a déjà contribué sur un workflow ? Qui a ajouté des tests unitaires sur un workflow ?

C'est l'une de ces premières contributions : c'est l'ajout de tests unitaires avec **bats**.
C'est tout simple, mais l'idée est là : avoir une GitHub action qui fait un job simple mais le faire bien.

➡️ Alors on a une issue qui est tombé ensuite  

##==##

# Slug-action | Issue

![issue h-400 center](./assets/images/issue-other-os.png)

Notes: **Romain**

La GitHub action ne fonctionne que pour les runners linux, en effet les container action ne sont compatibles que Linux, et ne fonctionnent pas sur Windows et Mac.

➡️ Du coup

##==##

# Slug-action | PR

![pr h-400 center](./assets/images/issue-os-pr.png)

Notes: **Romain**

Antoine a proposé une réécriture complète en TypeScript.

##==##

# Slug-action | Merged

![merged h-600 center](./assets/images/twitter-merge-os-pr.png)

Notes: **Romain**

Un autre avantage, c'est que l'on évite la phase de construction de l'image docker.

Une GitHub action JavaScript démarre un peu plus vite qu'une container action.

##==##

# Slug-action | Result

![search h-600 center](./assets/images/github-slug-action-dependents.png)

Notes: **Romain** (43:14:24)

Cette GitHub action est utilisée par près plus de 9K projets OpenSource.

Pas de stats sur les utilisateurs privés, mais on sait qu'elle s'est installé chez Decathlon ou ADEO.

##==##

<!-- .slide: class="transition sfeir-bg-red" -->

# Action | 3 advises to write an action

Notes: **Romain**

Alors 3 conseils si vous voulez écrire une GitHub action.

##==##

# Advise | Find ...

## a simple use case

> THE RIGHT TOOL FOR THE RIGHT JOB.

Notes: **Romain**

Implémenter une action unitaire qui fait bien le job.

Qui réponds à un besoin.

##==##

# Advise | Semantic

- Use semantic versioning
- Use semantic branching
- ![default h-100 center](./assets/images/github-default-branch.png)
- ![stale h-150 center](./assets/images/github-stale-branches.png)
<!-- .element: class="list-fragment" -->

Notes: **Romain**

Alors je vous ai dit vous pouvez référencer un tag ou une branche, vous pouvez simplement utiliser une branche jusqu'au prochain breaking change, et ensuite passer à la branche suivante.

➡️ et un dernier conseil, peut-être le plus important !

##==##

# Documentation

![rtfm h-500 center](./assets/images/RTFM.png)

Notes: **Romain**

Une bonne documentation ! Aidez vos utilisateurs, vous avez le fichier README dispo pour cela.

Faites une bonne documentation ! Qui est déjà tomber sur un cas bizarre avec un produit, et a été heureux de trouver la documentation à propos de ce problème.
