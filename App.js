import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import store1 from './src/forms/reducers';
// import {Provider} from 'react-redux';
import {Provider} from '../blog/src/context/BlogContext';  


const navigator = createStackNavigator({
  Home: {
    screen: IndexScreen,
  },
  Details: {
    screen: IndexScreen,
  },
}, {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

// const store =  store1();

const App = createAppContainer(navigator);


// below coment code for to test the modal, redux form just for practice 

// const AppProvider =  () => {
//   return (
//     <PaperProvider>
//         <App />
//     </PaperProvider>
//   )
// }

// export default () => {
//   return <Provider store = {store1}><AppProvider /></Provider>
// }

// real code for this project setting for the Context Api
// wrapping BlogProvider for the code to have the App component as the child
export default () => <Provider><App /></Provider>
