# Grunt 0.4 / .jshintrc setup

This shows how it is possible to set coding standards as part of a project using [Grunt][1] and [JSHint][2] Grunt 0.4 / .jshintrc setup

# Installation

You need [Node.js][3]. 

You need [grunt][1].

    npm install -g grunt-cli

Then run 

    npm install

# Auto linting code

With this setup grunt can auto lint your code with a defined set of coding standards in `.jshintrc`.

  grunt watch

Your code will get linted on save. This has the advantage of not having to setup auto linting in text editors for a team of developers. This example lints the Gruntfile.js file.


[1]: http://gruntjs.com/
[2]: http://www.jshint.com/
[3]: http://nodejs.org
