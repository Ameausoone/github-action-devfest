

# Github-slug-action

![marketplace h-800 center](./assets/images/github-slug-action.png)

Notes:

##==##

# Slug-action | What purpose ? 
<br><br>

## [How to get current branch within github actions ?](https://stackoverflow.com/questions/58033366/how-to-get-current-branch-within-github-actions/58730805#58730805)

![marketplace h-500 center](./assets/images/stackoverflow-github-actions.png)

Notes:

##==##

# Slug-action | Solution

```yaml
# Just add this  => 
- name: Inject slug/short variables
  uses: rlespinasse/github-slug-action@v3.x

# And you get this  => 
- name: Print slug/short variables
  run: |
    echo "Slug variables"
    echo " - ${{ env.GITHUB_REF_SLUG }}"    
    echo " - ${{ env.GITHUB_HEAD_REF_SLUG }}"
    echo " - ${{ env.GITHUB_BASE_REF_SLUG }}"
    echo " - ${{ env.GITHUB_REPOSITORY_SLUG }}"
    # output e.g. : master feat-new-feature v1.0.0 product-1.0.0-rc.2 new-awesome-product
    echo "Slug URL variables"
    echo " - ${{ env.GITHUB_REF_SLUG_URL }}"
    echo " - ${{ env.GITHUB_HEAD_REF_SLUG_URL }}"
    echo " - ${{ env.GITHUB_BASE_REF_SLUG_URL }}"
    echo " - ${{ env.GITHUB_REPOSITORY_SLUG_URL }}"
    # output e.g. : master feat-new-feature v1-0-0 product-1-0-0-rc-2 new-awesome-product
    echo "Short SHA variables"
    echo " - ${{ env.GITHUB_SHA_SHORT }}"
    # output e.g. : ffac537e 
```
Notes:

##==##

# Slug-action | Implementation

* Container  


Notes:
