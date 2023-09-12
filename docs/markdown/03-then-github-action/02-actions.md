<!-- .slide: class="transition sfeir-bg-red" -->

# Or ... a "GitHub Action"

Notes: **Romain** (19:33:20)

Mais le plus intéressant

##==##
<!-- .slide: class="with-code" -->
# Use a GitHub Action
<br>

```yaml
steps:
  - name: Checkout code
    uses: actions/checkout@v4

  - name: Install Node.js
    uses: actions/setup-node@v3
```
<!-- .element: class="big-code" -->

Notes: **Romain**

Il s'agit de déléguer une étape d'un workflow à une GitHub action.

Alors, qu'est-ce qu'une GitHub Action ?
