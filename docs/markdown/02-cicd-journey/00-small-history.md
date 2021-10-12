<!-- .slide: class="transition sfeir-bg-red" -->

# A CICD Journey

Notes: 1:46:40 Alors je voulais centrer ma présentation sur l'expérience que les développeurs, et comment Github Actions, à mon avis, facilite le travail des développeurs et des DevOps. Pour comprendre l'expérience actuel que les développeurs ont avec la CICD, je voulais d'abord refaire un petit historique de la CICD de ses 10 dernière années, et j'aimerais savoir si vous l'avez ressenti comme moi ? 

##==##
<!-- .slide: class="full-center" -->
# First : Jenkins

![Jenkins Form h-700 center](./assets/images/jks-create-job.png)

Notes: D'abord on a eu Jenkins avec de l'intégration continue, et c'était déjà cool : on commit, ça lance le build, les tests unitaires, automatiquement ! ça devenait vraiment intéressant de faire des tests unitaires. Puis on s'est dit, c'est cool maintenant on voudrait automatiser les prochaines étapes, comme déployer sur la dév par exemple...Alors pour nous faciliter, on a commencé à avoir des plugins.

##==##

# Then plugins...
![Plugins h-400 center](./assets/images/jks-rundeck-config.png)

* Rundeck
* Docker Swarm
* Ansible
* ...
<!-- .element: class="list-fragment" -->

Notes: OK là aussi c'est cool, ça nous facilite la vie, on a toutes les options de ansible dans un formulaire, c'est intégré. ...Mais maintenant on voudrait déployer sur la qa, mais seulement si je suis sur la branche master, et vérifier que sonar est ok et que mes tests passent, mais pour les tests d'intégration c'est seulement le nuit et je voudrais faire ça sur tous mes projets tant qu'à faire.

##==##
# And ... Shell !
<!-- .slide: class="big-code" -->

```shell script
#!/usr/bin/env bash

# Exit on error. Append "|| true" if you expect an error.
set -o errexit
# Exit on error inside any functions or subshells.
set -o errtrace
# Do not allow use of undefined vars. Use ${VAR:-} to use an undefined VAR
set -o nounset
# Catch the error in case mysqldump fails (but gzip succeeds) in `mysqldump |gzip`
set -o pipefail
# Turn on traces, useful while debugging but commented out by default
# set -o xtrace

# Set magic variables for current file, directory, os, etc.
__dir="$(cd "$(dirname "${BASH_SOURCE[${__b3bp_tmp_source_idx:-0}]}")" && pwd)"
__file="${__dir}/$(basename "${BASH_SOURCE[${__b3bp_tmp_source_idx:-0}]}")"
__base="$(basename "${__file}" .sh)"
# shellcheck disable=SC2034,SC2015
__invocation="$(printf %q "${__file}")$( (($#)) && printf ' %q' "$@" || true)"

arg1="${1:-}"
``` 

Notes: Alors on a souvent ajouté du shell, pour parser du texte, extraire un commit, urlisé une branche, etc. Avec une couche de jq, de regex, et de curl, et quand un dév avait un bug là dedans, bon on appelle son devops préféré, parce que évidemment, c'est lui qui maîtrise. Alors encore une fois c'est cool mais maintenant j'ai des pipelines complexes, mais pour les maintenir sur tous mes projets, ça commence à être galére. ...Du coup...

##==##

# And... Pipeline As Code

* `Jenkinsfile`
* `.travis.yml`
* `.gitlab-ci.yml`
* `.circleci/config.yml`
<!-- .element: class="list-fragment" -->

Notes: Ok on va écrire notre pipeline, et maintenant je peux mettre des conditions, parser des variables d'environnement en groovy. Ajouter des conditions complexes mieux intégré. ... Et là dessus, on va rajouter une petite couche. 


##==##
<!-- .slide: class="with-code" -->
# So.. shared libraries and pipelines 

<br>
<br>

```yaml
[...]
include
[...]
```
<!-- .element: class="big-code" -->

Notes: On va faire une librairie qui va contenir nos pipelines, et on les importe, dans notre projet. ... Problème néanmoins : quand on fait une modif sur le pipeline, on le réplique automatiquement sur tous les autres projets. Alors autre problème qui s'est vite posé: c'est que en réutilisant les mêmes runners, on a régulièrement des problèmes de conflit, de version de jdk, de node. ... Solution : 

##==##

# But we need isolation !

<br><br>

# mmmm Docker !

Notes: on va faire tourner nos jobs dans des conteneurs docker, du coup, on a plus d'indépendances entre nos pipelines. On a des images docker avec tous ce qu'il nous faut. Alors tant qu'on utilise un seul outil à la fois, quand on commence à avoir besoin de gcloud avec terraform, avec vault avec curl, avec différentes versions, on commence à avoir une matrice d'image docker. ... Et à la fin, nos chères développeurs se retrouvent avec : 

##==##
<!-- .slide: class="with-code" -->
# And finally developers get this ... 

```.gitlab-ci.yaml```
```yaml
include:
  - project: 'shared-libraries'
    ref: master
    # Try to touch this !
    file: 'complexe-pipeline-used-by-a-lot-of-projects.yml'
```

<!-- .element: class="big-code" -->

Notes: et donc pour les développeurs, quand ils veulent rajouter une étape au pipeline, ou changer la version de node...
