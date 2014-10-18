<article id="slides">
  {% for slide in collections.slides %}
  <section>
    {% autoescape false %}
    {{ slide.contents }}
    {% endautoescape %}
  </section>
  {% endfor %}
</article>
