---
layout: page
title: "Calendario"
permalink: /diario/
---

{% assign entries = site.diary | sort: 'date' | reverse %}

<h2>Calendario del Diario</h2>

<ul>
  {% for entry in entries %}
    <li>
      <a href="{{ entry.url }}">{{ entry.title }}</a> - {{ entry.date | date: "%d %B %Y" }}
    </li>
  {% endfor %}
</ul>

