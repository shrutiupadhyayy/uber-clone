import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon, Image } from "react-native-elements"
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../../slices/navSlice'

const data = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  },
]
//IF WE HAVE SURGE PRICING, THIS GOES UP
const SURGE_CHARGE_RATE = 1.5;
 

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView styles={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
         style={tw`absolute top-1 right-12 z-50 p-0.5 rounded-full`}>
            <Icon name="chevron-left" type="fontawesome" /> 
        </TouchableOpacity>       
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance.text}</Text>
      </View>

      <FlatList
       data={data} 
       keyExtractor={(item) => item.id}
       renderItem={({ item: { id, title, multiplier, image }, item }) => (
         <TouchableOpacity 
         onPress={() => setSelected(item)}
          style={tw`flex-row justify-between items-center px-10 ${
            id === selected?.id && "bg-gray-200"
          }`}
         >
           <Image
             style={{
               width: 100,
               height: 100,
               resizeMode: "contain",
             }}
             source={{ uri: image }}
             />
             <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}Travel Time</Text>
             </View>
             <Text>
             {/* <Text style={tw`text-xl`}> */}

              {/* {new Intl.NumberFormat('en-gb', {
                style: 'currency',
                currency: 'GBP'
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
              )} */}

             </Text>
         </TouchableOpacity>
       )}
      
      />
      <TouchableOpacity
       disabled={!selected}
       style={tw`bg-black py-3 m-2 ${!selected && "bg-gray-300"}`}>
        <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({}) 