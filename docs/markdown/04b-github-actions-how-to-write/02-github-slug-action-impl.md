# Slug-action | 1st Implementation

# Container action
```shell
#!/bin/sh -l
slug_ref() {
  echo "$1" |
    tr "[:upper:]" "[:lower:]" |
    sed -r 's#refs/[^\/]*/##;s/[~\^]+//g;s/[^a-zA-Z0-9]+/-/g;s/^-+\|-+$//g;s/^-*//;s/-*$//' |
    cut -c1-63
}
short_sha() {
  echo "$1" |
    cut -c1-8
}
{
  echo "GITHUB_REF_SLUG=$(slug_ref "$GITHUB_REF")"
  echo "GITHUB_HEAD_REF_SLUG=$(slug_ref "$GITHUB_HEAD_REF")"
  echo "GITHUB_BASE_REF_SLUG=$(slug_ref "$GITHUB_BASE_REF")"
  echo "GITHUB_SHA_SHORT=$(short_sha "$GITHUB_SHA")"
} >>"$GITHUB_ENV"
```
Notes:

##==## 

# Slug-action | Issue

![issue h-400 center](./assets/images/issue-other-os.png)

##==##

# Slug-action | PR 

![pr h-400 center](./assets/images/issue-os-pr.png)

##==##

# Slug-action | Merged

![merged h-600 center](./assets/images/twitter-merge-os-pr.png)

##==##

# Slug-action | Result

![search h-600 center](./assets/images/github-code-search.png)

##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Action | 3 advises to write an action

Notes:

##==##

# Advise | Find ...

# a simple use case

Notes: 

##==##

# Advise | Semantic

* Use semantic versioning
* Use semantic branching

![default h-100 center](./assets/images/github-default-branch.png)
![stale h-150 center](./assets/images/github-stale-branches.png)

##==##

# Documentation

![rtfm h-500 center](./assets/images/RTFM.png)

