import { StyleSheet, Text, View,  SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_MAPS_APIKEY } from "@env"

const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}> BAM BAM AYYY</Text>
      <View>
        <GooglePlacesAutocomplete 
        placeholder='Where to?'
        styles={toInputBoxStyles}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})