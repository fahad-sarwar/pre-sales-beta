This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup dependencies

yarn create react-app pre-sales-beta

yarn add bootstrap 

yarn add reactstrap

yarn add redux

yarn add react-redux

yarn add redux-devtools

yarn add redux-promise

yarn add @zen/identity-lib@3.0.682-4.13979

yarn add react-router-dom

yarn add @types/react-router

yarn add @types/react-router-dom

yarn add @fortawesome/fontawesome-svg-core

yarn add @fortawesome/free-solid-svg-icons

yarn add @fortawesome/react-fontawesome

yarn add cross-fetch

yarn add dotenv dotenv-expand -- Although this comes with create-react-app

### Zen dependencies

yarn add @zen/identity-lib

### Optional dependencies

yarn add axios

yarn add react-helmet

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Sample reference sites

### JavaScript Extensions

https://hackernoon.com/10-essential-vs-code-extensions-for-javascript-developers-in-2019-e8320e3f421e

### Styling

https://reactstrap.github.io/

### Sample React demos

https://github.com/facebook/create-react-app#creating-an-app

https://tighten.co/blog/react-101-using-redux

https://react-bootstrap.github.io/getting-started/introduction

https://github.com/sohail87/ReduxBookList

https://github.com/sohail87/ReduxFormsReactRouterBlog

https://github.com/jamietwells/typescript-training/blob/master/readme.md

https://itnext.io/dispatching-actions-from-child-components-bd292a51f176

### Sample React + Redux demos

https://redux.js.org/basics/example

https://github.com/gothinkster/react-redux-realworld-example-app

https://medium.freecodecamp.org/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85

https://itnext.io/tutorial-simple-react-redux-app-cd559621ec00

https://appdividend.com/2018/06/14/how-to-connect-react-and-redux-with-example/ - GOOD ONE

https://codeburst.io/redux-a-crud-example-abb834d763c9

### How to switch config environments

https://stackoverflow.com/questions/44389288/react-env-variables-with-env

Alternative to dotnet-env https://www.npmjs.com/package/react-global-configuration

### ReactJs + Redux Dos & Donts

https://itnext.io/dispatching-actions-from-child-components-bd292a51f176

https://alligator.io/redux/redux-thunk

https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013

https://ponyfoo.com/articles/react-state-choose-wisely

https://medium.freecodecamp.org/get-pro-with-react-setstate-in-10-minutes-d38251d1c781

#### Sample configuration

How to read file: https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5

REACT_APP_ENVIRONMENT=dev

REACT_APP_BEARERTOKENAUTHORITY=https://identity.testing.zen.co.uk

REACT_APP_IDENTITYSERVERURL=https://identity.testing.zen.co.uk/

REACT_APP_CLIENTID=bssdir-presalesbeta

REACT_APP_REDIRECTURL=http://localhost:8080/login

REACT_APP_POSTLOGOUTREDIRECTURL=https://www.testing1.sysdev.zen.co.uk/

REACT_APP_SCOPES=openid email profile roles read_authorisation dialogueCheck addressRead lineCheck oss_read_availability

REACT_APP_SILENTREDIRECTURL=http://localhost:8080/renewlogin

REACT_APP_SIGNOUTURL=http://localhost:8080/signedout

REACT_APP_AUTHORISATIONURL=https://authorisation.api.testing1.sysdev.zen.co.uk/api/authorise/presalesbeta

REACT_APP_DIALOGUESERVICESURL=https://gateway.api.bss.testing.zen.co.uk/retail-dialogue-services
