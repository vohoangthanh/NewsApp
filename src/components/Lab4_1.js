import { View, Text, StyleSheet, Image, Pressable, TextInput } from 'react-native'
import React from 'react'

const Lab4_1 = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../media/backl4.png')} />
            <Text style={styles.txtCart}>Cart</Text>
            <View style={styles.contai1}>
                <Image style={styles.img1} source={require('../../media/imagel4.png')} />
                <View style={styles.contaitxt}>
                    <Text style={styles.txtpizza}>Red n hot pizza</Text>
                    <Text style={styles.txtChick}>Spicy chicken, beef</Text>
                    <Text style={styles.txtdola}>$15.30</Text>
                </View>
                <View style={styles.contaibut}>
                    <Pressable style={styles.prestru}><Image style={styles.line} source={require('../../media/Line.png')} /></Pressable>
                    <Text style={styles.so}>02</Text>
                    <Pressable style={styles.prescong}><Image style={styles.linec} source={require('../../media/cong.png')} /></Pressable>
                </View>
                <Image style={styles.x} source={require('../../media/x.png')} />
            </View>
            <View style={styles.contai2}>
                <Image style={styles.img1} source={require('../../media/imagel4.png')} />
                <View style={styles.contaitxt}>
                    <Text style={styles.txtpizza}>Greek salad</Text>
                    <Text style={styles.txtChick}>With baked salmon</Text>
                    <Text style={styles.txtdola}>$12.00</Text>
                </View>
                <View style={styles.contaibut}>
                    <Pressable style={styles.prestru}><Image style={styles.line} source={require('../../media/Line.png')} /></Pressable>
                    <Text style={styles.so}>02</Text>
                    <Pressable style={styles.prescong}><Image style={styles.linec} source={require('../../media/cong.png')} /></Pressable>
                </View>
                <Image style={styles.x} source={require('../../media/x.png')} />
            </View>
            <View style={styles.contaiInput}>
                <TextInput
                    placeholder="Promo Code"
                    keyboardType='name-phone-pad'
                    style={styles.txtinput}
                >
                </TextInput>
                <Pressable style={styles.presApply}><Text>Apply</Text></Pressable>
            </View>
            <View style={styles.contaigia}>
                <View style={styles.ten}>
                    <View >
                        <Text style={styles.fontten}>Subtotal</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.fontgia}>$27.30</Text>
                        <Text style={styles.usd}>USD</Text>
                    </View>
                </View>
                <View style={styles.ten2}>
                    <View>
                        <Text style={styles.fontten}>Tax and Fees</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.fontgia}>$5.30</Text>
                        <Text style={styles.usd}>USD</Text>
                    </View>
                </View>
                <View style={styles.ten3}>
                    <View>
                        <Text style={styles.fontten}>Delivery</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.fontgia}>$1.00</Text>
                        <Text style={styles.usd}>USD</Text>
                    </View>
                </View>
                <View style={styles.ten4}>
                    <View>
                        <Text style={styles.fontten}>Total</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.fontgia}>$33.60</Text>
                        <Text style={styles.usd}>USD</Text>
                    </View>
                </View>
            </View>
            <Pressable style={styles.presCheck}><Text style={styles.txtCheck}>CHECKOUT</Text></Pressable>
        </View>
    )
}

export default Lab4_1
const styles = StyleSheet.create({

    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 25,
    },
    txtCheck: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 16,
        fontSize: 16,
        color: '#FFFFFF',
        letterSpacing: 0.08,
    },
    presCheck: {
        justifyContent: 'center',
        position: 'absolute',
        width: 248,
        height: 57,
        borderRadius: 28.5,
        backgroundColor: '#FE724C',
        alignItems: 'center',
        top: 670,
        left: '22%',
    },
    fontten: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 16,
        fontSize: 16,
        alignItems: 'center',
        color: '#000000',
    },
    fontgia: {

        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 19,
        fontSize: 19,
        color: '#000000',
    },
    usd: {
        paddingLeft: 3,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 14,
        fontSize: 14,
        color: '#9796A1',
    },
    contaigia: {
        flexDirection: 'column',
        width: '100%',
        height: 165,
        top: 400,
        width: '100%',
    },
    ten: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ten2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    ten3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    ten4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
    },
    contaiInput: {
        position: 'relative',
        top: 310,
        width: '100%'
    },
    txtinput: {
        position: 'absolute',
        width: '100%',
        height: 60,
        borderWidth: 1,
        borderRadius: 100,
    },
    presApply: {
        position: 'absolute',
        width: 96.52,
        height: 40.13,
        borderRadius: 28.5,
        backgroundColor: '#FE724C',
        marginTop: 9,
        paddingTop: 8,
        marginLeft: 226,
        alignItems: 'center'
    },
    contaitxt: {
        marginLeft: 21,
    },
    img: {
        position: 'absolute',
        left: '11.93%',
        right: '87.93%',
        top: '6.4%',
        bottom: '92.49%',
    },
    txtCart: {
        position: 'absolute',
        left: '45.07%',
        right: '45.07%',
        top: '5.79%',
        bottom: '92%',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 18,
        fontSize: 18,
        alignItems: 'center',
        color: '#111719',
    },
    img1: {
    },
    txtpizza: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 18,
        fontSize: 18,
        color: '#000000',
    },
    txtChick: {
        paddingTop: 13,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 300,
        lineHeight: 14,
        fontSize: 14,
        color: '#8C8A9D',
    },
    txtdola: {
        paddingTop: 13,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 600,
        lineHeight: 16,
        fontSize: 16,
        color: '#FE724C',
    },
    contaibut: {
        flexDirection: 'row',
        width: 89,
        height: 28.28,
        marginLeft: 9,
        marginTop: 52,
    },
    x: {
    },
    prestru: {
        width: 28.28,
        height: 28.28,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: '#FE724C',
        borderStyle: 'solid'
    },
    line: {
        top: 12,
        left: 8,
    },
    so: {
        marginTop: 7,
        marginLeft: 7.02,
        width: 19,
        height: 13,
        marginRight: 7.02,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 16,
        fontSize: 16,
        color: '#000000',
    },
    prescong: {
        width: 28.28,
        height: 28.28,
        borderRadius: 17,
        borderWidth: 1,
        backgroundColor: '#FE724C',
        borderColor: '#FE724C',
        borderStyle: 'solid'
    },
    linec: {
        top: 5,
        left: 5,
    },
    contai1: {
        flexDirection: 'row',
        position: 'absolute',
        width: 328,
        height: 83.28,
        left: 22,
        top: 105,
    },
    contai2: {
        flexDirection: 'row',
        position: 'absolute',
        width: 328,
        height: 83.28,
        left: 22,
        top: 220,

    }

})