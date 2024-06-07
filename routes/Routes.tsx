import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import Notification from '@/pages/Cart/Cart';
import Home from '@/pages/Home/Home';
import Profile from '@/pages/Profile/Profile';
import Friend from '@/pages/Friends/Friends'
import Message from '@/pages/Message/Message';


const Tab = createMaterialTopTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
    //   tabBarOptions={{
    //     style: { paddingTop: 20 }, 
    //   }}
    >
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />), tabBarLabel: '' }}
        component={Home}
      />

      <Tab.Screen
        name="Friend"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />), tabBarLabel: '' }}
        component={Friend}
      />
      <Tab.Screen
        name="Message"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />), tabBarLabel: '' }}
        component={Message}
      />

      {/* <Tab.Screen
        name="Profile"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />), }}
        component={Profile}
      /> */}

      <Tab.Screen
        name="Notification"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />), tabBarLabel: '' }}
        component={Notification}
      />

      <Tab.Screen
        name="Profile"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />), tabBarLabel: '' }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
