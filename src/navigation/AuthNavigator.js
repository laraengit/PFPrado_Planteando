import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Cabecera from '../components/Cabecera'

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
        screenOptions={({navigation,route})=>{
            return {
                header: () => <Cabecera titulo={route.name} navigation={navigation} route = {route}/>
            }
        }}
    >
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}

export default AuthNavigator