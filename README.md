## React 16.3 Context API Example

Simple example of use the React Context API

### Installing

You can clone our Git repository:

`$ git clone https://github.com/pmagaz/react-context-api-example

### Starting Dev Server

Execute yarn start or npm run start to start the development server and the example.

### Architecture

* `createStore.js` works in similar way to Redux createStore function. The difference here, is that this function, receives the instance of the App component and its state, used for the actions to update the state

* `App.js` it's the application Component. In This file you should specify the initial state of your App and pass to the provider the store created by createStore.

* `createActions.js` it's the file responsible to define all the actions used in your app and it has access to the App component state and its setState method.

* `createConsumer.js` it's just a component wrapper for the consumer returned by createContext method.

* `MyContainer.jsx` it's just a regular component wrapped with createConsumer and acting like a 'container'. The container passes the store and its actions to its childs components.

* `ChildComponent.jsx` it's a childcomponent and receives the store by its props.

### Warning

This is a pretty basic example for educational purposes. DON'T use it in production.