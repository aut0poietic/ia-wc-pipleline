# A Reduced, Native Web Component

 This directory contains an attempt to build a vanilla JS Web Component with
 rollup.
 
 You can rebuild this yourself using `npm run build` and serve it up using `npm run serve`.
 
 ## The Process
 
 This time there is only one source file in `src/ia-card/index.js`. Again, the ia-card directory will eventually
 be the name of the file, but I'm too lazy to make that work yet. I placed the css in my js (counter to the goal)
 and took the time to hand-minify the css as I was fairly sure that rollup couldn't do this for me. Spoilers: I 
 was wrong.
 
 ## Results
  
  | Item | Detail |
  | ---- | ------ |
  | Source JS | 994 B |
  | Source CSS  | N/A |
  | Production Bundle | 848 B |
  
  That is what we, in the small fishing village where I hale from, call a *result*. The file is so small and
  the css already minifed that the uglification was pretty minor, but it's there. 
  
 ### The Problems
   
 #### Hand Minification
   Really, the only issue is that I had to hand minify the CSS and inserted it directly into the JavaScript. 
   To make this work, I'll need a way to work directly in CSS. 
   
 ## Final Words
 
 Turns out, this example is _very_ close and the solution is stupid-simple.
   