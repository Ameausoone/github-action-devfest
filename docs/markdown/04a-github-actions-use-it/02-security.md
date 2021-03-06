<!-- .slide: class="transition sfeir-bg-red" -->

# Security

Notes: 36:26:40 Github action est donc très pratique, mais n'est pas exempt de défaut, notamment niveau sécurité, on va voir 2 problèmes notamment.

##==##

# The "left-pad" effect

<br><br>

# What happens if an owner delete his action ?

Notes: que se passe-t-il si le propriétaire supprime une action.

##==##

# The "left-pad" effect | Solution

<br><br>

- Use organization projects
- Fork it in your organization
- A "archived" repo still works
<!-- .element: class="list-fragment" -->

Notes: 24:26:24 ça ne fonctionne plus, si l'action est critique pour vous est qu'elle peut être susceptible d'être supprimé, faites en fork.

##==##

# The "event-stream" effect

<br><br>

# What happens if an maintener mine ![bitcoin h-100](./assets/images/bitcoin-logo.png) with his action ?

Notes: Plus pervers : que se passe-t-il si le propriétaire d'une action, mets à jour son action pour miner du bitcoin sur vos runners, si vous utilisez la branche par défaut, ou une branche, ou même un tag.

##==##

<!-- .slide: class="with-code" -->

# Use (long) commitId

```yaml
- uses: owner/actions@2f05f8b5cbdfb8b37e68426a162be978e4e82550
```

<!-- .element: class="big-code" -->

Notes: Solution : dans ce cas, vous pouvez utiliser le commitId, le court ou le long. Dans ce cas, vous êtes sûr d'utiliser une version fixe de la github action.

##==##

# First-time contributors

<br><br>

## Approve run pipeline for [first-time contributors](https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)

![marketplace](./assets/images/first-time-contributor.png)

Notes: à l'inverse, quand vous maintenez un projet, Désormais, vous devez valider manuellement l'exécution d'un pipeline lorsqu'un contributeur vous propose une PR sur un workflow pour la 1ère fois. 

##==##

<!-- .slide: class="with-code" -->

# Use tag or branch

```yaml
# safe
- uses: owner/repo@v3.x
```

```yaml
# safer
- uses: owner/repo@v2.1.3
```

```yaml
# ultra safe
- uses: owner/repo@v2f05f8b5cbdfb8b37e68426a162be978e4e82550
```

```yaml
# not safe at all
- uses: owner/repo
# use default branch
```

<!-- .element: class="big-code" -->


Notes: voilà je résume ici les différentes possibilités pour appeler une github action, via une branche, un tag, un commitId, ou sur la branche par défaut.

<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code" -->

# Use dependabot

`.github/dependabot.yml`

```yaml
version: 2
updates:
  - package-ecosystem: 'github-actions'
    directory: '/'
    schedule:
      interval: 'daily'
```

<!-- .element: class="big-code" -->

Notes: 27:34:24 Et vous pouvez même utiliser dependabot, pour maintenir vos github actions à jour !

##==##

<!-- .slide: class="with-code" -->

# Checkout

```yaml
- uses: actions/checkout@v2
  with:
    # default : true
    persist-credentials: false
```

<!-- .element: class="big-code" -->

Notes: Par défaut, quand l'action checkout fait un clone de votre repo, la configuration git du workspace permets d'exécuter des commandes git authentifié, donc si vous n'en avez pas besoin d'effectuer, n'hésitez pas à utiliser l'option persist-credentials, pour que votre code soit en "lecture seule".

##==##

<!-- .slide: class="with-code" -->

# GITHUB_TOKEN

<br>

```yaml
[...]
jobs:
  job_id:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v2
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
```

<!-- .element: class="big-code" -->

Notes: pour intéragir avec l'api github, vous avez un TOKEN qui est injecté dans votre pipeline, pour une durée limitée. Pour les PR de repos forké,
le TOKEN a des droits read only.

##==##

# Github token scope

<!-- .slide: class="with-code" -->

<br><br>

```yaml
on: [push]
permissions: read-all
jobs: [...]
```

<!-- .element: class="big-code" -->

Notes: Depuis qques mois, vous pouvez affiner les droits accorder au github token, vous avez 2 permissions basiques read-all et write-all, mais vous pouvez même aller plus loin dans les permissions. 

##==##

<!-- .slide: class="with-code max-height" -->

# Secrets

## Set secrets in your repo settings and inject them in your pipeline.

<br><br>

```yaml
steps:
  - name: Hello world action
    with: # Set the secret as an input
      super_secret: ${{ secrets.SuperSecret }}
    env: # Or as an environment variable
      super_secret: ${{ secrets.SuperSecret }}
```

<!-- .element: class="big-code" -->

Notes: Il y a une gestion des secrets, le principe est assez simple vous spécifiez vos secrets dans les settings de votre repo, puis vous les injecter dans votre pipeline. Automatiquement les secrets seront masqués dans les logs. ➡️ Alors question : qui a déjà enregistré un token sur son poste ou sur un outil de CI pour accéder à une API ? Qui les renouvelle régulièrement ? 

##==##

<!-- .slide: class="with-code max-height" -->

# Use Workload Federation Identity

```yaml
jobs:
  job_id:
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

Notes: 30:42:24 Alors ici une solution encore mal connue mais très intéressante. Cette Github Action développé par Seth Vargo, utilise la fonction de Workload federation identity, ce qui va permettre de connecter l'authentification Google avec un service d'identité qui supporte OpenId connect.
