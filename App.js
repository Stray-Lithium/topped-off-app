import React from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import HomeScreen from './src/components/HomeScreen';
import GameVersionScreen from './src/components/GameVersion';
import NamesScreen from './src/components/NamesScreen';
import CardScreen from './src/components/CardScreen';
import ChallengeScreen from './src/components/ChallengeScreen';
import reducers from './src/reducers';
import routeSaga from './src/sagas';
import LemonadePlayersScreen from './src/components/LemonadePlayersScreen';
import LemonadeWhoCompletedScreen from './src/components/LemonadeWhoCompletedScreen';
import DrinkScreen from './src/components/DrinkScreen';
import ScoreScreen from './src/components/ScoreScreen';
import EndScreen from './src/components/EndScreen';

const Stack = createNativeStackNavigator();

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(routeSaga);

const App = () => {
  return (
    <Provider store={store}>
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
            <Stack.Screen
              name="Card Screen"
              component={CardScreen}
              options={{title: 'Card Screen', headerShown: false}}
            />
            <Stack.Screen
              name="Challenge Screen"
              component={ChallengeScreen}
              options={{title: 'Challenge Screen', headerShown: false}}
            />
            <Stack.Screen
              name="Lemonade Players Screen"
              component={LemonadePlayersScreen}
              options={{title: 'Lemonade Players Screen', headerShown: false}}
            />
            <Stack.Screen
              name="Lemonade Who Completed Screen"
              component={LemonadeWhoCompletedScreen}
              options={{
                title: 'Lemonade Who Completed Screen',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Drink Screen"
              component={DrinkScreen}
              options={{
                title: 'Drink Screen',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Score Screen"
              component={ScoreScreen}
              options={{
                title: 'Score Screen',
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="End Screen"
              component={EndScreen}
              options={{
                title: 'End Screen',
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
