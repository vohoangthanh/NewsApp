import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React ,{useState}from 'react'



// adpter
// hiển thị 1 dòng item
const rederItem = (value) => {
    const{ item} = value
    return(
        <View>
            <Text style = {{fontSize: 30}}>
                    {item.name}
                    </Text>
                    <Text style = {{fontSize: 30}}>
                    {item.id}
                    </Text>
        </View>
    )
}
const Screen4 = () => {
    const[refreshing, setfreshing] = useState(false);
    const onRefresh = () =>{
        setfreshing(true);
        setTimeout(() =>{
            Data[5].name = 'nguyen van a'
            setfreshing(false);
        },2000);
    }
    return (
        <View>
            <Text>Mafn hinh chinh</Text>
            <FlatList 
            onRefresh={onRefresh}
            refreshing={refreshing}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            data={Data}
            renderItem={rederItem}
            keyExtractor={(item,index) => item.id}
            
            />

            {/* <ScrollView
                horizontal={false} // hiện dọc và ngang
                showsVerticalScrollIndicator={false} // show thanh cuoojn 
                style={styles.scroll}>
                {
                    Data.map((item, index) => {
                        return (
                            <Text>{item.name}</Text>
                        )
                    })
                }
            </ScrollView> */}
        </View>
    )
}

export default Screen4
const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 300,
    }
})

const Data = [{
    "id": 1,
  "name": "Ilyse",
  "email": "imannooch0@walmart.com"
}, {
  "id": 2,
  "name": "Betsey",
  "email": "bantonetti1@amazon.de"
}, {
  "id": 3,
  "name": "Hadria",
  "email": "haizikovitch2@gizmodo.com"
}, {
  "id": 4,
  "name": "Zorina",
  "email": "zheddon3@hp.com"
}, {
  "id": 5,
  "name": "Aleda",
  "email": "aannell4@networkadvertising.org"
}, {
  "id": 6,
  "name": "Eleni",
  "email": "emouncey5@simplemachines.org"
}, {
  "id": 7,
  "name": "Ronni",
  "email": "rbollom6@tripadvisor.com"
}, {
  "id": 8,
  "name": "Mureil",
  "email": "mskeleton7@ed.gov"
}, {
  "id": 9,
  "name": "Tammi",
  "email": "tspriggs8@ucla.edu"
}, {
  "id": 10,
  "name": "Joelle",
  "email": "jalder9@w3.org"
}, {
  "id": 11,
  "name": "Gabriell",
  "email": "gmccurta@odnoklassniki.ru"
}, {
  "id": 12,
  "name": "Linda",
  "email": "lhenlonb@cmu.edu"
}, {
  "id": 13,
  "name": "Adria",
  "email": "abetoniac@adobe.com"
}, {
  "id": 14,
  "name": "Amberly",
  "email": "aonslowd@usa.gov"
}, {
  "id": 15,
  "name": "Milzie",
  "email": "mmallebonee@storify.com"
}, {
  "id": 16,
  "name": "Raven",
  "email": "rzylbermannf@google.com.au"
}, {
  "id": 17,
  "name": "Mel",
  "email": "mlempertzg@ebay.com"
}, {
  "id": 18,
  "name": "Gratia",
  "email": "gporcherh@imageshack.us"
}, {
  "id": 19,
  "name": "Phoebe",
  "email": "pbaldungi@bravesites.com"
}, {
  "id": 20,
  "name": "Emalia",
  "email": "esiggj@msn.com"
}, {
  "id": 21,
  "name": "Olly",
  "email": "obrowettk@networksolutions.com"
}, {
  "id": 22,
  "name": "Mariejeanne",
  "email": "mmowsdelll@bluehost.com"
}, {
  "id": 23,
  "name": "Vyky",
  "email": "vixorm@creativecommons.org"
}, {
  "id": 24,
  "name": "Jaquelin",
  "email": "jdowsettn@ovh.net"
}, {
  "id": 25,
  "name": "Tiphanie",
  "email": "tnialo@prnewswire.com"
}, {
  "id": 26,
  "name": "Dottie",
  "email": "dcorintonp@state.tx.us"
}, {
  "id": 27,
  "name": "Edy",
  "email": "eparkeq@stumbleupon.com"
}, {
  "id": 28,
  "name": "Germana",
  "email": "gadaminir@si.edu"
}, {
  "id": 29,
  "name": "Drusy",
  "email": "ddunys@hp.com"
}, {
  "id": 30,
  "name": "Cleo",
  "email": "cbegginit@nasa.gov"
}, {
  "id": 31,
  "name": "Kristine",
  "email": "knaresu@blinklist.com"
}, {
  "id": 32,
  "name": "Mariele",
  "email": "mwinsleyv@unblog.fr"

}]