import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import App from '../App';
import Todo from './Todo';
import Login from './Login';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

// const TodoStack = createStackNavigator({ TodoScreen: Todo});
// const LoginStack = createStackNavigator({ LoginScreen: Login });

const Navigator = createStackNavigator(
    {
      Todo:{
       screen: Todo,
      },
      Login:{
        screen: Login,
      },
    },
    {
      initialRouteName: 'Login',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3f90b5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    },
  }
  
);

const AppContainer = createAppContainer(Navigator);

export default AppContainer;