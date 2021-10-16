

# Github-slug-action

![marketplace h-800 center](./assets/images/github-slug-action.png)

Notes:

##==##

# How it started ? 

![start h-600 center](./assets/images/twitter-start.png)


Notes:

##==##

# Try this

![try h-500 center](./assets/images/twitter-try.png)


Notes:

##==##

# Slug-action | What purpose ? 
<br><br>

## [How to get current branch within github actions ?](https://stackoverflow.com/questions/58033366/how-to-get-current-branch-within-github-actions/58730805#58730805)

![marketplace h-500 center](./assets/images/stackoverflow-github-actions.png)

##==##
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

Notes: TODO

