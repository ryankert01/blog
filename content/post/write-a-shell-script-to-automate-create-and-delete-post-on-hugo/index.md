---
title: "Write a Shell Script to Automate Create and Delete Post on Hugo"
description: 
date: 2024-03-27T12:22:20+08:00
image: 
hidden: false
comments: true
categories:
    - Hugo
    - Shell Script
tags:  
    - Hugo
    - shell script
---


### The Script Overview

The script provided allows for easy creation and deletion of blog posts with Hugo, a popular static site generator. By passing different flags and the title of your blog post as arguments, you can quickly manage your content without directly interacting with the file system or Hugo commands.

### Usage

To use this script, you would typically invoke it from the command line with the appropriate flags and arguments. For example, to create a post titled "My First Blog Post," you would run:

```bash
./post.sh -c blog-post
```

And to delete a post with the same title, you would use:

```bash
./post.sh -d blog-post
```

### The Script

```sh
#!/usr/bin/env bash
#

while test $# -gt 0; do
  case "$1" in
    -h|--help)
    echo "Usage: $package [options] application [arguments]"
    echo " "
    echo "Options:"
    echo "-h, --help                Show brief help"
    echo "-c, --create              Create a new post"
    echo "-d, --delete              Delete an existing post"
    exit 0
      ;;
    -c|--create)
      shift
      if [[ -n $1 ]]; then
        echo "creating post $1..."
        hugo new content/post/$1/index.md
        echo "post $1 created."
      else
        echo "no post name specified"
        exit 1
      fi
      shift
      ;;
    -d|--delete)
      shift
      if [[ -n $1 ]]; then
        rm -r content/post/$1
        echo "post $1 deleted."
      else
        echo "no post directory specified"
        exit 1
      fi
      shift
      ;;
    *)
      break
      ;;
  esac
done
```

### file header `#!/usr/bin/env bash`

The script starts with a shebang line `#!/usr/bin/env bash` that specifies the interpreter to use for executing the script. This line is essential for running the script as an executable file. (happy running in zsh)


### Understanding `while test $# -gt 0;`

The script begins with a `while` loop that continues as long as there are arguments passed to the script (`$#` is greater than 0). `$#` is a special parameter in shell scripts that represents the number of arguments passed to the script. This loop allows the script to process multiple arguments sequentially, making it versatile and robust for different use cases.

### `shift` and Argument Processing

Within the loop, we use the `shift` command to shift the arguments passed to the script. This command moves the positional parameters (`$1`, `$2`, etc.) to the left, effectively removing the first argument. This is crucial for processing different flags and arguments in the script.

### How `case` Works

Inside the `while` loop, we encounter a `case` statement. This statement is used for pattern matching. It takes the first argument passed to the script (`$1`), compares it against several patterns (`-h`, `--help`, `-c`, `--create`, `-d`, `--delete`), and executes the corresponding block of code based on the match.

- **Help (`-h`, `--help`)**: Displays usage information and exits. This is crucial for any script, providing users with guidance on how to use the tool.
- **Create (`-c`, `--create`)**: Shifts to the next argument (the title of the post) and uses Hugo's `new` command to create a new post. If no title is provided, it exits with an error.
- **Delete (`-d`, `--delete`)**: Similar to create, but instead deletes the specified post directory using `rm -r`.

### The Conditional `if [[ -n $1 ]]; then`

Within both the create and delete blocks, there's a conditional statement `if [[ -n $1 ]]; then` that checks if the first argument (after shifting, which would be the title of the post or the post directory) is non-empty. `-n $1` returns true if `$1` has a non-zero length. This check ensures that the script doesn't attempt to create or delete a post without a specified title or directory, which could lead to errors or unintended behavior.

