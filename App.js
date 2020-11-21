import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./screens/home"
import Profile from "./screens/profile"
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Home/>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Profile/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator  
      initialRouteName="Feed"
      activeColor="red"
    inactiveColor="black"
    tabBarOptions={{
      style:{
        backgroundColor: '#1b0547'
      },
      showLabel: false
    }}
    >
      
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          
        }}
        />

        <Tab.Screen name="Menu" component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="menu" size={size} color={color} />
          ),
        }}
        />
        
        <Tab.Screen name="Profile" component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="face-profile"  color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

