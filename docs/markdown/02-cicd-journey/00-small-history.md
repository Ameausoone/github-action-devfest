<!-- .slide: class="transition sfeir-bg-red" -->

# a small Continuous Integration History 

Notes: 1:46:40 Alors je voulais centrer ma présentation sur l'expérience que les développeurs, et comment Github Actions, à mon avis, facilite le travail des développeurs et des DevOps. Pour comprendre l'expérience actuel que les développeurs ont avec la CICD, je voulais d'abord refaire un petit historique de la CICD de ses 10 dernière années, et j'aimerais savoir si vous l'avez ressenti comme moi ? 

##==##
<!-- .slide: class="full-center" -->
# First Jenkins

![Jenkins Form](./assets/images/jks-create-job.png)

Notes: D'abord on a eu Jenkins avec de l'intégration continue, et c'était déjà cool : on commit, ça lance le build, les tests unitaires, automatiquement ! ça devenait vraiment intéressant de faire des tests unitaires. Puis on s'est dit, c'est cool maintenant on voudrait automatiser les prochaines étapes, comme déployer sur la dév par exemple...Alors pour nous faciliter, on a commencé à avoir des plugins.

##==##

# Then plugins 
![Plugins](./assets/images/jks-rundeck-config.png)

* Rundeck
* Docker Swarm
* Ansible

Notes: OK là aussi c'est cool, ça nous facilite la vie, on a toutes les options de ansible dans un formulaire, c'est intégré. ...Mais maintenant on voudrait déployer sur la qa, mais seulement si je suis sur la branche master, et vérifier que sonar est ok et que mes tests passent, mais pour les tests d'intégration c'est seulement le nuit et je voudrais faire ça sur tous mes projets tant qu'à faire.

##==##
# And ... Shell !
<!-- .slide: class="big-code" -->

```shell script
wget -qO- http://mywebsite.com/ |
grep -Eoi '<a [^>]+>' | 
grep -Eo 'href="[^\"]+"' | 
grep -Eo '(http|https)://[^/"]+'
``` 

Notes: Alors on a souvent ajouté du shell, pour parser du texte, extraire un commit, urlisé une branche, etc. Avec une couche de jq, de regex, et de curl, et quand un dév avait un bug là dedans, bon on appelle son devops préféré, parce que évidemment, c'est lui qui maîtrise. Alors encore une fois c'est cool mais maintenant j'ai des pipelines complexes, mais pour les maintenir sur tous mes projets, ça commence à être galére. ...Du coup...

##==##

# And... Pipeline As Code

* `Jenkinsfile`
* `.travis.yml`
* `.gitlab-ci.yml`

Notes: Ok on va écrire notre pipeline, et maintenant je peux mettre des conditions, parser des variables d'environnement en groovy. Ajouter des conditions complexes mieux intégré. ... Et là dessus, on va rajouter une petite couche. 


##==##

# So.. shared libraries and pipelines 
<!-- .slide: class="big-code" -->
```yaml
[...]
include
[...]
```

Notes: On va faire une librairie qui va contenir nos pipelines, et on les importe, dans notre projet. ... Problème néanmoins : quand on fait une modif sur le pipeline, on le réplique automatiquement sur tous les autres projets. Alors autre problème qui s'est vite posé: c'est que en réutilisant les mêmes runners, on a régulièrement des problèmes de conflit, de version de jdk, de node. ... Solution : 

##==##

# But we need isolation !

mmmm Docker !

Notes: on va faire tourner nos jobs dans des conteneurs docker, du coup, on a plus d'indépendances entre nos pipelines. On a des images docker avec tous ce qu'il nous faut. Alors tant qu'on utilise un seul outil à la fois, quand on commence à avoir besoin de gcloud avec terraform, avec vault avec curl, avec différentes versions, on commence à avoir une matrice d'image docker. ... Et à la fin, nos chères développeurs se retrouvent avec : 

##==##

# And finally developers get this ... 
<!-- .slide: class="big-code" -->
.gitlab-ci.yml
```yaml
include:
  - project: 'my-shared-libraries'
    ref: master
    file: 'complexe-pipeline.yml'
```

Notes: et donc pour les développeurs, quand ils veulent rajouter une étape au pipeline, ou changer la version de node...
