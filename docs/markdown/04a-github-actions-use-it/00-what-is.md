
# What is a GitHub Action ?
<br><br>
<!-- TODO reformulate unit action -->
* Unit action
* With Inputs and Outputs
* With documentation `README.md` !
* Easily interact with the workflow, git and GitHub API
<!-- .element: class="list-fragment" -->

Notes: 15:02:24 C'est une action unitaire, avec des entrées/sorties, qui a accès au workspace. qui va effectué une tâche, idéalement bien testé, généralement bien documenté.

##==##

# How to call a GitHub Action ?
<!-- .slide: class="full-center" -->
![call h-700](./assets/images/call-an-action.png)

Notes: Pour utiliser une github action, il suffit de référencer le repo, par défaut, ça utilise la branche par défaut, mais on peut spécifier une autre branche, un tag, ou un commitId, on va voir plus loin l'intérêt que ça a. ... Alors GitHub fourni une série de GitHub action

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Out of the box

Notes: Qu'est-ce que GitHub propose "out ot the box" pour utiliser github Actions

##==##

# Official GitHub actions
<br>

## GitHub provides a lot of actions

<br>

- [actions/checkout](https://github.com/actions/checkout) - _Setup your repository on your workflow._
- [actions/cache](https://github.com/actions/cache) - _Cache dependencies and build outputs in GitHub Actions._
- [github/super-linter](https://github.com/github/super-linter) - _Linter for a lot of languages_
- [github/codeql-action](https://github.com/github/codeql-action) - _Detect security vulnerabilies_
- [...]
<!-- .element: class="list-fragment" -->

Notes: Il y a bcp d'actions fournies par GitHub nativement. Notamment pour installer vos dépendances, pour java, node, python etc. Il y a également un linter. Je vais faire un petit focus sur le fonctionnement des actions "setup-"

##==##
# "Setup" Actions

- [actions/](https://github.com/actions/)
  - [node](https://github.com/actions/setup-node)
  - [python](https://github.com/actions/setup-python)
  - [go](https://github.com/actions/setup-go)
  - [dotnet](https://github.com/actions/setup-dotnet)
  - [haskell](https://github.com/actions/setup-haskell)
  - [java](https://github.com/actions/setup-java)
  - [ruby](https://github.com/actions/setup-ruby)
  - [elixir](https://github.com/actions/setup-elixir)
<!-- .element: class="list-fragment" -->

Notes: vous avez la liste des sdk disponible dans vos github actions fourni par GitHub actions. 
##==##

# Closer look to setup-*
<!-- .slide: class="full-center" -->
![call h-800](./assets/images/setup-action.png)

Notes: 18:10:24 C'est une convention dans les actions github, une action setup- va installer l'application directement sur le runner, avec la version que vous avez choisi, et vous pouvez du coup cumuler facilement différentes versions d'outils.

##==##

# GitHub Automation

- [actions/](https://github.com/actions/)
  - [upload-artifact](https://github.com/actions/upload-artifact) - _Upload artifacts from your workflow._
  - [github-script](https://github.com/actions/github-script) - _Write a script for GitHub API and the workflow contexts._
  - [create-release](https://github.com/actions/create-release) - _An Action to create releases via the GitHub Release API_.
  - [upload-release-asset](https://github.com/actions/upload-release-asset) - _An Action to upload a release asset via the GitHub Release API_.
  - [first-interaction](https://github.com/actions/first-interaction) - _An action for filtering pull requests and issues from first-time contributors_.
  - [stale](https://github.com/actions/stale) - _Marks issues and pull requests that have not had recent interaction_.
  - [labeler](https://github.com/actions/labeler) - _An action for automatically labelling pull requests_.
  - [delete-package-versions](https://github.com/actions/delete-package-versions) - _Delete versions of a package from GitHub Packages_.
<!-- .element: class="list-fragment" -->

Notes: D'autres exemples de github actions: comme upload artifact, download-artifact. Create release qui comme son nom l'indique qui va créer une release github ou comme github-script. ➡️ Et pour vous faciliter la tâche, il y a également des 

##==##

# 'gh' CLI
<br>

## GitHub also provides a CLI : `gh`

<br>

- `gh repo clone` - _Clone a repository locally_
- `gh pr create` - _Create a pull request_
- `gh workflow run` - _Run a workflow_
- `gh issue create` - _Create an issue_
<!-- .element: class="list-fragment" -->

Notes: GitHub fourni également un CLI, qui permet de faire des actions sur GitHub, comme cloner un repo, créer une PR, lancer un workflow, créer une issue, etc. Et on peut l'utiliser dans nos pipelines.

##==##

# Issue Ops
<br>

## [Enabling branch deployments through IssueOps with GitHub Actions](https://github.blog/2023-02-02-enabling-branch-deployments-through-issueops-with-github-actions/)

<br>

- Create a branch.
- Add commits to your branch.
- Open a pull request.
- Gather feedback plus peer reviews.
- Deploy your change.
- Validate.
- Merge your branch to the main / master branch.
<!-- .element: class="list-fragment" -->

Notes: GitHub fourni également un CLI, qui permet de faire des actions sur GitHub, comme cloner un repo, créer une PR, lancer un workflow, créer une issue, etc. Et on peut l'utiliser dans nos pipelines.

##==##

<!-- .slide: class="full-center" -->
# [Starter-workflows](https://github.com/actions/starter-workflows)

![marketplace h-700 center](./assets/images/starter-workflows.png)

Notes: GitHub fourni également des workflow basiques, c'est directement intégré dans l'interface de GitHub, quand vous voulez créer un pipeline sur le site. Et vous pouvez même y contribuer, c'est un repo !

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Or by the community...

You can develop your own GitHub action !!!

Notes: 28:26:40 et donc c'est là où GitHub Actions devient très intéressant, on peut développer ses propres GitHub action ! ... 2 possibilités

##==##

# Marketplace

![marketplace h-700 center](./assets/images/marketplace.png)

Notes: On peut trouver les GitHub Action sur la marketplace, une fois l'action créé, on peut  la proposer sur la Marketplace de GitHub. GitHub fait remonter dans la liste les actions qui ont le plus d'étoiles, donc n'hésitez pas à ajouter un like quand vous utilisez un pipeline. Pour info, une action n'a pas besoin d'être sur le marketplace pour être utilisable dans votre pipeline.

##==##

# Interact with Cloud
<br><br>

- [google-github-actions](https://github.com/google-github-actions) - _GCP_ 
- [Azure/actions](https://github.com/Azure/actions) - _Azure_
- [aws-actions](https://github.com/aws-actions) - _AWS_
<!-- .element: class="list-fragment" -->

Notes: 21:18:24
