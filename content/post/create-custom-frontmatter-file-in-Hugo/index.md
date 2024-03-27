---
title: "Create Custom Frontmatter File in Hugo"
description: "Create Custom Frontmatter File in Hugo"
date: 2024-03-27T11:42:24+08:00
image: 
hidden: false
comments: true
categories:
    - Hugo
tags:  
    - Hugo
    - Frontmatter
---

## Intro

Frontmatter in Hugo is a block of YAML, TOML, or JSON at the beginning of a content file that contains metadata about the content. By default, Hugo provides a default frontmatter template for new content files. However, you can create a custom frontmatter file in Hugo by defining a custom archetype file.

In this tutorial, you will learn how to create a custom frontmatter file in Hugo.

## Method

1. Create a new archetype file `./archetypes/default.md` in your Hugo project.
2. Define the custom frontmatter template in the archetype file.

## Example

```yaml
---
title: "{{ replace .Name "-" " " | title }}"
description: 
date: {{ .Date }}
image: 
hidden: false
comments: true
---
```