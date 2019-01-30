# React workflow with Webpack 4

This workflow was created based on several tutorials and features on the internet. Enjoy!

<div style="text-align: center">
    <img src="https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif" width="500" height="350">
</div>

## Stack:

- Latest React features. (Hooks API, Context, etc);
- Webpack 4. Much easier to deal with;
- SASS;

## Requirements

- Node > v10.x;
- NPM > v6.4;
- Or you can use Yarn > v1.13;

## Setup:

1. Clone the Project
2. Use ``cd react-workfloy``
3. ``npm install or yarn install``
4. ``npm start or yarn startgit``

## Commands:

npm start - `Runs a server on developer mode`
npm run build - `Minify and prepare your project to deployment`


## Folder Struct:

```
├── .babelrc
├── .gitignore
├── manifest.webmanifest
|── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── webpack.config.js
├── yarn.lock
├── node_modules
├── dist
│   ├── favicon.ico
|   ├── fonts
|   ├── img
│   ├── index.html
│   ├── main.css
│   └── main.bundle.js
└── src
    ├── components
    ├── fonts
    ├── img
    ├── sass
    |   └── components
    ├── index.html
    └── main.js
```