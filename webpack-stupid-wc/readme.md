#An Intentionally Stupid Attempt
 This directory contains an attempt and plodding forward to build a Web Component with
 webpack, SASS and lit-element without any conscious thought. 
 
 While I've committed the `.dist` directory, you can rebuild this yourself using `npm run build`
 and serve it up using `npm run serve`.
 
 The source is two separate files (js, scss) that are combined to create one final ia-card.js.
 The index.html file is static, written by hand. 
 
 The main issue I have with this result is the file size. The resulting, minimized file is 22K.
 I know this doesn't sound like much when we're discussing frameworks, but this seems excessive:
 The original js and css files are 488 and 326 bytes, respectively. Lit Element is supposed to be
 3K!?
 
 Except, it's not. lit-element pulls in another 17 files using JS Modules, turning into around 
 43K, un-minified. That jives with the 22K file size as Webpack is configured for a production build.
  
 I'm both encouraged and disappointed by this result. On the one hand, I accomplished the goal: .js
 and .scss files combining to create one, self-contained web component. 
 
 But on the other hand, this feels like a bit of a failure. I think I'm stuck in the old glory days of
 downloading a library once and using it over and over (who thought I'd look back fondly at jQuery?).
 If I wanted to create a library of reusable components, each individually wrapped, my minimum size is 22K
 for each. 
 
 I'm also not sure how much of this is webpack adding in things. I'm using the `css-to-string-loader` to 
 drop a the scss file into a `css\`\`` tagged template using `unsafeCSS()`. I think it's fine for this tiny
 little component, but in any non-trivial project, that would have unsafeCSS processing a ton of styles.
  
 I think I can do better even with lit-element, but it may take some very odd wrangling to pull it off.
   
 I'm questioning if lit-element is worth the cost.
 
 