#!/bin/bash

set -e
git add dist -f
git commit -m "deploy"
git subtree push --prefix dist origin gh-pages