# Multiple Web Components in Individual Files

 This directory contains an attempt to create two Web Components, the Card component and a new Toggle Button component.
 
 You can rebuild this yourself using `npm run build` and serve it up using `npm run serve`. `npm run dev` will now
 run the server and the watch task.
 
 ## The Process
 
 With the goal of this test being two different component files from the build, I spent time creating a 
 build process that read the names of the directories in `/src` and produces production bundled files
 based on the `index.js` as the entry point in each folder. 
 
 ## Results
  
  **Card Web Component**
  
  | Item | Detail |
  | ---- | ------ |
  | Source JS | 754 B |
  | Source CSS  | 316 B |
  | Production Bundle | 896 B |
  
   **Toggle Web Component**
   
    | Item | Detail |
    | ---- | ------ |
    | Source JS | 3 B |
    | Source CSS  |2 B |
    | Production Bundle | 5 KB |
  
  Multiple bundles turned out pretty well. The compression was fairly modest, but 5K isn't a negative result for
  the toggle's behavior. 
  
 ### The Problems
 
 None, really. The method for creating multiple files was fairly simple, but it took a couple of tries to figure 
 out. The idea is that, unlike webpack, where you have a single config that produces multiple files, we create an
 array of configurations within a single file and export that array. 
 
 It was a little weird coming from webpack, but I think it actually works pretty well. 
   
   
 ## Final Words
 
 I had so much fun putting together the two components that I took the time to connect them in the test. 
 So if you toggle the toggle button "On" it the card's title is changed to "Hello" and turn it off changes
 the card's title to "Goodbye.  It's a stupid use of components, but it allowed me to wrap my head around the 
 process. 
 
   