# Continuing Misadventures in Web Components 
*a.k.a. Finding a multi-framework pipleline that doesn't suck.*

So I started drinking the Kool-aid: Web Components, here I come. YeeHAW!

But seriously, Web Component scratch a particular hard-to-reach itch of mine that -- well, 
no, really you don't want to hear about that crap. Suffice it to say, I want something 
that's probably going to be a difficult if not impossible to do:

- **Minimal**<br>What attracted me to Web Components in the first place was the idea
 that I could have a tiny little file that delivered a single, cohesive component. 
 No massive-honking React Bundle with Babel-infused helpers. Standards, Baby!
- **Separate but Compatible**<br>But for all that the Web Components I create must live 
 within whatever framework I choose. Web Components MUST be first-class citizens. No, I 
 don't want React to consume and convert.  If I use a framework it needs to believe, 
 with all it's little over-engineered heart that my Web Component is nothing more 
 than a native HTML tag. 
- **code-in-code**<br>Look, I get that many people enjoy shoving the kitchen sink in their
.js files or enjoy having a massive monolith of a file. I wish them the very best. Me, 
well, I'd rather snorkel in a stopped-up toilet 
after bean burrito breakfast at the International Irritable Bowel convention. I want my
css in my .css (though I do enjoy a little SASS).

The bottom line is this: I want to write these things my way _(even if it's stupid)_. 

I want to be able to generate a Web Component and drop it into a WordPress plugin
and have Gutenberg both use and save the resulting component. Then I want to 
take the same component and drop it into an Electron project and it just work. 
Then for an encore I want to shove React into that Electron app and have it 
feed Plain-Old-JS objects into the same Web Component. Then just to push my luck, 
that same Electron app should be able to render it back down to the original Web 
Component HTML.  
 
## Which brings us to this repo...

These are my ongoing experiments in building something that will pull this off. Let's be
brutally honest: Most of this is ignoring the way people are handling WC's and doing
things that are bat-guano-crazy. 

**That's okay.** 

The idea is to learn something from doing stupid things and maybe catch something useful
along the way. Right now, I'm leaving nothing off the table that'll get the job done. 
Sure, Grunt could do this. Sounds fun. Gulp too. Multiple webpack configs? Hah, okay. 
Summoning eldritch horrors from parallel dimensions in exchange for a constant supply 
of gerbils? I'm down, can't be any worse than writing custom loaders for webpack.

## Experiments

### A Dirt-Dumb webpack Single WC
 [webpack-stupid-wc](https://github.com/aut0poietic/ia-wc-pipleline/tree/master/webpack-stupid-wc) is my first attempt at creating a single file, fully enclosed 
 Web Component based on LitElement. It works, but that's about all I can say for it.

