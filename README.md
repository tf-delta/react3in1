# React sample app running on web, android, and ios

## Techs
- [React v15](https://facebook.github.io/react/)
- [React Native v0.46](https://facebook.github.io/react-native/)
- [React Redux v5](http://redux.js.org/)
- [React Navigation v1](https://reactnavigation.org)


## Quick start
```
# start android
ln -sfn package.native.json package.json
yarn install
yarn run android
# not tested on web
# not tested on ios
```

## About React Navigation
- [React Navigation Doc](https://reactnavigation.org/docs)
- [StackNavigator](https://reactnavigation.org/docs/navigators/stack)
- [Navigation Options](https://reactnavigation.org/docs/navigators/navigation-options#Stack-Navigation-Options)


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
