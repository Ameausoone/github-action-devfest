<!-- .slide: class="transition sfeir-bg-red" -->

# Or ... a "Github Action"

Notes: 19:33:20

##==##

# Use a Github Action
<!-- .slide: class="big-code" -->
```yaml
steps:
  - name: Checkout code
    uses: actions/checkout@v2
  - name: Install Node.js
    uses: actions/setup-node@v1
```

Notes: Il s'agit de déléguer une étape d'un pipeline a une github action, et c'est là que Github action devient très intéressant..... Alors, qu'est-ce qu'une Github Action ? 

##==##

# What is a Github Action ?

* Unit action
* With Inputs and Outputs
* With documentation !
* Easily interact with Pipeline, git and Github API 

Notes: C'est une action unitaire, avec des valeurs en entrées, qui a accès au workspace. qui va effectué une tâche, idéalement bien testé, généralement bien documenté. 

##==##

# How to call a Github Action ? 
<!-- .slide: class="full-center" -->
![call](./assets/images/call-an-action.png)

Notes: Pour utiliser une github action, il suffit de référencer le repo, par défaut, ça utilise la branche par défaut, mais on peut spécifier une autre branche, un tag, ou un commitId, on va voir plus loin l'intérêt que ça a. ... Alors Github fourni une série de Github action

##==##

# "Builtin" actions

Github provides a lot of actions
- [actions/checkout](https://github.com/actions/checkout) - Setup your repository on your workflow.
- [actions/cache](https://github.com/actions/cache) - Cache dependencies and build outputs in GitHub Actions.
- [github/super-linter](https://github.com/github/super-linter) - Linter for a lot of languages

Notes: Il y a bcp d'actions fournies par Github nativement. Notamment pour installer vos dépendances, pour java, node, python etc. Il y a également un linter. Je vais faire un petit focus sur le fonctionnement des actions "setup-" 

##==##
# "Setup" Actions

- [actions/setup-node: Node.js](https://github.com/actions/setup-node)
- [actions/setup-python: Python](https://github.com/actions/setup-python)
- [actions/setup-go: Go](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir](https://github.com/actions/setup-elixir)
- [fabasoad/setup-cobol-action: Cobol 😅](https://github.com/fabasoad/setup-cobol-action)

##==##

# Closer look to setup-*
<!-- .slide: class="full-center" -->
![call](./assets/images/setup-action.png)

Notes: C'est une convention dans les actions github, une action setup- va installer l'application directement sur le host, avec la version que vous avez choisi, et vous pouvez du coup cumuler facilement différentes versions d'outils.

##==##

# Or more High level

- [actions/upload-artifact](https://github.com/actions/upload-artifact) - Upload artifacts from your workflow.
- [actions/cache](https://github.com/actions/cache) - Manage cache.
- [actions/github-script](https://github.com/actions/github-script) - Write a script for GitHub API and the workflow contexts.

Notes: D'autres exemples de github actions: comme upload artifact, download-artifact. Create release qui comme son nom l'indique qui va créer une release github ou comme github-script. Un petit focus sur github-script. 

##==##

# github-script... an example
<!-- .slide: class="big-code" -->
```yaml
on:
  issues:
    types: [opened]
jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v3
        with:
          github-token: ${{secrets.GITHUB_TOKEN}}
          script: |
            github.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '👋 Thanks for reporting!'
            })
```

Notes: github-script permets d'intéragir avec l'api Github très simplement. github-script inject un client github authentifié avec Github Token. Par exemple, ici on va réagir à la création d'une nouvelle issue, à laquelle on va rajouter un commentaire. 

##==##

# Github Automation

- [actions/create-release](https://github.com/actions/create-release) - An Action to create releases via the GitHub Release API.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - An Action to upload a release asset via the GitHub Release API.
- [actions/first-interaction](https://github.com/actions/first-interaction) - An action for filtering pull requests and issues from first-time contributors.
- [actions/stale](https://github.com/actions/stale) - Marks issues and pull requests that have not had recent interaction.
- [actions/labeler](https://github.com/actions/labeler) - An action for automatically labelling pull requests.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Delete versions of a package from GitHub Packages.

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Or by the community...

You can develop your own Github action !!!

Notes: 28:26:40 et donc c'est là où Github Actions devient très intéressant, on peut développer ses propres Github action ! ... 2 possibilités

##==##

# Two ways :

* Javascript action (also Typescript)
* Or Container action
* Github provides templates on [github.com/actions](https://github.com/actions)

Notes: 2 types de github action : javascript action ou une container action. Pour ces 2 types, il existe des templates pour ne pas partir de zéro que vous trouverez sur github.com/actions

##==##

# Javascript action

* Run natively on host
* Perfect for interact with Github API (others API also)
* For High-level action
* Recommended choice
* Template : [actions/javascript-action](https://github.com/actions/javascript-action)

Notes: Une action de type Javascript s'éxécute nativement sur la vm, vous pouvez l'écrire en javascript ou en typescript. C'est plutôt l'action privilégié par Github. Si vous avez besoin d'intéragir avec une API, c'est le choix idéal. ... Il y a d'ailleurs 2 librairies npm disponibles

##==##

# Two (main) npm libraries

* @actions/core => to interact with Github action workflow(inputs,env var, etc)
* @action/github => to interact with Github API

Notes: core qui permets de travailler avec l'api de Github Actions, et github pour intéragir avec l'api Github. Mais évidemment, et c'est tout l'intérêt, vous pouvez importer n'importe quelle librairie npm.

##==##

# Container action

* Based on a docker image + your shell script
* Very easy to start with
* Only compatible with Linux Host
* A fewer longer to start
* Interact with workflow by shell api
* Template : [actions/container-action](https://github.com/actions/container-action)

Notes: il existe également un template pour faire une action basée sur un container, attention compatible actuellement que avec les runners Linux, c'est également un peu plus long à démarrer qu'une action Javascript. 2 exemples de Github action

##==##

# Some examples : Vault-action

[hashicorp/vault-action](https://github.com/hashicorp/vault-action)

> A helper action for easily pulling secrets from HashiCorp Vault™.
<!-- .slide: class="big-code" -->
```yaml
# ...
- name: Import Secrets
  uses: hashicorp/vault-action@v2.0.1
  with:
    url: https://vault.mycompany.com:8200
    token: ${{ secrets.VaultToken }}
    secrets: |
        secret/data/ci/aws accessKey | AWS_ACCESS_KEY_ID ;
        secret/data/ci/aws secretKey | AWS_SECRET_ACCESS_KEY ;
        secret/data/ci npm_token
# ...
``` 

Notes: que je n'ai pas pris au hasard, puisque j'ai contribué sur ces actions. Par exemple vault-action : développé initialement par [RichiCoder1](https://github.com/richicoder1) puis repris par Hashicorp. Une action simple, bien testé, bien documenté, qui permets de récupérer des secrets sur une instance Vault. Et vous pouvez venir consommer cette action très facilement dans votre pipeline. 

##==##

# Another one : github-slug-action

[rlespinasse/github-slug-action](https://github.com/rlespinasse/github-slug-action)

> This GitHub Action will expose the slug value of all GitHub environment variables inside your GitHub workflow.

```yaml
- name: Inject slug/short variables
  uses: rlespinasse/github-slug-action@v3.x

- name: Print slug/short variables
  run: |
    echo "Slug variables"
    # ...
    echo "   head ref   : ${{ env.GITHUB_HEAD_REF_SLUG }}"
    // print : "   head ref   : feat-ready-to-url"
    # ...
```

Notes: Autre exemple : développer par mon collègue Romain Lespinasse. Cette github action prends les variables d'environnement fourni Github, et va les transformer pour pouvoir les utiliser dans votre pipeline, par exemple pour créer un service qui va prendre le nom d'une branche dans l'url. ... Alors maintenant que l'on a développé notre Github action ce serait bien de pouvoir la partager. 

##==##

# Marketplace

![marketplace](./assets/images/marketplace.png)

Notes: Vous pouvez ensuite exposer votre Github Action sur la marketplace, une fois votre action créé, vous pouvez la proposer sur la Marketplace de Github. Github fait remonter dans la liste les actions qui ont le plus d'étoiles, donc n'hésitez pas à ajouter un like quand vous utilisez un pipeline. Pour info, une action n'a pas besoin d'être sur le marketplace pour être utilisable dans votre pipeline. 

##==##

# [Starter-workflows](https://github.com/actions/starter-workflows)

![marketplace](./assets/images/starter-workflows.png)

Notes: Github fourni également des workflow basiques, c'est directement intégré dans l'interface de Github, quand vous voulez créer un pipeline sur le site. Et vous pouvez même y contribuer, c'est un repo ! 

##==##

# Collections of Github Actions

* [github.com/google-github-actions](https://github.com/google-github-actions)
* [github.com/Azure/actions](https://github.com/Azure/actions)
* [github.com/aws-actions](https://github.com/aws-actions)
* [sdras/awesome-actions](https://github.com/sdras/awesome-actions) - A curated list of awesome actions to use on GitHub

##==##

# But Jenkins has plugins 

* Github Action are way more lightweight
* It is not attached to an instance
* You can develop it in any language

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Security 

Github Action : the 'S' stands for Security.

Notes: 36:26:40 Github action est donc très pratique, mais n'est pas exempt de défaut, notamment niveau sécurité, on va voir 2 problèmes notamment.

##==##

# The "left-pad" effect

* What happens if an owner delete his action ?

* A "archived" repo still works
* Use well-known Github action
* Fork it in your org

Notes: que se passe-t-il si le propriétaire supprime une action. ça ne fonctionne plus, si l'action est critique pour vous est qu'elle peut être susceptible d'être supprimé, faites en fork.  

##==##

# The "event-stream" effect

* What happens if an owner mine bitcoin with his action ?

* Use commitId as reference: 

```yaml
- uses: rlespinasse/github-slug-action@cc560ad
```

* Dependabot will even make PR with most recent commitId

Notes: Plus pervers : que se passe-t-il si le propriétaire d'une action, mets à jour son action pour miner du bitcoin sur vos runners, si vous utilisez la branche par défaut, ou une branche, ou même un tag. Solution : dans ce cas, vous pouvez utiliser le commitId, le court ou le long. Dans ce cas, vous êtes sûr d'utiliser une version fixe de la github action. 
 
##==##

# Use dependabot

`.github/dependabot.yml`
```yaml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
```

Notes: Et vous pouvez même utiliser dependabot, pour maintenir vos github actions à jour  ! 

##==##

# Checkout

```yaml
- uses: actions/checkout@v2
  with:
    # default : true
    persist-credentials: false
```

Notes: Par défaut, quand l'action checkout fait un clone de votre repo, la configuration git du workspace permets d'exécuter des commandes git authentifié, donc si vous n'en avez pas besoin d'effectuer, n'hésitez pas à utiliser l'option persist-credentials, pour que votre code soit en "lecture seule".

##==##

# Secrets

* Set secrets in your repo settings and inject them in your pipeline.

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```

Notes: Il y a une gestion des secrets, le principe est assez simple vous spécifiez vos secrets dans les settings de votre repo, puis vous les injecter dans votre pipeline. Automatiquement les secrets seront masqués dans les logs.  

##==##

# GITHUB_TOKEN

```yaml
name: Pull request labeler
on:
- pull_request
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v2
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

Notes: pour intéragir avec l'api github, vous avez un TOKEN qui est injecté dans votre pipeline, pour une durée limitée. Pour les PR de repos forké,
le TOKEN a des droits read only. 

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Thx !

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Questions ? 
