# An Reduced, Native Web Component Attempt

 This directory contains an attempt to build a vanilla JS Web Component with
 webpack.

 You can rebuild this yourself using `npm run build` and serve it up using `npm run serve`.
 
 ## The Process
 
 There's not a lot to say for the process as this example is more of a minimal Webpack + WC test case. 
 
 This time there is only one source file in `src/ia-card/index.js`. Again, the ia-card directory will eventually
 be the name of the file, but I'm too lazy to make that work yet. I placed the css in my js (counter to the goal)
 and took the time to hand-minify the css as I was fairly sure that webpack couldn't do this for me (string values
 are not minified). 
 
 ## Results
 
 | Item | Detail |
 | ---- | ------ |
 | Source JS | 1 KB |
 | Source CSS  | N/A |
 | Production Bundle | 2 KB |
 
 ### The Problems
 
 #### File Size
 I know, I know! 2K for a file isn't that big of a deal. But considering the production webpack process should
 minify the already tiny, 1K JavaScript file this is a failure. We all know there's some overhead when using 
 webpack. It's likely around 1K total. It wouldn't be a huge problem except that what if there were 40 web component
 files? 
 
 Remember, part of the idea is that I want to deliver both a single library of components AND have the option to 
 deliver them as individual files. A 1K overhead per file isn't really acceptable. 
 
 Seriously, file size should not grow after minification. 
 
 #### The Build
 I wrote CSS-in-JS and in the worst possible way. This monstrosity will be hell to edit, annoying to maintain 
 and document. Writing css in a string with no hinting then manually removing the whitespace is a non-starter.
  
### The Good
The nice thing is that the native, non-LitElement solution was still pretty fun to develop. I'm actually looking
forward to an experiment in building a complex Web Component without a framework. 

I also saw less pre-connectedCallback jank than I did with the LitElement-based component. I have no idea whether
this will remain in a larger component, but it wasn't bad. 

## Final Words
It's hard to say too much about this: It really was just a reduce test case to see what happened when I removed 
lit-element and external (s)css as variables. The results weren't too surprising, though they were a bit 
disappointing. Why?

I really wanted Webpack to work because of how loaders handle module building. The idea that if you import a 
file of some type, you can specify how that file is handled and the result is packed into the final bundle. 

I was hoping for a way to have my build tool find the css import, process the file (postCSS, node-sass, whatever), 
then dump the result inline, potentially in a lit-element css tagged template.

This result has me thinking that Webpack (and by extension, RollUp) aren't suited to this task. 