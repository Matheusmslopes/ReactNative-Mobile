import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterPage from './src/pages/RegisterPage';
import LoginPage from './src/pages/LoginPage';

const Stack =  createStackNavigator();

export default function App() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name = "LoginPage" component={LoginPage}/>
          <Stack.Screen name = "RegisterPage" component={RegisterPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}
