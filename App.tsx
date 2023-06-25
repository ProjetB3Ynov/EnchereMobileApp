import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Login, CreateAcount, Home } from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View className='flex-1'>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgb(134, 239, 172)', 'rgb(59, 130, 246)']}
        className='flex-1'
      >
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false,}}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='CreateAccount' component={CreateAcount}/>
        </Stack.Navigator>
      </NavigationContainer>
      </LinearGradient>
    </View>
  );
}


