# Continuing Misadventures in Web Components 
*a.k.a. How I learned to stop worrying about and love the Shadow DOM.*

Web Components, here I come. YeeHAW! 

But seriously, Web Component scratch a particular hard-to-reach itch of mine that -- well you don't 
want to hear about that. The long-and-short of it is that I know absolutely nothing about 
Web Components (other than they must be CAPITALIZED), but I have this impression of how I want them 
to work:

- **Minimal**<br>What attracted me to Web Components in the first place was the idea
 that I could have a tiny little file that delivered a single, cohesive component. 
 No massive, browser-crushing bundle with Babel-infused helpers.
- **Separate but Compatible**<br>But for all that the Web Components I create must live 
 within whatever framework I choose. Web Components **must** be first-class citizens. No, I 
 don't want React to consume and convert.  If I use a framework it needs to believe, 
 with all it's heart, that my Web Component is nothing more than a native HTML tag. 
- **code-in-code**<br>Look, I get that many people enjoy shoving the kitchen sink in their
.js files. I wish them the very best. 
Me, well, not so much. I want my CSS in my `.css` (though I do enjoy a little SASS from
time to time).

The bottom line is this: I want to write these things my way _(even if it's stupid)_. 
I want to: 

- Generate a minified, single-file Web Component.
- Drop that component into a WordPress plugin and have Gutenberg manage it's properties and 
output the same component markup in the `the_content`.
- Add the component into my React+Redux app's JSX and let the app manage it's 
`children` and `props`. 
- Turn that React+Redux app into a backend, rendering the Web Component like it was everyday HTML.

## Which brings us to this repo...

For all I know this all just works. Again, I know _nothing_. 

My rambling here is all about finding out what I can (and cannot) do and how to get there from here. 
All of this is ignoring the way people are handling Web Components. There is some crazy-good guidance 
out there with awesome, completely usable pipelines. 
I am intentionally ignoring them and doing this The Wrong Way™.

**That's okay.** 

The idea is to learn something from doing silly things and maybe catch something useful
along the way. Right now, I'm leaving nothing off the table that'll get the job done.
 
**Grunt**? Sounds fun. **Gulp** too. Multiple **Webpack** configs? Hah, okay. 
Summoning eldritch horrors from parallel dimensions in exchange for a constant supply 
of **gerbils**? I'm down. I mean can't be any worse than writing **custom loaders** for webpack. 
Or, you know, wrapping my head around **RollUp**. 

## Experiments

### Build Experiments

#### A minimal lit-element Web Component with Webpack
 [webpack-stupid-wc](https://github.com/aut0poietic/ia-wc-pipleline/tree/master/webpack-stupid-wc) is my first attempt at creating a single file, fully enclosed 
 Web Component based on LitElement. It works, but that's about all I can say for it.

#### A minimal native Web Component with Webpack
 [webpack-simple-wc](https://github.com/aut0poietic/ia-wc-pipleline/tree/master/webpack-simple-wc) is a reduced attempt
  at creating a single file, fully enclosed Web Component using native JavaScript. It demonstrates that Webpack is
  probably not the way forward.
  
#### A minimal, native Web Compoent with RollUp
 [rollup-simple-wc](https://github.com/aut0poietic/ia-wc-pipleline/tree/master/rollup-simple-wc) is a reduced attempt
  at creating a single file, fully enclosed Web Component using native JavaScript. It's the first result that gives me
  some hope that my stupid idea isn't so stupid. Er, at least possible; It could still be stupid.

#### Native Web Component with RollUp and External CSS
 [rollup-ex-css-wc](https://github.com/aut0poietic/ia-wc-pipleline/tree/master/rollup-ex-css) is a working, nearly
 complete config. Webpack convinced me inlining the CSS would be hard. RollUp did it without any effort.

### Component Experiments
> There's nothing here yet&hellip; Still looking for some inspiration.

### Integration Experiments

> Sorry, not there yet. I have to sleep sometime.

