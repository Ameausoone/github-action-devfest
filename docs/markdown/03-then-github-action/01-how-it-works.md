<!-- .slide: class="transition sfeir-bg-red" -->
# How does it work ? 

##==##

# Fresh VM

* Every pipeline runs on a fresh VM (Linux-Ubuntu, MacOS or Windows)
* Then each step, run by default on VM or in docker image

Notes: un pipeline démarre avec une VM fraiche à chaque pipeline, ensuite chaque step peut s'exécuter dans la VM ou dans une image docker. C'est un concept nouveau, couteux. Il est possible d'avoir des runners on premise, mais difficile à gérer. Mais qui a ses avantages. 

##==##

# Directory

.github/workflows/<pipeline.yaml>

Notes: Au lieu d'avoir un fichier à la racine du projet, on le déplace dans un répertoire, et on peut avoir x pipelines, un par fichier. C'est tout bête, mais ça permets d'écrire différents pipelines facilement, au lieu de tout avoir dans un seul fichier, à coup de conditions.

##==##

# Event 
<!-- .slide: class="big-code" -->
```yaml
on: [push, pull_request]
```

Notes: Généralement l'event qui va déclencher un pipeline, ce sera le commit, puis on va mettre des conditions. Ici c'est différent, on va déclencher un pipeline sur un événement. Ici on a un exemple simple, mais..

##==##

# But.. Not only
<!-- .slide: class="big-code" -->
```yaml
on:
  # Trigger the workflow on push or pull request,
  # but only for the main branch
  push:
    branches:
      - main
  pull_request:
    branches:
      - feat/*
  # Triggered when add a comment on an issue
  issue_comment:
    types: [created]
  release:
    types:
      - created
```

Notes: Mais pas uniquement, ici on va déclencher notre pipeline uniquement si on pousse sur la branche master, ou sur une pullrequest dont la branche contient "feat/". Ou quand un commentaire est ajouté sur une issue, ou dernier exemple sur un type d'activité précis d'un événement : la création d'une release. Je ne vais pas énumérer tous les events disponibles. Mais c'est qquechose que j'ai trouvé très intéressant.  Comme par exemple, créer un pipeline de rebase.

##==##

# Next... pipeline
<!-- .slide: class="big-code" -->
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

Notes: Alors ici simplement, vous avez le mot clé `jobs`. Et ensuite, vous pouvez indiquer un ou plusieurs pipelines, ici on a un simple pipeline. Il y a beaucoup d'options disponibles à chaque étape. Quelques exemples : ...

<!-- .slide: class="with-code" -->
##==##

# And then 

* conditions
* matrix
* dependencies

Notes: todo
##==##

# Shell

```yaml
steps:
  - name: Create file
    run: echo "Hello Devfest Nantes" > cloud-nord.txt
```

Notes: Donc ici via la command `run`, on peut exécuter du shell ou des scripts shell : simple, basique... 

##==##

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

Notes: Donc on peut également jouer une étape dans une container docker. Mais le plus intéressant.

