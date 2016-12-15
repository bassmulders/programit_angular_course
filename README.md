# ProgramIT - Angular Course

## Prerequisites

Node.js and npm are essential to Angular development. To ensure proper working, install NodeJS v6.9.2 and nom 3.10.9. To check this, type in a terminal/console 
window `node -v` and `npm -v`.
 
<a href="https://nodejs.org/en/" target="_blank" title="Link to NodeJS page">Node JS</a>

<a href="https://nodejs.org/download/release/v6.9.2/node-v6.9.2-x64.msi" target="_blank" title="Microsoft Installer 64 bit v6.9.2">Microsoft Installer</a>      

## Create a new project

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone https://github.com/FaerieRose/programit_angular_course.git  my-proj
cd my-proj
```

As you cannot change the source folder on GitHub, discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  # non-Windows
rd .git /S/Q # windows
```

### Create a new git repo

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the on GitHub.

Grab its address (e.g. *`https://github.com/<git-name>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
## Install npm packages

```bash
npm install
npm start
```
A new empty window will be displayed in your browser. Now we will start adding code.

## Notes

This is a simplified version of the <a href="https://github.com/angular/quickstart.git" target="_blank" title="QuickStart project">QuickStart project</a> that was cloned on 
14-Dec-2016. Angular dependencies are version 2.3.0. All elements for testing have been removed. 


