
##==##
<!-- .slide: class="transition sfeir-bg-red" -->
# Security

Notes: 36:26:40 Github action est donc très pratique, mais n'est pas exempt de défaut, notamment niveau sécurité, on va voir 2 problèmes notamment.

##==##

# The "left-pad" effect

* What happens if an owner delete his action ?

* A "archived" repo still works
* Use organization projects
* Fork it in your organization

Notes: que se passe-t-il si le propriétaire supprime une action. ça ne fonctionne plus, si l'action est critique pour vous est qu'elle peut être susceptible d'être supprimé, faites en fork.

##==##

# The "event-stream" effect

* What happens if an owner mine bitcoin with his action ?

Notes: Plus pervers : que se passe-t-il si le propriétaire d'une action, mets à jour son action pour miner du bitcoin sur vos runners, si vous utilisez la branche par défaut, ou une branche, ou même un tag. 

##==##

# Use (long) commitid

```yaml
- uses: rlespinasse/github-slug-action@2f05f8b5cbdfb8b37e68426a162be978e4e82550
```


Notes: Solution : dans ce cas, vous pouvez utiliser le commitId, le court ou le long. Dans ce cas, vous êtes sûr d'utiliser une version fixe de la github action.

##==##

# Use tag or branch

Use branch TODO

##==##

# Use dependabot

`.github/dependabot.yml`
```yaml
version: 2
updates:
  - package-ecosystem: "github-actions"
    directory: "/"
    schedule:
      interval: "daily"
```

Notes: Et vous pouvez même utiliser dependabot, pour maintenir vos github actions à jour !

##==##

# First time commiter

TODO 

Notes: TODO

##==##

# Checkout

```yaml
- uses: actions/checkout@v2
  with:
    # default : true
    persist-credentials: false
```

Notes: Par défaut, quand l'action checkout fait un clone de votre repo, la configuration git du workspace permets d'exécuter des commandes git authentifié, donc si vous n'en avez pas besoin d'effectuer, n'hésitez pas à utiliser l'option persist-credentials, pour que votre code soit en "lecture seule".

##==##

# GITHUB_TOKEN

```yaml
name: Pull request labeler
on:
- pull_request
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v2
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

Notes: pour intéragir avec l'api github, vous avez un TOKEN qui est injecté dans votre pipeline, pour une durée limitée. Pour les PR de repos forké,
le TOKEN a des droits read only.


##==##

# GITHUB_TOKEN

```yaml
name: Pull request labeler
on:
- pull_request
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v2
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

Notes: pour intéragir avec l'api github, vous avez un TOKEN qui est injecté dans votre pipeline, pour une durée limitée. Pour les PR de repos forké,
le TOKEN a des droits read only.

##==##

# Use scope

```yaml
name: "My workflow"
on: [ push ]
permissions: read-all
jobs:
  [...]
```

##==##

# Secrets

* Set secrets in your repo settings and inject them in your pipeline.

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```

Notes: Il y a une gestion des secrets, le principe est assez simple vous spécifiez vos secrets dans les settings de votre repo, puis vous les injecter dans votre pipeline. Automatiquement les secrets seront masqués dans les logs.

##==##

# Use workload federation identity

```yaml
jobs:
  job_id:
    # ...

    # Add "id-token" with the intended permissions.
    permissions:
      contents: 'read'
      id-token: 'write'

    steps:
    - id: 'auth'
      name: 'Authenticate to Google Cloud'
      uses: 'google-github-actions/auth@v0.3.1'
      with:
        token_format: 'access_token'
        workload_identity_provider: 'projects/123456789/locations/global/workloadIdentityPools/my-pool/providers/my-provider'
        service_account: 'my-service-account@my-project.iam.gserviceaccount.com'

    # Example of using the token:
    - name: 'Access secret'
      run: |-
        curl https://secretmanager.googleapis.com/v1/projects/my-project/secrets/my-secret/versions/1:access \
          --header "Authorization: Bearer ${{ steps.auth.outputs.access_token }}"
```
