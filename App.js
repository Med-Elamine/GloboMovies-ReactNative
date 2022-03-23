import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' headerMode = 'screen'>
          <Stack.Screen name='Home' options={{headerShown: false}} >
            {(props) => <Home {...props} appName = 'GloboMovies'/> }
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
};
