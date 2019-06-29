# screeps_grunter
Barebone screeps game grunter (moves your scripts to the server)
requirements:
  npm -> https://www.npmjs.com/
  (probably) grunt, npm package. => npm install -g grunt-cli
        
  Clone This Repo
  In command window:
  cd [YOUR_FOLDER_PATH] // ex: C:\screeps
  npm i
  
  Start coding..
  
  commands: 
  //In the same directory
  grunt // push code to branch specified
  grunt watch // watch for changes to directory specified.
  
  
  Start your own similar with these commands:
  In command window:
  cd [YOUR_FOLDER_PATH] // ex: C:\screeps
  npm init // create package.json
  npm i -g grunt // install grunt
  npm i grunt-screeps -s // install grunt-screeps + add dependency to package.json
  npm i grunt-contrib-watch -s // install grunt-watch + add dependency to package.json

  // Make a folder called dist
  // Put all code in that file.. It can be in folders it will be flattened.

  commands: 
  //In the same directory
  grunt // push code to branch specified
  grunt watch // watch for changes to directory specified.
