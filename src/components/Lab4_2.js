import { View, Text, StyleSheet, Image, Pressable, TextInput, Button } from 'react-native'
import React from 'react'

const Lab4_2 = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../media/backl4.png')} />
            <Text style={styles.txtCart}>My Orders</Text>
            <Image style={styles.cout} source={require('../../media/coutl4.png')} />
            <View style={styles.containerbut}>
                <Pressable style={styles.presup}><Text style={styles.txtUp}>Upcoming</Text></Pressable>
                <Pressable style={styles.History}><Text style={styles.txthistory}>History</Text></Pressable>
            </View>
            <View style={styles.containerid}>
                <View style={styles.id1}>
                    <Image style={styles.imgnuthan} source={require('../../media/nuthan.png')} />
                    <Text style={styles.txtitem}>3 Items</Text>
                    <Text style={styles.txtstart}>Starbuck</Text>
                    <Image style={styles.tich} source={require('../../media/tichh.png')} />
                    <Text style={styles.txtso}>#264100</Text>
                </View>
                <View style={styles.txtcontainer}>
                    <Text style={styles.txtshow}>Estimated Arrival</Text>
                    <Text style={styles.txtshow}>Now</Text>
                </View>
                <View style={styles.timecontainer}>
                    <View style={styles.txtbao}>
                        <Text style={styles.txtsohailam}>25</Text>
                        <Text style={styles.txtmin}>min</Text>
                    </View>
                    <Text style={styles.txtfood}>Food on the way</Text>
                </View>
                <View style={styles.yesnocontainer}>
                    <Pressable style={styles.prescancel}><Text style={styles.txtyesno}>Cancel</Text></Pressable>
                    <Pressable style={styles.presorder}><Text style={styles.txtyesno2}>Track Order</Text></Pressable>
                </View>
            </View>

            <Text style={styles.txtLasted}>Lasted Orders</Text>
            <View style={styles.containerid2}>
                <View style={styles.contaijj}>
                    <Image style={styles.imgjj} source={require('../../media/jj.png')} />

                    <View style={styles.contaijony}>
                        <Text style={styles.txtitemjj}>20 Jun, 10:30 * 3 Items</Text>
                        <View style={styles.jony}>
                            <Text style={styles.txtjimmy}>Jimmy John’s</Text>
                            <Image style={styles.tich2} source={require('../../media/tichh.png')} />
                        </View>
                        <View style = {styles.oderDeli}>
                            <View style = {styles.chamxanh}></View>
                            <Text style = {styles.txtOder}>Order Delivered</Text>
                        </View>
                        
                    </View>
                    <Text style={styles.txttien}>$17.10</Text>
                </View>


                <View style={styles.ratecontainer}>
                    <Pressable style={styles.prescancel}><Text style={styles.txtyesno}>Rate</Text></Pressable>
                    <Pressable style={styles.presorder}><Text style={styles.txtyesno2}>Re-Order</Text></Pressable>
                </View>
            </View>
            <View style={styles.containerid3}>
                <View style={styles.contaijj}>
                    <Image style={styles.imgjj} source={require('../../media/sub.png')} />

                    <View style={styles.contaijony}>
                        <Text style={styles.txtitemjj}>19 Jun, 11:50 * 3 Items</Text>
                        <View style={styles.jony}>
                            <Text style={styles.txtjimmy}>Subway</Text>
                            <Image style={styles.tich2} source={require('../../media/tichh.png')} />
                        </View>
                        <View style = {styles.oderDeli}>
                            <View style = {styles.chamxanh}></View>
                            <Text style = {styles.txtOder}>Order Delivered</Text>
                        </View>
                        
                    </View>
                    <Text style={styles.txttien}>$20.50 </Text>
                </View>


                <View style={styles.ratecontainer}>
                    <Pressable style={styles.prescancel}><Text style={styles.txtyesno}>Rate</Text></Pressable>
                    <Pressable style={styles.presorder}><Text style={styles.txtyesno2}>Re-Order</Text></Pressable>
                </View>
            </View>

        </View>
    )
}

export default Lab4_2
const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 25,
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
        fontSize: 17,

        color: '#111719',
    },
    cout: {
        position: 'absolute',
        left: 310,
        top: 37,
        borderRadius: 12,

    },
    containerbut: {
        position: 'absolute',
        borderWidth: 0.3,
        borderRadius: 27.5,
        width: '100%',
        height: 55,
        color: '#F2EAEA',
        borderStyle: 'solid',
        left: 26,
        top: 107,
    },
    presup: {
        position: 'absolute',
        width: 159.96,
        height: 47,
        borderRadius: 23.5,
        backgroundColor: '#FE724C',
        top: 4,
        left: 5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    txtUp: {
        color: '#FEFEFE'
    },
    History: {
        position: 'absolute',
        width: 159.96,
        height: 47,
        borderRadius: 23.5,
        backgroundColor: '#FFFFFF',
        top: 4,
        left: 175,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txthistory: {
        position: 'absolute',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 14,
        fontSize: 14,
        alignItems: 'center',
        color: '#FE724C',
    },
    containerid: {
        position: 'absolute',
        borderWidth: 0.3,
        borderRadius: 18.2143,
        width: '100%',
        height: 238,
        color: 'gray',
        top: 194,
        left: 26,
        padding: 18,

    },
    id1: {
        position: 'absolute',
        width: '90%',
        height: 67,
        top: 2,
        left: 17,
        flexDirection: 'row',
    },
    imgnuthan: {
        position: 'absolute',
        top: 9,
        left: 9,
    },
    txtitem: {
        position: 'absolute',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 12,
        fontSize: 12,
        color: '#9796A1',
        top: 15,
        left: 75,

    },
    txtstart: {
        position: 'absolute',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 16,
        fontSize: 16,
        color: '#000000',
        top: 40,
        left: 75,
    },
    tich: {
        position: 'absolute',
        top: 42,
        left: 140,
        width: 10,
        height: 10,
    },
    txtso: {
        position: 'absolute',
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 16,
        fontSize: 16,
        color: '#FE724C',
        left: 230,
        top: 10,
    },
    txtcontainer: {
        position: 'absolute',
        width: '100%',
        height: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 80,
        left: 18,
    },
    txtshow: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 12,
        fontSize: 12,
        color: '#9796A1',
    },

    timecontainer: {
        flexDirection: 'row',
        width: '100%',
        height: 32,
        top: 90,
        justifyContent: 'space-between'
    },
    txtbao: {
        flexDirection: 'row',
    },
    txtsohailam: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 39,
        fontSize: 39.2727,
        color: '#111719',
        width: 51,
        height: 31,
    },
    txtmin: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 15,
        fontSize: 15,
        color: '#111719',
        width: 26,
        height: 11,
        top: 20,
    },
    txtfood: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 14,
        fontSize: 14,
        color: '#111719',
        width: 109,
        height: 15,
    },
    yesnocontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 43,
        color: '#F2EAEA',
        top: 120,
    },
    prescancel: {
        width: 140,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.1,

    },
    presorder: {
        width: 140,
        height: 50,
        borderRadius: 100,
        backgroundColor: '#FE724C',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtyesno: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 15,
        fontSize: 15,
        color: '#111719',
    },
    txtyesno2: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 15,
        fontSize: 15,
        color: '#FFFFFF',
    },
    txtLasted: {
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 18,
        fontSize: 20,
        color: '#111719',
        top: 430,
        left:20,
    },
    containerid2: {
        borderWidth: 0.3,
        borderRadius: 18.2143,
        width: '100%',
        height: 150,
        color: 'gray',
        top: 440,
        padding: 18,
        justifyContent: 'flex-end',

    },
    contaijj: {
        flexDirection: 'row',
        width: '100%',
        height: 80,

    },
    ratecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 43,
        color: '#F2EAEA',

    },
    idjimmy: {
        position: 'absolute',
        width: '90%',
        height: 67,
    },
    contaijony: {
        marginLeft: 20,
    },
    imgjj: {
        left: 9,
        width:46,
        height:46,
    },
    jony: {
        flexDirection: 'row'
    },
    txtitemjj: {
        paddingTop:4,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 12,
        fontSize: 12,
        color: '#9796A1',

    },
    txtjimmy: {
        paddingTop:10,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 16,
        fontSize: 16,
        color: '#000000',

    },
    oderDeli:{
        paddingTop:10,
        flexDirection:'row',
    },
    chamxanh:{
        top:4,
        width:7,
        height:7,
        backgroundColor:'#4EE476',
        borderRadius:100,
    },
    txtOder:{
        left:4,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 14,
        fontSize: 14,
        color: '#4EE476',
    },
    tich2: {
        width: 10,
        height: 10,
    },
    txttien: {
        paddingLeft:50,
        fontFamily: 'Sofia Pro',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 16,
        fontSize: 16,
        color: '#FE724C',
        justifyContent: 'flex-end'
    },
    containerid3: {
        borderWidth: 0.3,
        borderRadius: 18.2143,
        width: '100%',
        height: 150,
        color: 'gray',
        top: 440,
        padding: 18,
        justifyContent: 'flex-end',
        marginTop:20,
    },
})