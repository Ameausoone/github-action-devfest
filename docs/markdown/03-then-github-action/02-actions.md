<!-- .slide: class="transition sfeir-bg-red" -->

# Or ... a "GitHub Action"

Notes: **Antoine** (19:33:20)

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

Notes: **Antoine**

Il s'agit de déléguer une étape d'un pipeline à une github action, et c'est là que GitHub action devient très intéressant...

Alors, qu'est-ce qu'une GitHub Action ?
