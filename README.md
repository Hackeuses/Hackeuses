# Hackeuses!

## The awesome landing page of our great project Hackeuses!


## Prerequisites:

### install Vuejs
> $ npm install -g vue-cli

### install GitFlow
> $ sudo apt-get install git-flow

## Usage:

### Only the repository creator should: 
> create a local repository with 2 branches: 
>-master
>-develop

### Other contributors should clone the Remote Repository:
>- $ git clone [url_of_the_repository]

### Git Flow
> - $ git flow init

> - Which branch should be used for bringing forth production releases?
> - develop
Branch name for production releases: [] master

> - Which branch should be used for integration of the "next release"?
> -develop
> -Branch name for "next release" development: [develop]   

> -And after said yes to init all of the branch

### Before working on your own branch, you must pull on the "develop" branch to add the update:
>- You must be on the develop branch:
>- $ git pull origin develop

### Work on a branch:
>- $ git flow feature start [nameOfTheBranch]

#### When you finish working on a branch:
>- $ git add . 
>- $ git commit -m "your commit"
>- $ git flow feature finish [nameOfTheBranch]
>- $ git push origin develop

### Launch Vue:
> - $ npm install
> - $ npm run dev


