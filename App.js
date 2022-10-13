import React from 'react';
import Button from 'react-native'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createStackNavigator} from 'react-navigation-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="newScreen" component={newScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({navigation}) => {
  return(
    <Button 
      title="Click here to redirect!"
      onPress={()=>
        navigation.navigate('newScreen')
      }
    
    />
  )
}

const newScreen = ({navigation}) => {
  return(
    <Text>hey, you made it!</Text>
  );
}

export default function App() {
  return (
      <View style={styles.container}>
        <MyStack />
        <StatusBar style="auto" />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {

  }
});
