import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native'
import React, { useState } from 'react'






const Lab5 = () => {
    const [data, setData] = useState(Data);
    const totalPrice = Data.reduce((acc, item) => {
        return acc + item.price;
    }, 0);
    const rederItem = (value) => {
        const { item } = value


        const onchangecong = (item) => {
            const ilementtitem = data.findIndex(function (dataItemloop) {
                return dataItemloop.id == item.id;
            });
            const itemnew = [...data];
            itemnew[ilementtitem] == { ...item };
            itemnew[ilementtitem].so++;
            itemnew[ilementtitem].price += 23.99;
            setData(itemnew);
        }

        const onchangetru = (item) => {
            const ilementtitem = data.findIndex(function (dataItemloop) {
                return dataItemloop.id == item.id;
            });
            const itemnew = [...data];
            itemnew[ilementtitem] == { ...item };
            itemnew[ilementtitem].so--;
            itemnew[ilementtitem].price -= 23.99;
            setData(itemnew);
        }
        const rightSwipe = () => {
            return (
                <View>
                    <Text>Delete</Text>
                </View>
            )
        }

        return (

                <View style={styles.contai1}>
                    <View style={styles.contaiitem}>
                        <Image style={styles.img1} source={require('../../media/hambogo.png')} />
                        <View style={styles.contaitxt}>
                            <Text style={styles.txtpizza}>{item.name}</Text>
                            <Text style={styles.txtChick}>{item.classic}</Text>
                            <Text style={styles.txtdola}>{item.price}</Text>
                        </View>
                        <View style={styles.contaibut}>
                            <Pressable onPress={() => onchangetru(item)} style={styles.prestru}><Image style={styles.line} source={require('../../media/tru.png')} /></Pressable>
                            <Text style={styles.so}>{item.so}</Text>
                            <Pressable onPress={() => onchangecong(item)} style={styles.prescong}><Image style={styles.linec} source={require('../../media/cong.png')} /></Pressable>
                        </View>
                    </View>
                </View>
        )
    }
    // const [cong,setCong] = useState(1);
    // let textso = '';

    return (

        <View style={styles.container}>
            <View style={styles.contailekki}>
                <Image style={styles.img} source={require('../../media/backl4.png')} />
                <View style={styles.contaidevi}>
                    <Text style={styles.txtDeli}>Delivery to</Text>
                    <Text style={styles.txtCart}>lekki phase 1, Estate</Text>
                </View>
                <Image style={styles.cout} source={require('../../media/matne.png')} />
            </View>
            <Text style={styles.txtyour}>Your cart</Text>
            <FlatList
                data={Data}
                renderItem={rederItem}
                keyExtractor={(item, index) => item.id}
            />


            {/* <View style={styles.contai1}>
                <View style={styles.contaiitem}>
                    <Image style={styles.img1} source={require('../../media/hambogo.png')} />
                    <View style={styles.contaitxt}>
                        <Text style={styles.txtpizza}>The Macdonalds </Text>
                        <Text style={styles.txtChick}>Classic cheesburger</Text>
                        <Text style={styles.txtdola}>$23.99</Text>
                    </View>
                    <View style={styles.contaibut}>
                    <Pressable style={styles.prestru}><Image style={styles.line} source={require('../../media/tru.png')} /></Pressable>
                        <Text style={styles.so}>01</Text>
                        <Pressable style={styles.prescong}><Image style={styles.linec} source={require('../../media/cong.png')} /></Pressable>
                    </View>
                </View>
            </View> */}
            {/* <View style={styles.contai1}>
                <View style={styles.contaiitem}>
                    <Image style={styles.img1} source={require('../../media/hambogo.png')} />
                    <View style={styles.contaitxt}>
                        <Text style={styles.txtpizza}>The Macdonalds </Text>
                        <Text style={styles.txtChick}>Classic cheesburger</Text>
                        <Text style={styles.txtdola}>$23.99</Text>
                    </View>
                    <View style={styles.contaibut}>
                        <Pressable style={styles.prestru}><Image style={styles.line} source={require('../../media/tru.png')} /></Pressable>
                        <Text style={styles.so}>01</Text>
                        <Pressable style={styles.prescong}><Image style={styles.linec} source={require('../../media/cong.png')} /></Pressable>
                    </View>
                </View>
            </View> */}

            <View style={styles.contaitotal}>
                <Text style={styles.txttotal}>Total</Text>
                <Text style={styles.txttong}>${totalPrice}</Text>
            </View>
            <Pressable style={styles.pressable}>
                <Text style={styles.textPs}>Process to payment</Text>
            </Pressable>
        </View>
    )
}

export default Lab5

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 25,
    },
    contailekki: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img: {

    },
    contaidevi: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    txtDeli: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 15,
        fontSize: 15,
        color: '#1C1C1C',
    },

    txtCart: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 15,
        fontSize: 15,
        color: '#FE554A',
    },
    cout: {
        width: 30,
        height: 30,
    },
    txtyour: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 31,
        fontSize: 24,
        color: '#3D3D3D',
        marginTop: 40,
        marginBottom: 40,
    },
    contai1: {
        flexDirection: 'row',
        width: 328,
        height: 83.28,
        flexWrap: 'wrap',
        marginTop: 20,
    },
    contaiitem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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

    },
    x: {
    },
    prestru: {
        width: 28.28,
        height: 28.28,
        borderRadius: 17,
        borderWidth: 1,
        backgroundColor: '#FE724C',
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
    contaitotal: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-between',
        left: '5.5%',
        alignItems: 'center',
        marginTop: 80,
    },
    txttotal: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 16,
        fontSize: 16,
        color: '#3D3D3D',
    },
    txttong: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 31,
        fontSize: 24,

        color: '#3D3D3D',
    },
    pressable: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 57,
        height: 50,
        width: '100%',
        backgroundColor: '#F9881F',
        borderRadius: 20,
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
})
const Data = [{
    "id": 1,
    "path": "https://fpoly-hcm.herokuapp.com/uploads/1685378443803-hambogo.png",
    "name": "Delivery to",
    "classic": "Classic cheesburger",
    "price": 23.99,
    "so": 1
}, {
    "id": 2,
    "path": "https://fpoly-hcm.herokuapp.com/uploads/1685378443803-hambogo.png",
    "name": "yeye",
    "classic": "Classic cheesburger",
    "price": 26.99,
    "so": 2

},
]