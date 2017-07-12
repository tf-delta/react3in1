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

## Appendix
- create a react-native project
```
npm install -g react-native-cli yarn
npm update -g react-native-cli
react-native init MyApp
cd MyApp
yarn install
```
- run a project
```
react-native run-android
react-native run-ios
```

## Useful Links
[Introducing Create React Native App](https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app.html)
