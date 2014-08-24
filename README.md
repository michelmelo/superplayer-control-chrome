![Logo](http://romuloalves.github.io/superplayer-control/images/icon32.png) Superplayer Control
===

*A Chrome extension to control [Superplayer](http://superplayer.fm).*


##Available on
![Chrome Web Store](http://romuloalves.github.io/superplayer-control/images/chromewebstore.png)
[Download](https://chrome.google.com/webstore/detail/superplayerfm-control/kfcbakdlhhmnfnpgjohggcaifdadglbm)



##Run

####Clone
```
git clone https://github.com/romuloalves/superplayer-control.git
```

####Download Grunt dependencies
```
npm install
```

####Download Bower dependencies
```
bower install
```

####Deploy files
```
grunt
```

####Adding extension to Chrome
*Follow this instructions: [Load the extension](https://developer.chrome.com/extensions/getstarted#unpacked).*



##Dependencies

####[GruntJS](http://gruntjs.com/)

- [grunt-contrib-clean](https://www.npmjs.org/package/grunt-contrib-clean)
- [grunt-contrib-copy](https://www.npmjs.org/package/grunt-contrib-copy)
- [grunt-contrib-cssmin](https://www.npmjs.org/package/grunt-contrib-cssmin)
- [grunt-contrib-htmlmin](https://www.npmjs.org/package/grunt-contrib-htmlmin)
- [grunt-contrib-jshint](https://www.npmjs.org/package/grunt-contrib-jshint)
- [grunt-contrib-uglify](https://www.npmjs.org/package/grunt-contrib-uglify)
- [grunt-usemin](https://www.npmjs.org/package/grunt-useminbo)



##Default Shortcuts

![Shortcuts](http://romuloalves.github.io/superplayer-control/images/shortcuts.png)

*The shortcuts are globals*

####Tocar/Pausar música (Play and pause)
```
Windows/Linux: Ctrl + Shift + 1
Mac: Command + Shift + 1
```

####Tocar próxima música (Play next song)
```
Windows/Linux: Ctrl + Shift + 2
Mac: Command + Shift + 2
```

####Amei esta música (Like)
```
Windows/Linux: Ctrl + Shift + 3
Mac: Command + Shift + 9
```

####Esta música não me agradou (Hate)
```
Windows/Linux: Ctrl + Shift + 4
Mac: Command + Shift + 0
```



*To use other shortcut combinations, follow this steps: [https://gist.github.com/romuloalves/80fccfbb633602ffd1fb](https://gist.github.com/romuloalves/80fccfbb633602ffd1fb)*
