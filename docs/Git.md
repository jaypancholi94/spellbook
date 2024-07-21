# Git
Picture this: you're a developer without Git. It's like being a pirate without a parrot—utterly incomplete and slightly less cool. Git, the unsung hero of the coding universe, is here to save the day. In this journey, we'll uncover why Git is every developer's secret weapon, the Gandalf 🧙‍♂️ to your Frodo 🌋 on your quest for version-controlled glory. So, prepare for a whimsical ride through commits 📜, branches 🌿, and 'git blame' comedy 😄 – Git, the tool you never knew you couldn't live without! 😎🚀👨‍

## ⚙ Installation
::: code-group
```zsh[Homebrew]
brew install git
```
```zsh[Ubuntu]
apt-get install git
```
:::
## 🛠 Setup
Configuring user information used across all local repositories
```zsh
git config --global user.name “[firstname lastname]”
```
*Set a name that is identifiable for credit when review version history* 
```zsh
git config --global user.email “[valid-email]”
```
*Set an email address that will be associated with each history marker* 
```zsh
git config --global color.ui auto
``` 
*Set automatic command line coloring for Git for easy reviewing*

### Init
Configuring user information, initializing and cloning repositories
```zsh
git init
``` 
*Initialize an existing directory as a Git repository*
```zsh
git clone [url]
``` 
*Retrieve an entire repository from a hosted location via URL*

### Stage & Snapshot
Working with snapshots and the Git staging area
```zsh
git status
```
*Show modified files in working directory, staged for your next commit*
```zsh
git add [file]
```
*Add a file as it looks now to your next commit (stage)*
```zsh
git reset [file]
```
*Unstage a file while retaining the changes in working directory*
```zsh
git diff
```
*Diff of what is changed but not staged*
```zsh
git diff --staged
```
*Diff of what is staged but not yet commited*
```zsh
git commit -m “[descriptive message]”
```
*Commit your staged content as a new commit snapshot*

### Branch & Merge
Isolating work in branches, changing context, and integrating changes
```zsh
git branch
```
*List your branches. a * will appear next to the currently active branch*
```zsh
git branch [branch-name]
```
*Create a new branch at the current commit*
```zsh
git checkout
```
*Switch to another branch and check it out into your working directory*
```zsh
git merge [branch]
```
*Merge the specified branch’s history into the current one*
```zsh
git log
```
*Show all commits in the current branch’s history*
### Inspect & Compare
Examining logs, diffs and object information
```zsh
git log
```
*Show the commit history for the currently active branch*
```zsh
git log branchB..branchA
```
*Show the commits on branchA that are not on branchB*
```zsh
git log --follow [file]
```
*Show the commits that changed file, even across renames*
```zsh
git diff branchB...branchA
```
*Show the diff of what is in branchA that is not in branchB*
```zsh
git show [SHA]
```
*Show any object in Git in human-readable format*

### Tracking Path Changes
Versioning file removes and path changes
```zsh
git rm [file]
```
*Delete the file from project and stage the removal for commit*
```zsh
git mv [existing-path] [new-path]
```
*Change an existing file path and stage the move*
```zsh
git log --stat -M
```
*Show all commit logs with indication of any paths that moved*

### Ignoring Patterns
Preventing unintentional staging or commiting of files
```
logs/
*.notes
pattern*/
```
*Save a file with desired patterns as .gitignore with either direct string matches or wildcard globs.*
```zsh
git config --global core.excludesfile [file]
```
*System wide ignore pattern for all local repositories*
### Share & Update
Retrieving updates from another repository and updating local repos
```zsh
git remote add [alias] [url]
```
*Add a git URL as an alias*
```zsh
git fetch [alias]
```
*Fetch down all the branches from that Git remote*
```zsh
git merge [alias]/[branch]
```
*Merge a remote branch into your current branch to bring it up to date*
```zsh
git push [alias] [branch]
```
*Transmit local branch commits to the remote repository branch*
```zsh
git pull
```
*Fetch and merge any commits from the tracking remote branch*
### Rewrite History
Rewriting branches, updating commits and clearing history
```zsh
git rebase [branch]
```
*Apply any commits of current branch ahead of specified one*
```zsh
git reset --hard [commit]
```
*Clear staging area, rewrite working tree from specified commit*
### Temporary Commits
Temporarily store modified, tracked files in order to change branches
```zsh
git stash
```
*Save modified and staged changes*
```zsh
git stash list
```
*List stack-order of stashed file changes*
```zsh
git stash pop
```
*Write working from top of stash stack*
```zsh
git stash drop
```
*Discard the changes from top of stash stack*

##  🫠Overwhelmed?
If all those features seem a bit overwhelming, then [[LazyGit]] is your go-to terminal-based UI project. Because, obviously, who wouldn’t want to streamline their Git experience to the point where it practically does everything for you? 😅🚀