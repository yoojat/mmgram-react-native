import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import TabIcon from '../components/nav/TabIcon';
import StackNavFactory from '../components/nav/StackNavFactory';

const Tabs = createBottomTabNavigator();

export default function LoggedInNav() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: 'black',
          borderTopColor: 'rgba(255,255,255, 0.3)',
        },
        tabBarStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Tabs.Screen
        name='FeedScreen'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'home'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName='Feed' />}
      </Tabs.Screen>
      <Tabs.Screen
        name='SearchScreen'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'search'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName='Search' />}
      </Tabs.Screen>
      <Tabs.Screen
        name='CameraScreen'
        component={View}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'camera'} color={color} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name='NotificationsScreen'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'heart'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName='Notifications' />}
      </Tabs.Screen>
      <Tabs.Screen
        name='ProfileScreen'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon iconName={'person'} color={color} focused={focused} />
          ),
        }}
      >
        {() => <StackNavFactory screenName='Me' />}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
}
