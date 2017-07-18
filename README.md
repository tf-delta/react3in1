# React sample app running on web, android, and ios

## Techs
- [React, React Dom v15](https://facebook.github.io/react/)
- [React Native v0.46](https://facebook.github.io/react-native/)
- [React Router v4](https://github.com/ReactTraining/react-router)
- [React Navigation v1](https://reactnavigation.org)
- [Redux v3](http://redux.js.org/)


## Quick start for Web
```
# use package.json for web
ln -sfn package.web.json package.json
yarn install
yarn start
```

## Quick start for Mobile
```
# start android
ln -sfn package.native.json package.json
yarn install
yarn run android

# not tested on iOS
yarn run ios
```

## React
- [Github](https://github.com/facebook/react)
- [Doc](https://facebook.github.io/react/docs)
- [Tutorial](https://facebook.github.io/react/tutorial/tutorial.html)


## React Native
- [Github](https://github.com/facebook/react-native)
- [Doc](http://facebook.github.io/react-native/docs)


## React Router for Web
- [Doc](https://reacttraining.com/react-router/web)


## React Navigation for Mobile
- [Doc](https://reactnavigation.org/docs)
- [StackNavigator](https://reactnavigation.org/docs/navigators/stack)
- [Navigation Options](https://reactnavigation.org/docs/navigators/navigation-options#Stack-Navigation-Options)


## Redux
- [Github](https://github.com/reactjs/redux/)
- [Dev Tool](https://github.com/zalmoxisus/redux-devtools-extension)
    - [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Getting started](https://egghead.io/courses/getting-started-with-redux)


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
