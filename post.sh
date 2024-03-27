#!/usr/bin/env bash
#
#
# This script is used to create a new blog post file.
#
# Usage: ./new_post.sh <flag> <title>
#
# Arguments:
#   <flag>    The flag to indicate the action to take. Options are: -c, --create, -d, --delete
#   <title>   The title of the blog post.
#
# Example:
#   ./new_post.sh "My First Blog Post"
#
# Author: Ryan Kert
# Date: March 27, 2024
#

chmod +rwx post.sh
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