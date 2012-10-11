codeNblog part1
===============

Prerequisites
-------------

*  Install [node.js 0.8.x](http://nodejs.org/)
*  Install [npm](https://blog.nodejitsu.com/npm-cheatsheet)
*  Install [express 3.x](http://expressjs.com/guide.html)  
  *  `npm install express`  

Overview
--------  
I am going to cover how to build a blog using `express`.  
To follow along you can either clone this repo or DIY following the steps outlined in the branches.  
Do `git checkout part1` , `git checkout part2` etc. to follow along.


Does it work?
-------------
`cd` into `codeNblog` and run `node app.js`.  
Everything is `ok` is you see `Express server listening on port 3000`.  
Now open your browser and hit `http://localhost:3000`  

Notes
-----  
Running `express <projectName>` produced a variety of files and folders.  
The framework helps in getting things up & running quickly.  
Make sure to readup on [express](http://expressjs.com/).  
</br>
Also you may want to install `nodemon` to make starting/stopping the server easier.  
Basically, start the server once and any edits to the files are updated by `nodemon` and the server restarts with the modifications automatically.  
Run the command `npm install nodemon -g`
