import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const Loginlab3_2 = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>
                Explore
            </Text>
            <Text style={styles.text2}>
                Search for a pet
            </Text>

            <View style={styles.Input}>
                <TextInput placeholder='Search'

                >

                </TextInput>
                <Image style={styles.Inputicon}
                    source={require('../../media/search.png')}>

                </Image>
            </View>

            <View style={styles.Choose}>
                <Pressable style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 700, lineHeight: 19 }}>Cats</Text>
                </Pressable>
                <Pressable style={{ width: 60, height: 60, borderRadius: 10, backgroundColor: '#FFB228', justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 700, lineHeight: 19 }}>Dogs</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 700, lineHeight: 19 }}>Birds</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 700, lineHeight: 19 }}>Others</Text>
                </Pressable>
            </View>

            <View style={styles.WrapDog}>
                <Image style={styles.dog}
                    source={require('../../media/sam1.png')}
                ></Image>
                <View style={styles.AboutDog}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130 }}>
                        <Text style={{ color: 'white', fontSize: 16, lineHeight: 19, fontWeight: 700 }}>CoCo</Text>
                        <Text style={{ color: '#DF0054', fontSize: 16, lineHeight: 19, fontWeight: 700 }}>Female</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130, marginTop: 17 }}>
                        <Text style={{ color: 'white', fontSize: 12, lineHeight: 19, fontWeight: 400 }}>Coach</Text>
                        <Text style={{ color: 'white', fontSize: 12, lineHeight: 19, fontWeight: 400 }}>Origin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130 }}>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 600 }}>Medium</Text>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 600 }}>Canada</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130, marginTop: 15 }}>
                        <Text style={{ color: 'white', fontSize: 14, lineHeight: 19, fontWeight: 500 }}>Age</Text>
                        <Text style={{ color: 'white', fontSize: 14, lineHeight: 19, fontWeight: 500 }}>Weight</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130 }}>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 500 }}>3yrs</Text>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 500 }}>4 Pounds</Text>
                    </View>

                </View>

            </View>
            <View style={[styles.WrapDog, styles.shadowProp]}>
                <Image style={styles.dog}
                    source={require('../../media/sam2.png')}
                ></Image>
                <View style={styles.AboutDog}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130 }}>
                        <Text style={{ color: 'white', fontSize: 16, lineHeight: 19, fontWeight: 700 }}>Snow</Text>
                        <Text style={{ color: '#DF0054', fontSize: 16, lineHeight: 19, fontWeight: 700 }}>Male</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130, marginTop: 17 }}>
                        <Text style={{ color: 'white', fontSize: 12, lineHeight: 19, fontWeight: 400 }}>Coach</Text>
                        <Text style={{ color: 'white', fontSize: 12, lineHeight: 19, fontWeight: 400 }}>Origin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130 }}>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 600 }}>Short</Text>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 600 }}>Greece</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130, marginTop: 15 }}>
                        <Text style={{ color: 'white', fontSize: 14, lineHeight: 19, fontWeight: 500 }}>Age</Text>
                        <Text style={{ color: 'white', fontSize: 14, lineHeight: 19, fontWeight: 500 }}>Weight</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 130 }}>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 500 }}>6yrs</Text>
                        <Text style={{ color: '#DF0054', fontSize: 12, lineHeight: 19, fontWeight: 500 }}>7 Pounds</Text>
                    </View>

                </View>

            </View>

            <View style={styles.Choose2}>
                <Pressable style={styles.button2}>
                    <Image
                        source={require('../../media/s1.png')}>

                    </Image>
                    <Text style={styles.txtEnd}>Home</Text>

                </Pressable>
                <Pressable style={styles.button2}>
                    <Image
                        source={require('../../media/s2.png')}>

                    </Image>
                    <Text style={styles.txtEnd}>Chat</Text>

                </Pressable>
                <Pressable style={styles.button2}>
                    <Image
                        source={require('../../media/s3.png')}>

                    </Image>
                    <Text style={styles.txtEnd}>Notification</Text>

                </Pressable>
                <Pressable style={styles.button2}>
                    <Image
                        source={require('../../media/s4.png')}>

                    </Image>
                    <Text style={styles.txtEnd}>Profile</Text>

                </Pressable>

            </View>
        </View>
    )
}

export default Loginlab3_2

const styles = StyleSheet.create({
    button2: {

        borderRadius: 10,

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 4


    },
    txtEnd: {
        color: '#DF0054', fontSize: 14,
        fontWeight: 300, lineHeight: 17,

    },
    Choose2: {
        backgroundColor: 'rgba(255, 255, 255, 0.71)',
        height: 72,
        width: '100%',
        marginTop: 35,
        flexDirection: 'row',

        justifyContent: 'space-evenly'

    },
    AboutDog: {
        marginTop: 22,
        flexDirection: 'column'
    },
    dog: {
        width: 150,
        height: 170,
        marginTop: 3,
        marginLeft: 12,



    },
    WrapDog: {
        width: 326,
        height: 171,
        borderRadius: 25,
        backgroundColor: 'rgba(255, 210, 187, 0.66)',

        marginRight: 20,
        marginLeft: 25,
        marginTop: 38,

        flexDirection: 'row',






    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        justifyContent: 'center',
        alignItems: 'center',


    },
    Choose: {

        height: 60,
        width: '100%',
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-evenly',


    },
    Inputicon: {
        width: 24,
        height: 24,


        position: 'absolute',
        top: 18,
        left: 18,



    }
    ,
    Input: {
        width: 313,
        height: 52,
        backgroundColor: 'white',
        borderRadius: 25,
        position: 'relative',
        marginTop: 27,
        paddingLeft: 118,
        fontSize: 16,
        paddingTop: 13,
        lineHeight: 18,
        marginLeft: 13,
        marginRight: 20,
        marginLeft: 25,

    }
    ,
    text2: {
        fontSize: 22,
        color: 'white',
        fontWeight: 500,
        textAlign: 'left',
        marginTop: 14,
        marginRight: 20,
        marginLeft: 25,


    }
    ,
    text1: {
        fontSize: 25,
        color: 'white',
        fontWeight: 700,
        textAlign: 'left',
        marginTop: 15,
        marginRight: 20,
        marginLeft: 25,


    }
    ,
    container: {

        backgroundColor: '#DF0054',
        width: '100%',
        height: '100%'

    }
})