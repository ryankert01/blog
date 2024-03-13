---
title: "Setup Github With Git on Windows 11 and WSL 2 (also works in Linux)"
description: 
date: 2024-03-13T12:01:11+08:00
image: 
---

## Intro

One of the easiest way to connect your Github account with your git installed on Windows is through [Github Desktop](https://desktop.github.com/). But, we can't use that on wsl, so we use PAT(personal access token) to resolve this issue!

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
4. 
5. test: clone, commit and try to push a github repo

```bash
git clone <repo url>
git add *
git commit -am "commit name"
git push
```
4. output example:
```
$ git add *
$ git commit -am "init"
[master 563c3a8] init
 1 file changed, 3 insertions(+), 16 deletions(-)
$ git push
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 20 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 608 bytes | 101.00 KiB/s, done.
Total 6 (delta 5), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To https://github.com/ryankert01/blog.git
   af6a1b1..563c3a8  master -> master
```