import { View, Text, StyleSheet, Pressable, Image, TextInput } from 'react-native'
import React from 'react'


const Lab6_2 = (props) => {
    const {navigation} = props
    
    return (
        <View style={styles.body}>
            <View style={styles.contaifast}>
                <Image style={styles.imgfast} source={require('../../media/fast.png')} />
                <View style={styles.contaipres}>
                    <Pressable onPress={() => navigation.navigate('Lab6')} style={styles.press}><Text style={styles.txtLogin}>Login</Text></Pressable>
                    <Pressable><Text style={styles.txtLogin}>Sign-up</Text></Pressable>
                </View>
            </View>
            <View style={styles.contaiBao}>
                <View style={styles.contairegis}>
                    <Text style={styles.txtRegis}>Register</Text>
                    <View style={styles.nut}>
                        <Pressable style={styles.regisfb}>
                            <Image style={styles.face} source={require('../../media/gg.png')}></Image>
                        </Pressable>
                        <Pressable style={styles.regisfb}>
                            <Image style={styles.face} source={require('../../media/face.png')}></Image>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.contaiInput}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Text style={styles.txtUser}>Full Name</Text>
                </View>
                <View style={styles.contaiInputPas}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Text style={styles.txtUser}>Mobile Number</Text>
                </View>
                <View style={styles.contaiInputPas}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Text style={styles.txtUser}>Password</Text>
                </View>
                <View style={styles.contaiInputPas}>
                    <TextInput style={styles.input} >
                    </TextInput>
                    <Text style={styles.txtUser}>Confirm Password</Text>
                </View>
                <View style={styles.contaipresRegis}>
                    <Pressable style={styles.pressablerRegis}>
                        <Text style={styles.textPs}>Login</Text>
                    </Pressable>
                    <View style={styles.contaitxt}>
                        <Text style={styles.textAl}>Already  </Text>
                        <Text style={styles.textAl}>a Member? Login</Text>
                    </View>

                </View>
            </View>

        </View>
    )
}

export default Lab6_2
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
        padding: 45,
        width: '100%'
    },
    contaiInput: {
        position: 'relative',
        justifyContent: 'center',
        marginTop: 20,
    },
    input: {
        width: '100%',
        height: 50,
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
        alignItems: 'flex-start',
        paddingLeft: 20,
    },
    contaiInputPas: {
        position: 'relative',
        marginTop: 18,
        justifyContent: 'center',
    },
    contairegis: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    txtRegis: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 36,
        color: '#F8774A',
    },
    regisfb: {
        backgroundColor: '#FFFFFF',
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    nut: {
        flexDirection: 'row',
        width: 105,
        justifyContent: 'space-between',
    },
    pressablerRegis: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        height: 58,
        width: 183,
        backgroundColor: '#F8774A',
        borderRadius: 30,
    },
    textPs: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF',
        height: 24,
    },
    contaipresRegis: {
        flexDirection: 'row',
        width: '100%',
    },
    contaitxt: {
        flexDirection: 'column',
        marginTop: 30,
    },
    textAl: {
        width: 160,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.12,
        height: 24,
        paddingLeft: 20,
        color: '#B3B3B3'
    },
})
