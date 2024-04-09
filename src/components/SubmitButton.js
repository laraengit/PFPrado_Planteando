import { StyleSheet, Text,Pressable } from 'react-native'
import { colors } from '../utils/colors'
import { fontsColection } from '../utils/fonts'
import { useFonts } from 'expo-font'


const SubmitButton = ({title,onPress}) => {
   const [fontsCargadas] = useFonts(fontsColection)
  return (
        <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
        </Pressable>
  )
}


export default SubmitButton


const styles = StyleSheet.create({
    button:{
        width:"60%",
        backgroundColor:colors.rosa,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    text:{
        fontFamily:"Lato",
        textAlign:"center",
        color:"white",
        fontSize:18
    }
})