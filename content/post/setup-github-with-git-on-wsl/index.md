---
title: "Setup Github With Git using Github CLI"
description: setup github account with git, and gpg key, in Ubuntu, WSL 2 and Windows 11, using Github CLI
date: 2024-03-13T12:01:11+08:00
image: image.png
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

## install Github CLI

1. download and install Github CLI following [this tutorial](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git#github-cli). In Ubuntu, you can install it with [apt](https://github.com/cli/cli/blob/trunk/docs/install_linux.md#debian-ubuntu-linux-raspberry-pi-os-apt).

2. login in the Github website

```bash
gh auth login
```

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

## Get verified tag ever when you commits

![github verified tag](image-1.png)



1. **Generate a GPG Key:**

   Open a terminal and generate a new GPG key pair:

   ```sh
   gpg --full-generate-key
   ```

   Follow the prompts to create your key. Choose the following options when prompted:
   - Select kind of key: `(1) RSA and RSA (default)`
   - Key size: `4096`
   - Key expiration: `0` (never expires)

2. **List Your GPG Keys:**

   After generating your key, you can list your keys to get the key ID:

   ```sh
   gpg --list-secret-keys --keyid-format LONG
   ```

   Look for the `sec` section and note down the `long key ID`.

3. **Copy Your GPG Key:**

   Use the `long key ID` to copy your GPG key:

   ```sh
   gpg --armor --export <your-long-key-id> > my-gpg-key.asc
   ```
4. **add GPG key to Github account**


   Use the File Path with GitHub CLI:

   Now, you can use the file path with GitHub CLI:

   ```sh
   gh gpg-key add my-gpg-key.asc
   ```
   Yes, you can use GitHub CLI (gh) to simplify the process of adding your GPG key to GitHub. Here are the steps to do so:



5. **Configure Git to Sign Your Commits:**

   Configure Git to use your GPG key for signing commits:

   ```sh
   git config --global user.signingkey <your-long-key-id>
   git config --global commit.gpgSign true
   ```

6. **Make and Sign a Commit:**

   Make a new commit and push it to GitHub. The commit should be signed automatically if you enabled commit signing by default:

   ```sh
   git commit -m "Your commit message"
   git push
   ```

   To manually sign a commit, use the `-S` flag:

   ```sh
   git commit -S -m "Your commit message"
   ```

These steps leverage GitHub CLI to streamline the process of adding your GPG key to GitHub and configuring Git to sign your commits.

## Reference

[Git GPG Setup for macOS](https://hackmd.io/@kolyasapphire/H1ESwImjY)
