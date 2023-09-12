<!-- .slide: class="transition sfeir-bg-red" -->

# How to write a GitHub action

Notes: **Antoine**

##==##

# 3 ways

<br><br>

- ![docker h-50](./assets/images/docker-logo.png) Container action
- ![typescript h-50](./assets/images/ts-logo.png) Typescript action (or JavaScript)
- and now : new Composite action !
- GitHub provides templates on [github.com/actions](https://github.com/actions)
<!-- .element: class="list-fragment" -->

Notes: **Antoine**

3 types de github action : JavaScript action ou une Container action.

Pour les actions TypeScript, JavaScript et Container, ils existent des templates pour ne pas partir de zéro que vous trouverez sur github.com/actions

##==##

# Container action

- Based on a docker image + your shell script
- Very easy to start with
- Interact with workflow by shell api
<!-- .element: class="list-fragment" -->

<!-- * Only compatible with Linux Host
- A fewer longer to start -->

Notes: **Antoine** (33:50:24)

Il existe également un template pour faire une action basée sur un container.

➡️ pour démarrer, c'est très compliqué, je vous montre le template de github action container.
Vous avez besoin de 3 fichiers.

##==##

# Container action(1/3)

<!-- .slide: class="with-code" -->

`Dockerfile`

```Dockerfile
FROM alpine:3.10

COPY LICENSE README.md /

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
```

<!-- .element: class="big-code" -->

Notes: **Antoine**

Un fichier dockerfile

##==##

<!-- .slide: class="with-code" -->

# Container action(2/3)

`entrypoint.sh`

```shell
#!/bin/sh -l

echo "hello $1"
```

<!-- .element: class="big-code" -->

Notes: **Antoine**

un entrypoint

##==##

<!-- .slide: class="with-code max-height" -->

# Container action(3/3)

`action.yml`

```yaml
name: 'Container Action Template'
description: 'Get started with Container actions'
author: 'GitHub'
inputs:
  myInput:
    description: 'Input to use'
    default: 'world'
runs:
  using: 'docker'
  image: 'Dockerfile'
  args:
    - ${{ inputs.myInput }}
```

Notes: **Antoine**

Et un fichier action.yml, c'est le même fichier que pour les actions de type JavaScript.

##==##

# (Type|Java)script action

<br><br>

- Run natively on host
- Perfect for interact with API
- Recommended choice
<!-- .element: class="list-fragment" -->

<!-- * Faster than container action
- Run on every runner -->

Notes: **Antoine**

Une action de type JavaScript s'éxécute nativement sur la vm, vous pouvez l'écrire en JavaScript ou en TypeScript.

C'est plutôt l'action privilégié par GitHub.

Si vous avez besoin d'intéragir avec une API, c'est le choix idéal.

➡️ Il y a d'ailleurs plusieurs librairies npm disponibles.

##==##

# Main npm libraries

<br><br>

- @actions/core => interact with GitHub action workflow(inputs,env var, etc)
- @actions/github => interact with GitHub API
- @actions/exec => execute local process
<!-- .element: class="list-fragment" -->

Notes: **Antoine**

`core` qui permets de travailler avec l'api de GitHub Actions, et GitHub pour intéragir avec l'api GitHub.

`exec` pour exécuter des commandes sur le host.
Mais évidemment, et c'est tout l'intérêt, vous pouvez importer n'importe quelle librairie npm.

➡️ La 3éme option ce sont les composites actions, qui présentent un tout nouvel intérêt depuis peu.

En fait il était possible d'enchainer des commandes shell que l'on compilait pour une faire une GitHub action, mais depuis qques mois.

##==##

<!-- .slide: class="with-code max-height" -->

# Composite action | Write it

```yaml
name: 'Publish to Docker'
inputs:
  registry_username:
    description: “Username for image registry”
  registry_password:
    description: “Password for image registry”
runs:
  using: 'composite'
  steps:
    - uses: docker/setup-buildx-action@v1

    - uses: docker/login-action@v1
      with:
        username: ${{inputs.registry_username}}
        password: ${{inputs.registry_password}}

    - uses: docker/build-push-action@v2
      with:
        context: .
        push: true
        tags: user/app:latest
```

Notes: **Antoine**

Il est possible d'appeler une GitHub action depuis une action composite.

Les actions composite sont devenues bcp plus intéresante.

##==##

# Composite action | Use it

<!-- .slide: class="with-code max-height" -->

<br>

```yaml
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: org/publish-docker@v1
        with:
          registry_username: registry
          registry_password: password
```

<!-- .element: class="big-code" -->

Notes: **Antoine** (36:58:24)

Et ici on va appeler cette github action comme une GitHub action classique.

⚠️ **Next Speaker** Romain
