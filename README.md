# Giphy Search

This project was bootstrapped with CRA. To run the app, run `yarn start` and navigate to `http://localhost:3000`.

This project has also been deployed to [https://rk-giphy.netlify.app/](https://rk-giphy.netlify.app/).

## Tech stack

- TypeScript, React, React Router, lodash.debounce, HTML, CSS
- React Hooks and Context API for state management

## Notes/features

- Chose `fixed_width_downsized` image following guidelines for [rendition best practices](https://developers.giphy.com/docs/optional-settings#rendition-guide) in Giphy API documentation
- Abstracted Giphy API querying logic into a separate file in `/api` for better extensibility
- Custom `useFetch` hook to abstract loading state, error handling, and promise resolution
- `AbortController` used to cancel fetch requests
- Context API is used to store a list of saved gifs
- localStorage is used to persist state in browser
- An API key has been hardcoded for convenience

## If I had more time

- Reorganize, modularize, and improve styling
- Improve pagination or implement infinite scrolling
- Add more tests

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
