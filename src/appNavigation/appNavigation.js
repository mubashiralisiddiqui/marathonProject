
import React from 'react';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
// import { Home, Login, Signup } from '../components';
import Login from '../components/login/login'
import Signup from '../components/signup/signup'
import Home from '../components/home/home'
import { ScrollView, } from 'react-native'


// const DrawerNav = DrawerNavigator({
//     // Dashboard: { screen: Home },
//     // LOGOUT: { screen: Login },

// },
//     {
//         contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
//         contentOptions: {
//             activeTintColor: '#FF69B4',
//             style: {
//                 flex: 1,
//                 paddingTop: 15,
//                 width: 150
//             },

//         },
//     }

// );
const Navigations = StackNavigator({
    // App: { screen: DrawerNav },
    LoginScreen: { screen: Login },
    SignupScreen: { screen: Signup },
    HomeScreen: { screen: Home },
},
    {
        headerMode: 'screen',
        initialRouteName: 'LoginScreen',
    }
);

export default Navigations;