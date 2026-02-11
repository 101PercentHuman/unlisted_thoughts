---
title: ""
url: "/not_found.html"
layout: "not_found"
draft: false
publishDate: 2026-01-01
type: "page"
outputs: ["HTML"]
menu: ""
tags: []
hidden: true

---
{{ define "header" }}
{{ partial "page-header.html" . }}
{{ end }}

{{ define "main" }}
<meta http-equiv="refresh" content="0; url=/404.html">
<div>
  <p>If you are not redirected, click <a href="/404.html">here</a>.</p>
</div>
{{ end }}
