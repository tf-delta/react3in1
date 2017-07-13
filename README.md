# React sample app running on web, android, and ios

## Techs
- [React v15](https://facebook.github.io/react/)
- [React Native v0.46](https://facebook.github.io/react-native/)
- [React Redux v5](http://redux.js.org/)
- [React Router v4](https://reacttraining.com/react-router/)


## Quick start
```
# start android
ln -sfn package.native.json package.json
yarn install
yarn run android
# start web
ln -sfn package.web.json package.json
yarn install
yarn start
# not tested on ios
```

## About ListView
- [ListView Doc](https://facebook.github.io/react-native/docs/listview.html)
- [Using a ListView](https://facebook.github.io/react-native/docs/using-a-listview.html)


## Appendix
- create and run a react-web project
```
npm install -g create-react-app yarn
create-react-app MyWebApp
cd MyWebApp
yarn install
yarn start
```
- create and run a react-native project
```
npm install -g create-react-app # or npm update -g create-react-app
create-react-app MyNativeApp
cd MyNativeApp
# start app
yarn start
```
- yet another way for react-native project
```
npm install -g react-native-cli yarn
npm update -g react-native-cli
react-native init MyNativeApp
cd MyNativeApp
yarn install
react-native run-android
react-native run-ios
```


## Useful Links
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [Create React Native App](https://github.com/react-community/create-react-native-app): using [Expo](https://expo.io/)
- [react-native-cli](https://github.com/facebook/react-native)

- [React Native Packages](https://js.coach/react-native)
- [React Packages](https://js.coach/react)

- [redux-persist](https://github.com/rt2zz/redux-persist)
