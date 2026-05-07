# Hey there, this is my website covering WWII propaganda, here are some things that I would like to share/note about this project.

The original assignemnt was to create a website on any topic that fulfilled criteria aligned with the Foundations of Computer Science course at Stuyvesant High school. 

This is also, funny enough, my first website.. EVER.
To make this website, my goal in mind was to learn javascript and the DOM api, and I learned a LOT safe to say. 

##NOTE: 
### this was a group project but this ENTIRE website was made by me. My group and I designed a slideshow and this website is based off of that.


## What I learned from this project:
Aside from learning the general ins and outs of Javascript and its syntax, I learned

  about different global variables that go with the Window object, ie scrollY, innerHeight, and etc
  how to use the document object to select certain items part of classes or with certain ids
  how to create animations inside of Javascript.
  about EventListeners and the Events interface.
  to use the block strings in a wider context
  how to make 3 dimensional transitions in CSS using perspective and transform-origin
  how to be more comfortable with CSS and animate anything 2 dimensional I want (i became really fast at using a bunch of divs, flex, and then making stuff like vertical or horizontal animations/effects, like with text)

Some of my commit messages have more stuff that I learned that I cannot think of at the time

## Looking ahead:

This website in terms of its content is fully complete, however, being that this is my first website there are some formatting issues. If you see the 'Radio' section, I implemented a fix there and it seems to be working but it is a work in progress.

Optimizations to be made include:
  implementing a sizing fix to ALL webpages using information about the display (screen.width, screen.height).
      This is what is partially implemented in Radio_Shows's info.js, but it is less reliable than I'd hoped and I need to think through the solution more

  cleaning up the code (yikes)
      There is a bit of renaming to do (to better describe what the file actually does).
      I set up (i think) too many event listeners listening on very tight loops (100ms) and I think that causes a lot of lag in the website
      deletion of irrelevant material ie images. My goal in mind is to make the images folder a GLOBAL folder, instead of one in each folder to avoid repitiion.

  Converting the javascript to OOP
    if you look in the Music folder. You will notice I use (a very simple implementation of) object oriented programming through the Slide.js. I export it into music.js 
        one thing I will note on OOP, I really find how you need to make the type "module" and the exporting and importing thing really cool.
        

### Overall synopsis:

Throughout the course of this project I essentially learned the ins and outs of the DOM api and javascript syntax (though to be completely honest I didn't get past the bottom half of Advanced on w3schools - which is probably the most important part (but I will try to get to it later!)),
and although unimplemented in this repo, I learned about three.js and imorting cad files into it. I initially wanted to implement a bullet spinning 3d animation (rotating it about its roll or Z axis) and I did so successfully but I didn't want to deal with ALL of the optimizations. But I learned about the importance
of using its lighting classes and etc, so that is something to come back to and I heard freeCodeCamp has a course on three.js. 

I am really excited to, when time frees up, actually finish up this project and see what it can amount to in total.
