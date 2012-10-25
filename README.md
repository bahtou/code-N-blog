codeNblog-part2
===============

the Goal
--------
In this part we set up preliminary view pages.  
This helps guide how to setup routes and controllers.  
Things to keep in mind, what information do you want the viewers to see and interact with.

Overview
--------
What is the first thing that a user sees when they hit the URL?

How we render the webpage is very important right now.  Any ideas that we have about how the webpage should look like and how content is to be presented should be upfront here.  

In this part we begin to compartmentalize our work flow.  
A blog landing page is anticipated.  
Profile information of the user should also be displayed in the webpage.  
Other information that we anticipate to add should be taken into consideration and marked into the webpage for reference.  

Notice
------
I added a lot of files.  
The `views` folder is contains new folders `admin`, `blog`, `includes`, and `sAss`.  
Go over the files and see how they mesh together.  Utilize [jade.js](https://github.com/visionmedia/jade#a6-4) to understand the syntax and how `includes` functions.  

The `views` are utilizing [Twitter Bootstrap](http://twitter.github.com/bootstrap/base-css.html#tables) and [jQuery](http://jquery.com/).  

I threw in there a `controllers` files that will take care of triggering the views.  It is good practice to centralize the controllers for easy debugin.  


Notes
-----
I usually start with something visual.
In the next part we'll hook-up the database and rewrite our views to account for the new data.

Coming Up
---------
* hooking up MongoDB
* cleaning up the `views` and displaying user input data