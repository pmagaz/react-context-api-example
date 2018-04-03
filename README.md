## React 16.3 Context API Example

Simple example of use the React Context API

### Installing

You can clone our Git repository:

`$ git clone https://github.com/pmagaz/react-context-api-example

### Starting Dev Server

Execute yarn start or npm run start to start the development server and the example.

### Architecture

* `App.js` its the application  Component. In This file you should specify the initial state of your App and pass the store created by createStore to the provider.

* `createStore.js` works in the similar way to Redux createStore function. The difference is here, this function, receives the instance of the App component and its state, used for the actions to update the state

* `createActions.js` is the file responsible to define all the actions used by your app and it has access to the state of the App component and its setState method.

* `createConsumer.js` is just a component wrapper for the consumer returned by createContext method

* `MyContainer.jsx` its just a regular component wrapped with createConsumer and acting like a 'container'. The continaer passes the store and its actions to its childs.

* `ChildComponent.jsx` its a childcomponent and receives the store by its props.

### Warning

This is a pretty basic example for educational purposes. Please DON'T use it in production.