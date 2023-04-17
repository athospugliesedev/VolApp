import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home  from './Home';
import Query from "./Query";
import Perfil from "./Perfil";
import Explore from "./Explore";

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarStyle: {
    backgroundColor:"#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF"
}

const tabs = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    name: 'Consultas',
    component: Query,
    icon: 'calendar',
  },
  {
    name: 'Explorar',
    component: Explore,
    icon: 'search',
  },
  {
    name: 'Perfil',
    component: Perfil,
    icon: 'person',
  },
]

export default function Tabs(){
  return (
    <Tab.Navigator screenOptions={screenOptions}>
    {tabs.map((tab) => (
      <Tab.Screen
        key={tab.name}
        name={tab.name}
        component={tab.component}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={tab.icon} color={color} size={size} />
          )
        }}
      />
    ))
    }
  </Tab.Navigator>

    
  )
}