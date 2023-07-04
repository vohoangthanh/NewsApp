import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'

const Baithem = () => {
  return (
    <View style={styles.body}>
      <View style={styles.containerback}>
        <Image style={styles.img} source={require('../../media/backl4.png')} />
        <Text style={styles.txtCart}>Filters</Text>
      </View>
      <View style={styles.containertxt}>
        <Text style={styles.txtCate}>CATEGROIES</Text>
        <Text >CLEAR ALL</Text>
      </View>
      <View style={styles.containerpres}>
        <Pressable style={styles.pres1}><Text style={styles.padingtxt}>ALL</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>BRUNCH</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>DINNER</Text></Pressable>
      </View>
      <View style={styles.containerpres}>
        <Pressable style={styles.prescolo}><Text style={styles.padingtxt}>BURGERS</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>CHINESE</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>PIZZA</Text></Pressable>
      </View>
      <View style={styles.containerpres}>
        <Pressable style={styles.pres1}><Text style={styles.padingtxt}>SALADS</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>SOUPS</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>BREAKFAST</Text></Pressable>
      </View>
      <View style={styles.containertxt}>
        <Text style={styles.txtCate}>DIETARY</Text>
        <Text >CLEAR ALL</Text>
      </View>
      <View style={styles.containerpres}>
        <Pressable style={styles.prescolo}><Text style={styles.padingtxt}>ANY</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>VEGETARIAN</Text></Pressable>
        <Pressable style={styles.pres2}><Text style={styles.padingtxt}>VEGAN</Text></Pressable>
      </View>
      <View style={styles.containerpres}>
        <Pressable style={styles.pres1}><Text style={styles.padingtxt}>GLUTEN - FREE</Text></Pressable>
      </View>
      <View style={styles.containertxt}>
        <Text style={styles.txtCate}>PRICE RANGE</Text>
        <Text >CLEAR ALL</Text>
      </View>
      <ScrollView style={styles.scrview} horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.contaipres}>
          <Pressable style={styles.prescoint}><Text style={styles.txtCoint}>$</Text></Pressable>
          <Pressable style={styles.prescoint1}><Text style={styles.txtCoint1}>$$</Text></Pressable>
          <Pressable style={styles.prescoint}><Text style={styles.txtCoint}>$$$</Text></Pressable>
          <Pressable style={styles.prescoint}><Text style={styles.txtCoint}>$$$$</Text></Pressable>
          <Pressable style={styles.prescoint}><Text style={styles.txtCoint}>$$$$$</Text></Pressable>
          <Pressable style={styles.prescoint}><Text style={styles.txtCoint}>$$$$$$</Text></Pressable>
        </View>
      </ScrollView>
      <Pressable style={styles.presaply}><Text style={styles.txtapp}>APPLY FILTERS</Text></Pressable>
    </View>
  )
}

export default Baithem

const styles = StyleSheet.create({

  body: {
    width: '100%',
    height: '100%',
    padding: 24,
  },
  txtCart: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 18,
    fontSize: 18,
    alignItems: 'center',
    color: '#111719',
  },
  containerback: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },
  txtCate: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 18,
    fontSize: 18,
    alignItems: 'center',
  },
  containertxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    width: '100%',
  },
  containerpres: {
    flexDirection: 'row',
    marginTop: 15,
  },
  pres1: {
    backgroundColor: '#F1F1F1',
    borderRadius: 6,
  },
  prescolo: {
    backgroundColor: '#F8B64C',
    borderRadius: 6,
  },
  pres2: {
    marginLeft: 20,
    backgroundColor: '#F1F1F1',
    borderRadius: 6,
  },
  padingtxt: {
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
  },
  scrview: {
    marginTop:18,
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  prescoint: {
    marginRight:15,
    justifyContent:'center',
    alignItems:'center',
    width: 64,
    height: 64,
    borderRadius: 40,
    backgroundColor:'#F1F1F1'
  },
  prescoint1: {
    marginRight:15,
    justifyContent:'center',
    alignItems:'center',
    width: 64,
    height: 64,
    borderRadius: 40,
    backgroundColor:'#F8B64C'
  },
  contaipres: {
    flexDirection:'row',
  },
  txtCoint: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    alignItems: 'center',
    color:'#010F07'
  },
  txtCoint1: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    alignItems: 'center',
    color:'#FFFFFF'
  },
  presaply: {
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height: 48,
    borderRadius: 8,
    backgroundColor:'#EEA734'
  },
  txtapp: {
    fontFamily: 'Sofia Pro',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 18,
    alignItems: 'center',
    color:'#FFFFFF'
  },
})