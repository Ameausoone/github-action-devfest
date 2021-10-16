<!-- .slide: class="transition sfeir-bg-red" -->

# Or ... a "Github Action"

Notes: 19:33:20

##==##
<!-- .slide: class="with-code" -->
# Use a Github Action
<br>

```yaml
steps:
  - name: Checkout code
    uses: actions/checkout@v2

  - name: Install Node.js
    uses: actions/setup-node@v1
```
<!-- .element: class="big-code" -->

Notes: Il s'agit de déléguer une étape d'un pipeline a une github action, et c'est là que Github action devient très intéressant..... Alors, qu'est-ce qu'une Github Action ? 

