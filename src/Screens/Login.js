import { StyleSheet, Text, View ,Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import {useState} from 'react'
import {colors} from '../utils/colors'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'
import { loginSchema } from '../utils/authSchema'

const Login = ({navigation}) => {
    const [fontsLoaded] = useFonts(fontsColection)
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin] = useLoginMutation()

    const onSubmit = async () => {
      try {

        loginSchema.validateSync({email,password})
        const {data} = await  triggerLogin({email,password})
        dispatch(setUser({email:data.email,idToken:data.idToken,localId:data.localId}))

      } catch (error) {

        setErrorEmail("")
        setErrorPassword("")

        switch(error.path){
          case "email":
            setErrorEmail(error.message)
            break
          case "password":
            setErrorPassword(error.message)
            break
          default:
            break
        }

      }
 
    }

  return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <SubmitButton onPress={onSubmit} title="Iniciar Sesion"/>
                <Text style={styles.sub}>No tenes una cuenta?</Text>
                <Pressable onPress={()=> navigation.navigate("Register")} >
                    <Text style={styles.subLink}>Registro</Text>
                </Pressable>
            </View>
        </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:colors.celeste
    },
    container:{
      width:"90%",
      backgroundColor:colors.VerdeClaro,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      fontFamily:'Lato'
    },
    sub:{
      fontSize:14,
      fontFamily:'Lato'
    },
    subLink:{
      fontSize:14,
      fontFamily:'Lato',
      color:colors.verdeOscuro
    }
})