import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import LogIn from '../screens/LogIn';
import CreateAccount from '../screens/CreateAccount';
import { RootStackParamList } from '../screens/types';
import { CREATE_ACCOUNT, LOG_IN, WELCOME } from '../contants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function LoggedOutNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: '',
        headerTransparent: true,
        headerTintColor: 'white',
        // headerTintColor: 'red',
        // presentation: 'fullScreenModal',
      }}
    >
      <Stack.Screen
        name={WELCOME}
        options={{ headerShown: false }}
        component={Welcome}
      />
      <Stack.Screen name={LOG_IN} component={LogIn} />
      <Stack.Screen name={CREATE_ACCOUNT} component={CreateAccount} />
    </Stack.Navigator>
  );
}
