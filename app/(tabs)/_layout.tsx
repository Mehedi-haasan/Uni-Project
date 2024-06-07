import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import Cart from '@/pages/Cart/Cart';
import Home from '@/pages/Home/Home';
import Profile from '@/pages/Profile/Profile';
import Product from '@/pages/Product/Product'
import Friend from '@/pages/Friends/Friends'
import Message from '@/pages/Message/Message';
import Details from '@/pages/Product/ProductDetails'
import Camera from '@/components/camera/camera'
import { StatusBar } from 'react-native';


const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();



function MyTabs() {
  return (
    <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }}>
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />), tabBarLabel: '' }}
        component={Home}
      />

      <Tab.Screen
        name="Message"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'search' : 'search-outline'} color={color} />), tabBarLabel: '' }}
        component={Message}
      />

      <Tab.Screen
        name="Notification"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'cart' : 'cart-outline'} color={color} />), tabBarLabel: '' }}
        component={Cart}
      />

      <Tab.Screen
        name="Profile"
        options={{ tabBarIcon: ({ color, focused }) => (<TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />), tabBarLabel: '' }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Friend" component={MyTabs} options={{ headerShown: false }} />
      {/* Make sure there's a Stack.Screen for "Details" here */}
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Friend" component={MyTabs} options={{ headerShown: false }} />
      {/* Make sure there's a Stack.Screen for "Details" here */}
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
