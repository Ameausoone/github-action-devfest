<!-- .slide: class="transition sfeir-bg-red" -->

# How to write a Github action

##==##

# Two ways :

<br><br>

- ![docker h-50](./assets/images/docker-logo.png) Container action
- ![typescript h-50](./assets/images/ts-logo.png) Typescript action (or Javascript)
- and now : new Composite action !
- Github provides templates on [github.com/actions](https://github.com/actions)
<!-- .element: class="list-fragment" -->

Notes: 2 types de github action : javascript action ou une container action. Pour ces 2 types, il existe des templates pour ne pas partir de zéro que vous trouverez sur github.com/actions

##==##

# Container action

- Based on a docker image + your shell script
- Very easy to start with
- Interact with workflow by shell api
<!-- .element: class="list-fragment" -->

<!-- * Only compatible with Linux Host
- A fewer longer to start -->

Notes: 33:50:24 il existe également un template pour faire une action basée sur un container, attention compatible actuellement que avec les runners Linux, c'est également un peu plus long à démarrer qu'une action Javascript. 2 exemples de Github action

##==##

# Container action : 1/3

<!-- .slide: class="with-code" -->

`Dockerfile`

```Dockerfile
FROM alpine:3.10

COPY LICENSE README.md /

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Container action : 2/3

`entrypoint.sh`

```shell
#!/bin/sh -l

echo "hello $1"
```

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code max-height" -->

# Container action : 3/3

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

##==##

# (Type|Java)script action

<br><br>

- Run natively on host
- Perfect for interact with API
- Recommended choice
<!-- .element: class="list-fragment" -->

<!-- * Faster than container action
- Run on every runner -->

Notes: Une action de type Javascript s'éxécute nativement sur la vm, vous pouvez l'écrire en javascript ou en typescript. C'est plutôt l'action privilégié par Github. Si vous avez besoin d'intéragir avec une API, c'est le choix idéal. ... Il y a d'ailleurs 2 librairies npm disponibles

##==##

# Main npm libraries

<br><br>

- @actions/core => interact with Github action workflow(inputs,env var, etc)
- @actions/github => interact with Github API
- @actions/exec => execute local process
<!-- .element: class="list-fragment" -->

Notes: core qui permets de travailler avec l'api de Github Actions, et github pour intéragir avec l'api Github. Mais évidemment, et c'est tout l'intérêt, vous pouvez importer n'importe quelle librairie npm.

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

Notes: 36:58:24
