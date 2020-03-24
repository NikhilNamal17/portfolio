(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{JAzp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return h}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("FdF9");var n=a("7ljp"),o=a("wpQe");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},l=o.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"I was scared of the terminal for a long time. For a while, I got by: there are plenty of apps to compile Sass files. But as I grew frustrated with the limitations of GUI solutions, I took the time to familiarize myself with the command line. As with any other tool I eventually went through ",Object(n.b)("a",i({parentName:"p"},{href:"https://twitter.com/lowmess/status/903714807022469120"}),"several obsessive rounds")," of tweaking and updating the terminal to my liking. Now, instead of being scared of the terminal, I don’t completely hate it. Here’s some of the ways I did that."),Object(n.b)("h2",null,"The Light at the End of the Tunnel"),Object(n.b)("p",null,"After going through all of this, this is what my terminal looks like. I prefer a minimal setup, but there’s a lot of features hidden underneath the simple exterior. Like a spooky skeleton."),Object(n.b)("p",null,Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"768px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.90104166666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB+ElEQVQoz52SW1PaQBSAUy5qOx2RvNqqFBMgAZKQy242ISGAgtPRau2zPPgzO/0lpO2MTvsjSpLTsyFKL1Mf+vDNZs+e82X37AqCIJeIo717Y/Ru96Xu4qDTXxy0tcWhoi2OVH0Dzg/5WgGPNTbrt0eqdvWyVi8JgvCiZrn03pyG0GcjUIkPKnOhZVGQDALygBQjhZbpQttiOTz2AI83+9b3rZ3nuygURDI5W1rhCU9cYWHStt3En58nOE8kgybHupNoLErG59fJ5OJDPprhSYKiRBrQHy2TAeZ8rm5ti1xYJ9FpTKdnuLthikmZ4viZMZxkLZNmMsLHtkUz1WGZYhdgTsdiGe6Qi1Fof3kQimY4jYO3V2AH43QwjIBO5tBzQ1AIy1EdD3SPguGRnC7hBHmL8ETpeof210JYEhXHi3vBHJrBZSq5p+ue/dKjNTSH93L9/bj2h/BZRcQjxOZoBvLsJpXIOL8IeeDmxRtIISO/xf8Wlqt17MWyj0dsjy5XUnCRNu0oPabTVOI4o5QXPcEq76FmP16KqLHwzppdgzp+D31vApo/hi7/ge3j82FPg7KO44OkO9+q2zu5sKba7KPuRXeKSZYa9WPTj2LFpHGzN4jx0cYN1UD0f7FsdI17fPifypXqnrBX2y2j9BXSQuT/hNe+Rio/AVKoEhlXxYm9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"My Hyper terminal, showing some configuration",title:"My Hyper terminal, showing some configuration",src:"/static/5793872c2ca37e44670d9a485636d9fd/e5715/result.png",srcSet:["/static/5793872c2ca37e44670d9a485636d9fd/804b2/result.png 384w","/static/5793872c2ca37e44670d9a485636d9fd/e5715/result.png 768w"],sizes:"(max-width: 768px) 100vw, 768px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("h2",null,"Frameworks: Almost Certainly All You Need"),Object(n.b)("p",null,"Frameworks like ",Object(n.b)("a",i({parentName:"p"},{href:"http://ohmyz.sh/"}),Object(n.b)("inlineCode",{parentName:"a"},"oh-my-zsh"))," and ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/sorin-ionescu/prezto"}),Object(n.b)("inlineCode",{parentName:"a"},"prezto"))," are awesome, and originally what sent me down this crazy path. However, over time I became dissatisfied with them. The problem—which, really, says much more about me than the frameworks—was that they’re simply ",Object(n.b)("em",{parentName:"p"},"too")," powerful. There are too many functions and aliases and configuration options for me to easily wrap my mind around. So, rather than do the normal thing (read some docs and root around in the repo), I decided to spend a few hours to make a shell setup that has like 5% of the functionality."),Object(n.b)("p",null,"I concede that doing the exact opposite of this is not only completely justified, but probably much smarter as well."),Object(n.b)("h2",null,"Wheels Are for Sweet Bike Jumps, Not Reinvention"),Object(n.b)("p",null,"Fortunately, developer tooling is a realm where open source truly shines. There are literally dozens of FOSS projects that offer a more focused take on shell improvement. Chief among these is ",Object(n.b)("a",i({parentName:"p"},{href:"https://brew.sh/"}),"Homebrew"),", which helps me install ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/unixorn/awesome-zsh-plugins#plugins"}),"these other libraries")," with just a few keystrokes. Here are a few of my other favorites."),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{href:"https://github.com/olivierverdier/zsh-git-prompt"}),Object(n.b)("inlineCode",{parentName:"a"},"zsh-git-prompt"))),Object(n.b)("p",null,"The first thing that caused me to switch from ",Object(n.b)("inlineCode",{parentName:"p"},"bash")," to ",Object(n.b)("inlineCode",{parentName:"p"},"zsh")," and to use frameworks like ",Object(n.b)("inlineCode",{parentName:"p"},"oh-my-zsh")," was the ability to see my ",Object(n.b)("inlineCode",{parentName:"p"},"git")," status right in my prompt. I later realized that it was entirely possible to achieve without using either of those things, but it’s a still a good segue. This appropriately-named project helps make that easy, and after ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/lowmess/dotfiles/blob/e7bc15f22ba756a0106285229e0c930ee4f6dd0a/.zshrc#L24-L41"}),"some quick configuration"),", I was able to get my prompt looking just as I like it."),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{href:"https://github.com/zsh-users/zsh-syntax-highlighting"}),Object(n.b)("inlineCode",{parentName:"a"},"zsh-syntax-highlighting"))),Object(n.b)("p",null,"Another convenient thing the frameworks bring is syntax highlighting. I can’t count the amount of times highlighting has prevented me from typing ",Object(n.b)("inlineCode",{parentName:"p"},"gti")," (a type of car) instead of ",Object(n.b)("inlineCode",{parentName:"p"},"git")," (a cool and good technology). Just source this also-appropriately-named package at the end of your ",Object(n.b)("inlineCode",{parentName:"p"},".zshrc")," and be dazzled at the pretty, prettily-informative colors."),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{href:"https://hub.github.com"}),Object(n.b)("inlineCode",{parentName:"a"},"hub"))),Object(n.b)("p",null,"I am working in ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com"}),"GitHub")," repos basically all day. And while those repos work just fine with vanilla ",Object(n.b)("inlineCode",{parentName:"p"},"git"),", GitHub has a helper library to make working with repos on their service a little easier. ",Object(n.b)("inlineCode",{parentName:"p"},"hub")," allows you to do basically anything you can do on the GitHub webapp right from your terminal. My favorite feature is ",Object(n.b)("inlineCode",{parentName:"p"},"browse"),", which allows you to quickly open up a repo’s GitHub page from the comfort of your keyboard instead of manually opening a tab like a jackass."),Object(n.b)("h3",null,Object(n.b)("a",i({parentName:"h3"},{href:"https://github.com/rupa/z"}),Object(n.b)("inlineCode",{parentName:"a"},"z"))),Object(n.b)("p",null,"One of the first things I did when I started customizing my terminal was to set up custom aliases to jump into directories from anywhere. Judging by some of my coworkers setups, this is far from uncommon. Luckily, ",Object(n.b)("inlineCode",{parentName:"p"},"z")," makes that irrelevant. Instead of setting up new aliases for every directory, just ",Object(n.b)("inlineCode",{parentName:"p"},"cd")," into it one time, and then you can ",Object(n.b)("inlineCode",{parentName:"p"},"z [name of dir]")," into it from anywhere. What sets ",Object(n.b)("inlineCode",{parentName:"p"},"z")," apart from similar libraries like ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/wting/autojump"}),Object(n.b)("inlineCode",{parentName:"a"},"autojump"))," is a concept called “frecency”. Basically, if you’ve been accessing a directory a lot recently, ",Object(n.b)("inlineCode",{parentName:"p"},"z")," will score that directory higher than other similarly-named ones. Plus it sounds like the name of a really bad action movie, and that’s cool."),Object(n.b)("h2",null,"Like a $3,000 Custom-Tailored Fingerless Glove"),Object(n.b)("p",null,"Now that we have all of the libraries we want installed, we can begin to craft aliases and functions to mold our development environment to our own unique sensibilities. One of the major benefits I’ve found of doing this over using frameworks is that any additional feature or effeciency in my shell is one that I introduced, which means that I actually know about it and will use it. Probably. Honestly I give it like a 65% chance."),Object(n.b)("p",null,"These can be simple:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# because typing an extra 7 chars is just too much work\nalias r="yarn run"\n')),Object(n.b)("p",null,"These can be fun:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),'# yes, dude, the weather is fun\nfunction weather() {\n  curl -H "Accept-Language: ${LANG%_*}" wttr.in/"${1:-Tempe}"?0q\n}\n')),Object(n.b)("p",null,"But the most important factor is that they’re mine (or, in your case, yours)."),Object(n.b)("h2",null,"The Real Terminal Is the Friends We Made Along the Way"),Object(n.b)("p",null,"I am still the absolute furthest thing from an expert in this realm. But this process has made me a lot more comfortable on the command line. I don’t really have a great way to wrap this up, so I’ll leave you with this:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"If you ",Object(n.b)("em",{parentName:"li"},"are")," an expert in this realm, come make fun of ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/lowmess/dotfiles"}),"my bad dotfiles repo"),". If you’re not an expert you can look at in awe or whatever."),Object(n.b)("li",{parentName:"ol"},"Again, this entire process could have been avoided by just reading some docs. This was way more fun.")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-a-form-fitted-z-shell-index-mdx-ba72cbd8610a54a926cc.js.map