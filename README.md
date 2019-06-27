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
 with all it's heart that my Web Component is nothing more than a native HTML tag. 
- **code-in-code**<br>Look, I get that many people enjoy shoving the kitchen sink in their
.js files or work with CSS, JS, HTML and other stuff in a single file. I wish them the very best. 
Me, well, not so much. I want my CSS in my `.css` (though I do enjoy a little SASS from
time to time).

The bottom line is this: I want to write these things my way _(even if it's stupid)_. 
I want to: 

- Generate a minified, single-file Web Component.
- Drop that same into a WordPress plugin and have Gutenberg edit it's properties, 
outputting the same component in the content.
- Add the component into my React+Redux app's JSX and let the app manage it's 
`children` and `props` with Plain-Old JS objects. 
- Turn that React+Redux app into a backend, rendering the Web Component like it was everyday HTML.

## Which brings us to this repo...

For all I know this all just works. Again, I freely admit that I know nothing. 

This repo is al about finding out what I can do and how to get there. 
Throwing out some brutally honesty: All of this is ignoring the way people are handling 
Web Components out in the blogosphere. There's crazy good guidance out there, with awesome 
completely usable pipelines. I am intentionally ignoring them and doing this The Wrong Way™.

**That's okay.** 

The idea is to learn something from doing silly things and maybe catch something useful
along the way. Right now, I'm leaving nothing off the table that'll get the job done.
 
**Grunt**? Sounds fun. **Gulp** too. Multiple **Webpack** configs? Hah, okay. 
Summoning eldritch horrors from parallel dimensions in exchange for a constant supply 
of **gerbils**? I'm down, can't be any worse than writing **custom loaders** for webpack, or, you know,
wrap my head around **RollUp**. 

## Experiments

So Here they are&mdash;The Experiments&mdash;in order:

### A lit-element WC with minimal Webpack
 [webpack-stupid-wc](https://github.com/aut0poietic/ia-wc-pipleline/tree/master/webpack-stupid-wc) is my first attempt at creating a single file, fully enclosed 
 Web Component based on LitElement. It works, but that's about all I can say for it.

