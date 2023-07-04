import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React from 'react'



const Lab6 = (props) => {
    const {navigation} = props
    
    return (
        <View style={styles.body}>
            <View style={styles.contaifast}>
                <Image style={styles.imgfast} source={require('../../media/fast.png')} />
                <View style={styles.contaipres}>
                    <Pressable style={styles.press}><Text style={styles.txtLogin}>Login</Text></Pressable>
                    <Pressable  onPress={()=> navigation.navigate('Lab6_2')}><Text style={styles.txtLogin}>Sign-up</Text></Pressable>
                </View>
            </View>
            <View style={styles.contaiBao}>
                <View style={styles.contaiInput}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Text style={styles.txtUser}>Username, Mobile Number</Text>
                </View>
                <View style={styles.contaiInputPas}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Text style={styles.txtUser}>Password</Text>
                </View>
                <Text onPress={() => navigation.navigate('Lab6_1')} style={styles.txtFor}>Forgot password?</Text>
                <Pressable style={styles.pressable}>
                    <Text style={styles.textPs}>Login</Text>
                </Pressable>

                <Text style={styles.txtOr}>Or</Text>

                <Pressable style={styles.loginfb}>
                    <Image style={styles.face} source={require('../../media/face.png')}></Image>
                    <Text style={styles.logText}>Log In with Facebook</Text>
                </Pressable>
                <Pressable style={styles.logingg}>
                    <Image style={styles.face} source={require('../../media/gg.png')}></Image>
                    <Text style={styles.logTextgg}>Log In with Google</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default Lab6

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
    contaiBao: {
        padding: 40,
        width: '100%'
    },
    contaiInput: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
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
    },
    contaiInputPas: {
        position: 'relative',
        marginTop: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtFor: {
        paddingLeft: 7,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 15,
        color: '#FA4A0C',
        marginTop: 10,
    },
    pressable: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        height: 50,
        width: '100%',
        backgroundColor: '#F8774A',
        borderRadius: 30,
    },
    textPs: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
        height: 24,
    },
    loginfb: {
        backgroundColor: '#1877F2',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    },
    logText: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
        height: 24,
        paddingLeft:10,
    },
    txtOr: {
        marginTop: 10,
        paddingLeft: '48%',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 18,
        color: '#000000',
        width: '100%',
        marginBottom: 15,
    },
    logingg: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop:15,
        paddingLeft:10,
    },
    logTextgg: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        height: 24,
        paddingLeft:10,
    },
})