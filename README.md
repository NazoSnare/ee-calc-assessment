# Equal Experts Calculator

This project is a calculator assessment from EqualExperts written in React with Typescript. 

It has incorporated good use of functions that can be safely used in a backend Typescript or Javascript environments as well as the browser.

## Instructions Given
- 5b8d0fd276b6d288905ed2f63a934e057e8feca2

## Author
- [Malcom Miya](https://github.com/nazosnare)


## Prerequisites
- npm 
- internet
- nodejs
- written with vscode editor

## To Run 
```javascript
 1. npm install

 2. npm run start
```

## To Test 
```javascript
 1. npm install

 2. npm run test
```

## Technologies used
- styled-components
- Typescript
- css
- React
- vite 

## Techniques
- React hooks
- functional programming
- unit testing
- tdd: test driven development
- vite as build tool


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
