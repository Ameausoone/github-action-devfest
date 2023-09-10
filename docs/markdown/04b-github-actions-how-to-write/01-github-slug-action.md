# GitHub-slug-action

![marketplace h-800 center](./assets/images/github-slug-action.png)

Notes: Je voulais faire un petit focus sur une GitHub action que je maintiens avec mon collègue Romain Lespinasse.

##==##

# How it started ?

![start h-600 center](./assets/images/twitter-start.png)

Notes: Alors comment ça a commencé ? En fait par un tweet, où j'utilisais GitHub action, et il me manquait une variable d'environnement bien pratique sur Gitlab CI. 

##==##

# Try this

![try h-500 center](./assets/images/twitter-try.png)

Notes: Et du coup, Romain a boostrap une GitHub Action

##==##

# Slug-action | What purpose ?

<br><br>

## [How to get current branch within github actions ?](https://stackoverflow.com/questions/58033366/how-to-get-current-branch-within-github-actions/58730805#58730805)

![marketplace h-500 center](./assets/images/stackoverflow-github-actions.png)

Notes: ça réponds à cette question : comment extraire des variables d'environnement fourni par github, une variable que l'on puisse utiliser facilement dans un pipeline.

##==##

<!-- .slide: class="with-code" -->

# Slug-action | Solution

```yaml
- name: Inject slug/short variables
  uses: rlespinasse/github-slug-action@v3.x

- name: Print slug/short variables
  run: |
    echo "Slug variables"
    echo "   repository          : ${{ env.GITHUB_REPOSITORY_SLUG }}"            # print "rlespinasse-github-slug-action"
    echo "   repository owner    : ${{ env.GITHUB_REPOSITORY_OWNER_PART_SLUG }}" # rlespinasse
    echo "   repository name     : ${{ env.GITHUB_REPOSITORY_NAME_PART_SLUG }}"  # github-slug-action
    echo "   ref                 : ${{ env.GITHUB_REF_SLUG }}"                   # 80-merge
    echo "   head ref            : ${{ env.GITHUB_HEAD_REF_SLUG }}"              # feat-1-demo-branch
    echo "   base ref            : ${{ env.GITHUB_BASE_REF_SLUG }}"              # main
```

Notes: 40:06:24 Vous avez juste à rajouter 2 lignes, et vous allez retrouver toutes ces variables que vous pouvez consommer facilement. vous l'aurez deviné, on est pas sur un projet de Machine Learning, en gros on fait du sed sur des variables d'environnements. C'est basique, mais l'intérêt n'est pas forcèment sur ce que fait cette github action mais plutôt comment elle le fait. 
