#!/bin/sh
npm install
npm run prettier
rm post-generate.sh .openapi-generator-ignore package-lock.json

git_user_id=$1
git_repo_id=$2
release_note=$3
branch_suffix=$4

if [ "$git_user_id" = "" ]; then
    git_user_id="AIOZNetwork"
    echo "[INFO] No command line input provided. Set \$git_user_id to $git_user_id"
fi

if [ "$git_repo_id" = "" ]; then
    git_repo_id="w3stream-go-client"
    echo "[INFO] No command line input provided. Set \$git_repo_id to $git_repo_id"
fi

if [ "$release_note" = "" ]; then
    release_note="Minor update"
    echo "[INFO] No command line input provided. Set \$release_note to $release_note"
fi

if [ "$branch_suffix" = "" ]; then
    branch_suffix=$(date +%Y%m%d_%H%M%S)
    echo "[INFO] No branch name provided. Using timestamp: $branch_suffix"
else
    echo "[INFO] Using provided branch suffix: $branch_suffix"
fi

git add .

git commit -m "$release_note"

branch_name="w3stream/$branch_suffix"
git checkout -b $branch_name main

echo "Git pushing to git@github.com:${git_user_id}/${git_repo_id}.git"
git push -u origin $branch_name

echo "New branch '$branch_name' has been created and pushed to remote repository"
echo "Branch URL: https://github.com/${git_user_id}/${git_repo_id}/tree/$branch_name"