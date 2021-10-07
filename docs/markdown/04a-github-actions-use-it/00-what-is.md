
# What is a Github Action ?

* Unit action
* With Inputs and Outputs
* With documentation `README.md` !
* Easily interact with Pipeline, git and Github API

Notes: C'est une action unitaire, avec des entrées/sorties, qui a accès au workspace. qui va effectué une tâche, idéalement bien testé, généralement bien documenté.

##==##

# How to call a Github Action ?
<!-- .slide: class="full-center" -->
![call](./assets/images/call-an-action.png)

Notes: Pour utiliser une github action, il suffit de référencer le repo, par défaut, ça utilise la branche par défaut, mais on peut spécifier une autre branche, un tag, ou un commitId, on va voir plus loin l'intérêt que ça a. ... Alors Github fourni une série de Github action

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Out of the box

Notes: Qu'est-ce que Github propose out ot the box pour utiliser github Actions

##==##

# "Builtin" actions

Github provides a lot of actions
- [actions/checkout](https://github.com/actions/checkout) - Setup your repository on your workflow.
- [actions/cache](https://github.com/actions/cache) - Cache dependencies and build outputs in GitHub Actions.
- [github/super-linter](https://github.com/github/super-linter) - Linter for a lot of languages
- [github/codeql-action](https://github.com/github/codeql-action) - Run Codeql
- [...]

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

# Github Automation

- [actions/create-release](https://github.com/actions/create-release) - An Action to create releases via the GitHub Release API.
- [actions/upload-release-asset](https://github.com/actions/upload-release-asset) - An Action to upload a release asset via the GitHub Release API.
- [actions/first-interaction](https://github.com/actions/first-interaction) - An action for filtering pull requests and issues from first-time contributors.
- [actions/stale](https://github.com/actions/stale) - Marks issues and pull requests that have not had recent interaction.
- [actions/labeler](https://github.com/actions/labeler) - An action for automatically labelling pull requests.
- [actions/delete-package-versions](https://github.com/actions/delete-package-versions) - Delete versions of a package from GitHub Packages.

##==##

# [Starter-workflows](https://github.com/actions/starter-workflows)

![marketplace](./assets/images/starter-workflows.png)

Notes: Github fourni également des workflow basiques, c'est directement intégré dans l'interface de Github, quand vous voulez créer un pipeline sur le site. Et vous pouvez même y contribuer, c'est un repo !

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Or by the community...

You can develop your own Github action !!!

Notes: 28:26:40 et donc c'est là où Github Actions devient très intéressant, on peut développer ses propres Github action ! ... 2 possibilités

##==##

# Marketplace

![marketplace](./assets/images/marketplace.png)

Notes: Vous pouvez ensuite exposer votre Github Action sur la marketplace, une fois votre action créé, vous pouvez la proposer sur la Marketplace de Github. Github fait remonter dans la liste les actions qui ont le plus d'étoiles, donc n'hésitez pas à ajouter un like quand vous utilisez un pipeline. Pour info, une action n'a pas besoin d'être sur le marketplace pour être utilisable dans votre pipeline.

##==##

# Interact with Cloud

* [google-github-actions](https://github.com/google-github-actions) - Interact with GCP 
* [Azure/actions](https://github.com/Azure/actions) - Azure
* [aws-actions](https://github.com/aws-actions) - AWS

Notes: 

##==##

# Awesome actions

* [sdras/awesome-actions](https://github.com/sdras/awesome-actions) - A curated list of awesome actions to use on GitHub

![marketplace](./assets/images/awesome-actions.png)

Notes: Un point d'entrée pour découvrir des github actions communautaire.

##==##

# But Jenkins has plugins

* Github Action are way more lightweight
* It is not attached to an instance
* You can develop it in any language

Notes: TODO
