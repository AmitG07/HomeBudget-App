import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/store';
import BudgetEntryListingScreen from './src/Screens/BudgetEntryListingScreen';
import BudgetEntryScreen from './src/Screens/BudgetEntryScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="BudgetEntry"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#7700b3',
                borderBottomWidth: 1,
              },
              headerTitleAlign: 'center',
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              name="BudgetEntry"
              component={BudgetEntryScreen}
              options={{
                title: 'Home Budget Application',
                headerTitleStyle: {
                  color: 'white',
                  fontSize: 22,
                },
              }}
            />
            <Stack.Screen
              name="BudgetEntryListing"
              component={BudgetEntryListingScreen}
              options={{
                title: 'Home Budget Application',
                headerTitleStyle: {
                  color: 'white',
                  fontSize: 22,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
