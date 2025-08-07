import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons'
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3c0a6b'
      }}>
        <Tab.Screen 
        name='Home' 
        component={WelcomeScreen}
        options={{
          tabBarIcon : ({color,size}) => (
            <Ionicons name='home' size={24} color={color}/>
          )
        }}
        />
        <Tab.Screen 
        name='User' 
        component={UserScreen}
        options={{
          tabBarIcon: ({size,color}) => (
            <Ionicons name='person' size={size} color={color}/>
          )
        }}
        />
      </Tab.Navigator>
        {/* <Drawer.Navigator  screenOptions={{
           headerStyle : {backgroundColor:'#44044dff'},
            headerTintColor:'#f3ddbdfb',
          drawerStyle:{backgroundColor: '#ccc'}, drawerActiveBackgroundColor:'#44044d62',
            drawerActiveTintColor:'#ecdbc2fb',
           }} >
          <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon:({color}) => <Ionicons name='home'  size={20} color={color} />       }}/>
          <Drawer.Screen name='User' component={UserScreen}
          options={{
            drawerIcon : ({color,size}) =>(
              <Ionicons name='person' size={size} color={color}/>
            )
          }}/>
        </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
