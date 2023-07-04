import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React from 'react'

const Lab6_1 = (props) => {
    const {navigation} = props
    return (
        <View style={styles.body}>
            <View style={styles.contaifast}>
                <Image style={styles.imgfast} source={require('../../media/fast.png')} />
                <View style={styles.contaipres}>
                    <Pressable onPress={() => navigation.navigate('Lab6')} style={styles.press}><Text style={styles.txtLogin}>Login</Text></Pressable>
                    <Pressable><Text onPress={() => navigation.navigate('Lab6_2')} style={styles.txtLogin}>Sign-up</Text></Pressable>
                </View>
            </View>
            <View style={styles.contaiBao}>
                <Image style={styles.imgback} source={require('../../media/backl4.png')} />
                <Text style={styles.txtFor}>Forgot password?</Text>
                <View style={styles.contaiInput}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Image style={styles.imgMail} source={require('../../media/Mail.png')} />
                    <Text style={styles.txtUser}>Username, Mobile Number</Text>
                </View>
                <Text style={styles.txtcontent}>* We will send you a message to set or reset your new password</Text>
                <Text style={styles.txtSend}>Send code</Text>

                <Pressable style={styles.presten}><Image source={require('../../media/ten.png')} /></Pressable>
            </View>
            

        </View>
    )
}

export default Lab6_1
const styles = StyleSheet.create({
    body: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D3D3D3'

    },
    contaifast: {
        width: '100%',
        height: 280,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    imgfast: {

    },
    contaipres: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    txtLogin: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 27,
        fontSize: 18,
        color: '#000000',
    },
    txtFor: {
        paddingLeft:7,
        width:180,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 35,
        color: '#F8774A',
        marginTop: 20,
    },
    contaiBao: {
        padding: 30,
        width: '100%'
    },
    contaiInput: {
        position: 'relative',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row',
        marginTop:20,
    },
    input: {
        width: '100%',
        height: 58,
        borderRadius: 10,
        borderColor: '#4E4B66',
        backgroundColor: '#fff',
        
    },
    txtUser: {
        position: 'absolute',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 27,
        fontSize: 16,
        color: '#D3D3D3',
        left:45,
        
    },
    imgMail:{
        position:'absolute',
        left:13,
    },
    txtcontent: {
        marginTop:20,
        paddingLeft:7,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 12,
        
    },
    txtSend: {
        paddingLeft:7,
        width:180,
        fontFamily: 'Gilroy-Bold',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 24,
        color: '#B2B2B2',
        marginTop: 28,
    },
    presten:{
        left:'85%',
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F8774A',
        borderRadius:100,
        width:51,
        height:51,
    },
})