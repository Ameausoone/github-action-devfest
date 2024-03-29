<!-- .slide: class="transition sfeir-bg-red" -->

# How does it work ?

Notes: **Antoine**

##==##

# Fresh VM

- Every workflow runs on a fresh VM (Linux-Ubuntu, MacOS or Windows)
- Then each step, run by default on VM or in docker image
<!-- .element: class="list-fragment" -->

Notes: **Antoine** (8:46:24)

Un workflow démarre avec une VM fraiche à chaque workflow, ensuite chaque step peut s'exécuter dans la VM ou dans une image docker.

C'est un concept nouveau, couteux.

Il est possible d'avoir des runners on premise, mais difficile à gérer.

Mais qui a ses avantages.

##==##

# Directory

- `.github/workflows/workflow-1.yaml`
- `.github/workflows/workflow-2.yaml`
- `...`
- `.github/workflows/workflow-X.yaml`
<!-- .element: class="list-fragment" -->

Notes: **Antoine**

Au lieu d'avoir un fichier à la racine du projet, on le déplace dans un répertoire, et on peut avoir x workflows, un par fichier.

C'est tout simple, mais ça permets d'écrire différents workflows facilement, au lieu de tout avoir dans un seul fichier, à coup de conditions.

##==##

<!-- .slide: class="with-code" -->

# Event

<br><br>

```yaml
on: [push, pull_request]
```
<!-- .element: class="big-code" -->

Notes: **Antoine**

Généralement l'event qui va déclencher un workflow, ce sera le commit, puis on va mettre des conditions.

Ici c'est différent, et c'est un gros point fort de GitHub actions, on va déclencher un workflow sur un événement.

Ici on a un exemple simple,

➡️ mais...

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

Notes: **Antoine**

Mais pas uniquement, ici par exempe on va déclencher un workflow quand un commentaire est ajouté sur une issue, ou dernier exemple sur un type d'activité précis d'un événement : la création d'une release.

Je ne vais pas énumérer tous les events disponibles.

Mais c'est qquechose que j'ai trouvé très intéressant.

Comme par exemple, créer un workflow de rebase.

##==##

<!-- .slide: class="with-code" -->

# Next... workflow

```yaml
on:
[...]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js 12.0
      uses: actions/setup-node@v3
      with:
        node-version: 12.0
    - run: npm ci
    - run: npm run build --if-present
    - run: npm test
```

Notes: **Antoine**

Alors ici simplement, vous avez le mot clé `jobs`.

Et ensuite, vous pouvez indiquer un ou plusieurs workflows, ici on a un simple workflow.

Il y a beaucoup d'options disponibles à chaque étape.

➡️ Quelques exemples : ...

##==##

# workflow features

<br><br>

- conditions
- matrix
- dependencies
- os runner
- [...]
<!-- .element: class="list-fragment" -->

Notes: **Antoine** (11:54:24)

Donc on a des features classiques mais toujours pratiques.

On peut mettre des conditions, une matrice d'option comme une version de nodejs, si on a plusieurs workflows, on peut indiquer une dépendance entre les workflows.

##==##

<!-- .slide: class="with-code max-height" -->

# [Reviewing deployments](https://docs.github.com/en/actions/managing-workflow-runs/reviewing-deployments)

![trigger center](./assets/images/how-to-trigger-step-manually.png)

<!-- .element: class="big-code" -->

Notes: **Antoine**

Donc on peut également jouer une étape dans un container docker.

Mais le plus intéressant.

##==##

<!-- .slide: class="with-code max-height" -->

# Approve or reject

![reviewing h-700 center](./assets/images/reviewing-deployment.png)

<!-- .element: class="big-code" -->

Notes: **Antoine**

Donc on peut également jouer une étape dans un container docker.

Mais le plus intéressant.

##==##

<!-- .slide: class="with-code max-height" -->

# [Supercharging GitHub Actions with Job Summaries](https://github.blog/2022-05-09-supercharging-github-actions-with-job-summaries/)

![reviewing h-700 center](./assets/images/test-summary.png)

<!-- .element: class="big-code" -->

Notes: **Antoine**

Job summaries avec du markdown

##==##

<!-- .slide: class="with-code max-height" -->

# [Save time with partial re-runs in GitHub Actions](https://github.blog/2022-03-16-save-time-partial-re-runs-github-actions)

![partial reruns h-700 center](./assets/images/partial-reruns.png)

<!-- .element: class="big-code" -->

Notes: **Antoine**

Re-jouer seulement les jobs en erreurs

##==##

<!-- .slide: class="with-code max-height" -->

# [Reusable workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows)

```yaml
jobs:
  call-workflow-passing-data:
    uses: octo-org/example-repo/.github/workflows/reusable-workflow.yml@main
    with:
      config-path: .github/labeler.yml
    secrets:
      envPAT: ${{ secrets.envPAT }}
```

<!-- .element: class="big-code" -->

Notes: **Antoine**

Workflows peuvent être réutilisable, parfait pour les organisations.

##==##

<!-- .slide: class="with-code max-height" -->

# Organization

* [Organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/about-organizations)
* [Teams](https://docs.github.com/en/organizations/organizing-members-into-teams/about-teams)
* [Required workflows](https://github.blog/2023-01-10-introducing-required-workflows-and-configuration-variables-to-github-actions/)
* Self-hosted runners
* [DataDog integration](https://docs.datadoghq.com/integrations/github/)
<!-- .element: class="list-fragment" -->

Notes: **Antoine**

##==##

<!-- .slide: class="with-code" -->

# Shell

<br>

```yaml
steps:
  - name: Create todo file
    run: echo "Hello World" > do-it.txt 
    shell: bash
```

<!-- .element: class="big-code" -->

Notes: **Antoine**

Donc ici via la command `run`, on peut exécuter du shell ou des scripts shell : simple, basique...

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

Notes: **Antoine**

Donc on peut également jouer une étape dans un container docker.

⚠️ **Next Speaker** Romain
