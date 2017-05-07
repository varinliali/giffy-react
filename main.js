import Expo from "expo";
import React from "react";
import { Provider } from "react-redux";

import { TabNavigator, StackNavigator } from "react-navigation";

import configureStore from "./store/configureStore";

import Home from "./containers/Home";
import Signup from "./containers/Signup";
import LoginScreen from "./containers/Login";
import Favorites from "./containers/Favorites";

const store = configureStore();

class Main extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      auth: {
        screen: TabNavigator({
          login: { screen: LoginScreen },
          signup: { screen: Signup }
        }, {
          lazy: true,
          tabBarPosition: 'bottom',
          animationEnabled: true,
          swipeEnabled: false,
          tabBarOptions: {
            activeTintColor: "#e91e63"
          }
        })
      },
      home: { screen: Home }
    });

    // const MainNavigator = TabNavigator(
    //   {
    //     login: { screen: LoginScreen },
    //     signup: { screen: Signup },
    //     home: { screen: Home }
    //   },
    //   {
    //     lazy: true,
    //     tabBarPosition: "bottom",
    //     swipeEnabled: true,
    //     animationEnabled: true,
    //     tabBarOptions: {
    //       activeTintColor: "#e91e63"
    //     }
    //   }
    // );

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

Expo.registerRootComponent(Main);
