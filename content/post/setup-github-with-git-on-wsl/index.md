---
title: "Setup Github With Git on Windows 11 and WSL 2"
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

## Steps to setup on WSL 2

1. prerequisites: WSL2, Ubuntu distro
2. if your Ubuntu distro hadn't already install git (which in my case is already installed), or you can install it with 
```bash
sudo apt-get install git
```
3. check git version with
```bash
git --version
```
4. And Github Desktop will automatically log you in your git in WSL2