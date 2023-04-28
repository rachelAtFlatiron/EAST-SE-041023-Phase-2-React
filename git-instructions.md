# Git Instructions

- Fork into your own repo

## I will be making changes to the original repo therefore...

- You need a way to pull changes from the original repo.  In order to do this you will have to add a new remote repository.

## Adding a new remote repository 

- Right now you have one remote repository connected to the forked repo on your account called `origin`.  You can check this by running
```
git remote -v
```

- You can also create a connection between your repo and the original repo by setting a new remote.  We will call this new remote `upstream`.

```
git remote add upstream https://github.com/rachelAtFlatiron/EAST-SE-041023-Phase-2-React
```

- Whenever you want to fetch changes <strong>from my repo</strong> into your forked repo you can run

``` 
git pull upstream <branch-name>
```

Whenever you want to pull or push changes from your forked repo you can run

```
git pull origin <branch-name>
```

```
get push origin <branch-name>
```