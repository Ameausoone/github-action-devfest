
# What is a Github Action ?
<br><br>
* Unit action
* With Inputs and Outputs
* With documentation `README.md` !
* Easily interact with Pipeline, git and Github API
<!-- .element: class="list-fragment" -->

Notes: C'est une action unitaire, avec des entrées/sorties, qui a accès au workspace. qui va effectué une tâche, idéalement bien testé, généralement bien documenté.

##==##

# How to call a Github Action ?
<!-- .slide: class="full-center" -->
![call h-700](./assets/images/call-an-action.png)

Notes: Pour utiliser une github action, il suffit de référencer le repo, par défaut, ça utilise la branche par défaut, mais on peut spécifier une autre branche, un tag, ou un commitId, on va voir plus loin l'intérêt que ça a. ... Alors Github fourni une série de Github action

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Out of the box

Notes: Qu'est-ce que Github propose out ot the box pour utiliser github Actions

##==##

# "Builtin" actions
<br>

## Github provides a lot of actions

<br>

- [actions/checkout](https://github.com/actions/checkout) - Setup your repository on your workflow.
- [actions/cache](https://github.com/actions/cache) - Cache dependencies and build outputs in GitHub Actions.
- [github/super-linter](https://github.com/github/super-linter) - Linter for a lot of languages
- [github/codeql-action](https://github.com/github/codeql-action) - Run Codeql
- [...]
<!-- .element: class="list-fragment" -->

Notes: Il y a bcp d'actions fournies par Github nativement. Notamment pour installer vos dépendances, pour java, node, python etc. Il y a également un linter. Je vais faire un petit focus sur le fonctionnement des actions "setup-"

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
- [fabasoad/setup-cobol-action: Cobol 😅](https://github.com/fabasoad/setup-cobol-action)
<!-- .element: class="list-fragment" -->

##==##

# Closer look to setup-*
<!-- .slide: class="full-center" -->
![call h-800](./assets/images/setup-action.png)

Notes: C'est une convention dans les actions github, une action setup- va installer l'application directement sur le host, avec la version que vous avez choisi, et vous pouvez du coup cumuler facilement différentes versions d'outils.

##==##

# Github Automation

- [actions/](https://github.com/actions/)
  - [upload-artifact](https://github.com/actions/upload-artifact) - _Upload artifacts from your workflow._
  - [cache](https://github.com/actions/cache) - _Manage cache._
  - [github-script](https://github.com/actions/github-script) - _Write a script for GitHub API and the workflow contexts._
  - [create-release](https://github.com/actions/create-release) - _An Action to create releases via the GitHub Release API_.
  - [upload-release-asset](https://github.com/actions/upload-release-asset) - _An Action to upload a release asset via the GitHub Release API_.
  - [first-interaction](https://github.com/actions/first-interaction) - _An action for filtering pull requests and issues from first-time contributors_.
  - [stale](https://github.com/actions/stale) - _Marks issues and pull requests that have not had recent interaction_.
  - [labeler](https://github.com/actions/labeler) - _An action for automatically labelling pull requests_.
  - [delete-package-versions](https://github.com/actions/delete-package-versions) - _Delete versions of a package from GitHub Packages_.
<!-- .element: class="list-fragment" -->

Notes: D'autres exemples de github actions: comme upload artifact, download-artifact. Create release qui comme son nom l'indique qui va créer une release github ou comme github-script. Un petit focus sur github-script.

##==##

<!-- .slide: class="full-center" -->
# [Starter-workflows](https://github.com/actions/starter-workflows)

![marketplace h-700 center](./assets/images/starter-workflows.png)

Notes: Github fourni également des workflow basiques, c'est directement intégré dans l'interface de Github, quand vous voulez créer un pipeline sur le site. Et vous pouvez même y contribuer, c'est un repo !

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Or by the community...

You can develop your own Github action !!!

Notes: 28:26:40 et donc c'est là où Github Actions devient très intéressant, on peut développer ses propres Github action ! ... 2 possibilités

##==##

# Marketplace

![marketplace h-700 center](./assets/images/marketplace.png)

Notes: Vous pouvez ensuite exposer votre Github Action sur la marketplace, une fois votre action créé, vous pouvez la proposer sur la Marketplace de Github. Github fait remonter dans la liste les actions qui ont le plus d'étoiles, donc n'hésitez pas à ajouter un like quand vous utilisez un pipeline. Pour info, une action n'a pas besoin d'être sur le marketplace pour être utilisable dans votre pipeline.

##==##

# Interact with Cloud
<br><br>

- [google-github-actions](https://github.com/google-github-actions) - _GCP_ 
- [Azure/actions](https://github.com/Azure/actions) - _Azure_
- [aws-actions](https://github.com/aws-actions) - _AWS_
<!-- .element: class="list-fragment" -->

Notes: 

##==##

# [sdras/awesome-actions](https://github.com/sdras/awesome-actions)

##  A curated list of awesome actions to use on GitHub

![marketplace h-700 center](./assets/images/awesome-actions.png)

Notes: Un point d'entrée pour découvrir des github actions communautaire.

##==##

# But Jenkins has plugins
<br><br>
* Github Action are way more lightweight
* It is not attached to an instance
* You can develop it in any language
<!-- .element: class="list-fragment" -->

Notes: TODO
