import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Home';
import Movies from './Movies';
import MoviePurchase from './MoviePurchase';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' headerMode = 'screen'>
          <Stack.Screen name='Home' options={{headerShown: false}} >
            {(props) => <Home {...props} appName = 'GloboMovies'/> }
          </Stack.Screen>
          <Stack.Screen name='Movies' component={ Movies } options={{headerTitleAlign: 'center'}} />
          <Stack.Screen name='Purchase' component={ MoviePurchase } options={{headerTitle: 'Movies Purchase', headerTitleAlign: 'center'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
