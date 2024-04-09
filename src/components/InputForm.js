import { StyleSheet, Text, View,TextInput } from 'react-native'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'

const InputForm = ({label,value, onChangeText,isSecure,error}) => {
    const [fontsLoaded] = useFonts(fontsColection)

  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
        />
        {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
    </View>
  )
}


export default InputForm


const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor:"white",
        padding:2,
        fontFamily:'Lato',
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10
      },
      titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
        fontFamily:'Montserrat'
      },
      error:{
        fontSize:16,
        color:"red",
        fontFamily:'Montserrat',
        fontStyle:"italic",
        marginLeft:20
      }
})