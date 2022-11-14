import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import GameVersionScreen from './src/components/GameVersion';
import NamesScreen from './src/components/NamesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
            options={{title: 'Home Screen', headerShown: false}}
          />
          <Stack.Screen
            name="Version Screen"
            component={GameVersionScreen}
            options={{title: 'Version Screen', headerShown: false}}
          />
          <Stack.Screen
            name="Names Screen"
            component={NamesScreen}
            options={{title: 'Names Screen', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
