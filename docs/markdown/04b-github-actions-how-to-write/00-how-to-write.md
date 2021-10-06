
# Two ways :

* Typescript action (or Javascript)
* Container action
* and now : Composite action !
* Github provides templates on [github.com/actions](https://github.com/actions)

Notes: 2 types de github action : javascript action ou une container action. Pour ces 2 types, il existe des templates pour ne pas partir de zéro que vous trouverez sur github.com/actions

##==##

# (Type|Java)script action

* Run natively on host
* Perfect for interact with API
* Recommended choice
* Faster than container action
* Run on every runner

Notes: Une action de type Javascript s'éxécute nativement sur la vm, vous pouvez l'écrire en javascript ou en typescript. C'est plutôt l'action privilégié par Github. Si vous avez besoin d'intéragir avec une API, c'est le choix idéal. ... Il y a d'ailleurs 2 librairies npm disponibles

##==##

# Two (main) npm libraries

* @actions/core => interact with Github action workflow(inputs,env var, etc)
* @actions/github => interact with Github API
* @actions/exec => execute local process

Notes: core qui permets de travailler avec l'api de Github Actions, et github pour intéragir avec l'api Github. Mais évidemment, et c'est tout l'intérêt, vous pouvez importer n'importe quelle librairie npm.

##==##

# Container action

* Based on a docker image + your shell script
* Very easy to start with
* Only compatible with Linux Host
* A fewer longer to start
* Interact with workflow by shell api

Notes: il existe également un template pour faire une action basée sur un container, attention compatible actuellement que avec les runners Linux, c'est également un peu plus long à démarrer qu'une action Javascript. 2 exemples de Github action

##==##

# Container action : example

TODO 

##==##

# Github-slug-action

TODO 

##==##

# Composite action

TODO 
