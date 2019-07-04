# Lit-Element Web Component with RollUp and External CSS

 This directory contains an attempt to build a lit-element based Web Component with
 rollup.
 
 You can rebuild this yourself using `npm run build` and serve it up using `npm run serve`.
 
 ## The Process
 
 Back to using a library as there are some pretty compelling reasons to use lit-element. The files are 
 identical to those used in webpack-stupid-wc, with a similar configuration in RollUp as the Webpack version.
 
 ## Results
  
  | Item | Detail |
  | ---- | ------ |
  | Source JS | 446 B |
  | Source CSS  | 305 B |
  | Production Bundle | 20 KB |
  
  Well, it's better than Webpack, but not by a whole lot.
  
 ### The Problems

 #### File Size
 So, 20 KB isn't much better than 22 KB. Fact, 2k isn't worth mentioning. Again, lit-element is fully bundled into
 final file. Admittedly, I added in the `rollup-plugin-node-resolve` plugin myself so it's not an unexpected result.
 
 #### Unsafe CSS function
 I couldn't figure out a way to pass this straight into the template literal the same way that the rollup-ex-css-wc 
 worked. I tried multiple methods (remove the template tag, return raw CSS, etc.) amd either lit-element fought me, 
 RollUp fought me or both ganged up and completely broke. 
   
 ## Final Words
 
 One step forward, two steps back. Again, this result is dissapointing for a single-component-per-file setup. This 
 *might* work for a library if I can solve the `unsafeCSS` problem. 
   