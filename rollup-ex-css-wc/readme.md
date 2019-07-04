# A Reduced, Native Web Component with External CSS

 This directory contains an attempt to build a vanilla JS Web Component with
 rollup, using a JS and CSS file.
 
 You can rebuild this yourself using `npm run build` and serve it up using `npm run serve`.
 
 ## The Process
 
 As the title implies, the `src/ia-card` directory contains both a index.js and an index.css. The css is imported
 into the JavaScript file the same way you would in any other project, then dropped directly into a template literal,
 in the HTML template tag. 
 
 And if that's not enough templates for you, I don't know what is.
 
 ## Results
  
  | Item | Detail |
  | ---- | ------ |
  | Source JS | 754 B |
  | Source CSS  | 307 B |
  | Production Bundle | 892 B |
  
  That's not just a result, that's a success. This went so well that I took the time to go ahead and add
  StyleLint, ESLint, and PostCSS + Autoprefixer + flexbugs-fixes (which is where the extra 46 bytes came from).
  
 ### The Problems
   
 #### No LitElement
 Not so much a problem so much as "TODO". 
   
 #### No Dynamic Build
 I keep saying that I'm too lazy to setup the dynamic build where the final js file name is named from the 
 folder the source content is in. I've been putting it off because I'm worried RollUp can't handle it. 
 
 I need to come up with two variants for this: 
 1. A build that creates a single output file with multiple components
 2. A build that creates multiple files, each with a single component
 
 Each solves a specific problem (global library vs. include on demand) for several projects I'm working. I can also
 see a 3rd option that bundles some and creates individual files others. I don't know that I'll explore that one
 until I have to use it. 
   
 ## Final Words
 
 I'm calling this one a success. :-)
   