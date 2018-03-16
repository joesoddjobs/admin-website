# React starter app

This is the repository for a react webapp starter app. The project is a [React](Reactjs.org) built on top of a [Create React App](https://github.com/facebook/create-react-app) and it utilizes [Redux](https://redux.js.org).

The App uses Eslint to enforce style rules.

## Running instructions
1. Clone the repo.
2. Run `npm install`.
3. Run `npm run start`.

## Development pipeline
1. Make a new topic branch.
2. Make your changes.
4. Run `npm run lint` to check for style mistakes.
  - Code that has errors from the linter will not be merged in. Warnings are fine, but should be dealt with if possible.
5. Push your code.
6. Open a Pull Request.
7. After your code has been approved, it will be merged into master.

## Documentation

### Code structure

Most of the code lives in the `src` folder. For specific pages, the code should go into `src/pages/<name of the page>`. Reusable componenets (such as a custom button or input field) should go in `src/components/<name of component/component group>`.

The files for each component should be together in the same directory (`.js`, `.scss`). Global style files should go in `src/css`.

### Persisting Redux State (context: src/redux)
In order to allow faster content loading, the in-memory redux state is persisted using the `saveState` function. When the
application is reloaded, this persisted state is retrieved using rhe `loadState` function. 
  * The first time `loadState` is called, if there was a persisted state in `localstorage`, it should save the `reduxStateKey` in memory.
  * If no persisted state in `localstorage`, it should create a new unique `reduxStateKey`, save it to both `localstorage` and in memory.
  * Anytime the store is cleared, a new `reduxStateKey` should be created and replace the in-memory and `localstorage` `reduxStateKey`.
  * `saveState` should only save in-memory redux state to `localstorage` if the in-memory `reduxStateKey` matches `localstorage` `reduxStateKey`.  
