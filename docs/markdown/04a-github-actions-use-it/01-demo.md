<!-- .slide: class="transition sfeir-bg-red" -->

# Demo

Notes: Je vais faire une démo dont vous êtes le héro, je vais vous demander de sortir votre lecteur de qrcode.

##==##

# Scan

![How do I h-600 center](./assets/images/qrcode_github.com.png)

##==##

# How do I

![How do I h-600 center](./assets/images/how-do-i-tar.png)

##==##

# How do I 

<!-- .slide: class="with-code max-height" -->

```shell
$ howdoi print stack trace python
> import traceback
>
> try:
>     1/0
> except:
>     print '>>> traceback <<<'
>     traceback.print_exc()
>     print '>>> end of traceback <<<'
> traceback.print_exc()

$ howdoi convert mp4 to animated gif
> video=/path/to/video.avi
> outdir=/path/to/output.gif
> mplayer "$video" \
>         -ao null \
>         -ss "00:01:00" \  # starting point
>         -endpos 10 \ # duration in second
>         -vo gif89a:fps=13:output=$outdir \
>         -vf scale=240:180
```

##==##

# How do I ... [action](https://github.com/marketplace/actions/howdoi-action)

![How do I h-800 center](./assets/images/how-do-i-action.png)
