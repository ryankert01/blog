---
title: "Setup Github With Git on Windows 11 and WSL 2 (also works in Linux/Mac)"
description: 
date: 2024-03-13T12:01:11+08:00
image: 
---

## Intro

One of the easiest way to connect your Github account with your git installed on Windows is through [Github Desktop](https://desktop.github.com/). Also, this method has a great merit: it's too easy to encounter a bug! lol!

## Steps to setup on Windows 11

1. install [git](https://git-scm.com/downloads) on Windows
2. install [Github Desktop](https://desktop.github.com/)
3. Login your [Github Desktop](https://desktop.github.com/) with your Github account

## install git on WSL 2

1. prerequisites: WSL2, Ubuntu distro
2. if your Ubuntu distro hadn't already install git (which in my case is already installed), or you can install it with 
```bash
sudo apt-get install git
```
3. check git version with
```bash
git --version
```
4. setup git global config
```bash
git config --global user.email "you@example.com"
git config --global user.name "Your Name"
```

## Setup Github credentials (Personal access token)

1. generate personal access token [here](https://github.com/settings/tokens).

    - expiration set to "No expiration"
    - select all access options

![example setup](<Screenshot 2024-03-13 at 12.46.10 PM.png>)

2. click "Generate token" to generate token, copy it
3. update `~/.git-credentials`, add a `:<personal access token>@` in to the file. Can be modify by `nano ~/.git-credientials` or simply `code ~/.git-credentials` (vscode).
3. test: clone, commit and try to push a github repo

```bash
git clone <repo url>
git commit -am "commit name"
git push
```
4. output example:
