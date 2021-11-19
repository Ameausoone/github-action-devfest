<!-- .slide: class="transition sfeir-bg-red" -->

# How does it work ?

##==##

# Fresh VM

<br>
<br>

- Every pipeline runs on a fresh VM (Linux-Ubuntu, MacOS or Windows)
- Then each step, run by default on VM or in docker image
<!-- .element: class="list-fragment" -->

Notes: 8:46:24 un pipeline démarre avec une VM fraiche à chaque pipeline, ensuite chaque step peut s'exécuter dans la VM ou dans une image docker. C'est un concept nouveau, couteux. Il est possible d'avoir des runners on premise, mais difficile à gérer. Mais qui a ses avantages.

##==##

# Directory

- `.github/workflows/pipeline-1.yaml`
- `.github/workflows/pipeline-2.yaml`
- `...`
- `.github/workflows/pipeline-X.yaml`
<!-- .element: class="list-fragment" -->

Notes: Au lieu d'avoir un fichier à la racine du projet, on le déplace dans un répertoire, et on peut avoir x pipelines, un par fichier. C'est tout simple, mais ça permets d'écrire différents pipelines facilement, au lieu de tout avoir dans un seul fichier, à coup de conditions.

##==##

<!-- .slide: class="with-code" -->

# Event

<br><br>

```yaml
on: [push, pull_request]
```

<!-- .element: class="big-code" -->

Notes: Généralement l'event qui va déclencher un pipeline, ce sera le commit, puis on va mettre des conditions. Ici c'est différent, et c'est un gros point fort de Github actions, on va déclencher un pipeline sur un événement. Ici on a un exemple simple, ➡️ mais..

##==##

<!-- .slide: class="with-code" -->

# But.. Not only

```yaml
on:
  # when add a comment on an issue
  issue_comment:
    types: [created]
  # when a new release is created
  release:
    types:
      - created
```

<!-- .element: class="big-code" -->

Notes: Mais pas uniquement, ici par exempe on va déclencher un pipeline quand un commentaire est ajouté sur une issue, ou dernier exemple sur un type d'activité précis d'un événement : la création d'une release. Je ne vais pas énumérer tous les events disponibles. Mais c'est qquechose que j'ai trouvé très intéressant. Comme par exemple, créer un pipeline de rebase.

##==##

<!-- .slide: class="with-code" -->

# Next... pipeline

```yaml
on:
[...]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js 12.0
      uses: actions/setup-node@v1
      with:
        node-version: 12.0
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Notes: Alors ici simplement, vous avez le mot clé `jobs`. Et ensuite, vous pouvez indiquer un ou plusieurs pipelines, ici on a un simple pipeline. Il y a beaucoup d'options disponibles à chaque étape. ➡️ Quelques exemples : ...

##==##

# Pipeline features

<br><br>

- conditions
- matrix
- dependencies
- os runner
- [...]
<!-- .element: class="list-fragment" -->

Notes: 11:54:24 Donc on a des features classiques mais toujours pratiques. On peut mettre des conditions, une matrice d'option comme une version de nodejs, si on a plusieurs pipelines, on peut indiquer une dépendance entre les pipelines. 

##==##

<!-- .slide: class="with-code" -->

# Shell

<br>

```yaml
steps:
  - name: Create todo file
    run: echo "Hello Devfest Lille 2021" > do-it.txt
```

<!-- .element: class="big-code" -->

Notes: Donc ici via la command `run`, on peut exécuter du shell ou des scripts shell : simple, basique...

##==##

<!-- .slide: class="with-code max-height" -->

# Docker

```yaml
jobs:
  in-container:
    runs-on: ubuntu-latest
    container: node:10.16-jessie
    steps:
      - name: Run in container
        run: |
          echo This job does specify a container.
          echo It runs in the container instead of the VM.
```

<!-- .element: class="big-code" -->

Notes: Donc on peut également jouer une étape dans un container docker. Mais le plus intéressant.
