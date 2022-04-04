import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from 'tailwind-react-native-classnames';
import NavOptions from "./components/NavOptions"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />

        <GooglePlacesAutocomplete 
          placeholder="Where From?"
          styles= {{
             container: {
               flex: 0, 
             },
          //    textInput: {
          //      fontsize: 18,
          //    }
           }}
           onPress= {(data, details = null) => {
             //pushing data to REDUX
             dispatch(
               setOrigin ({
               location: details.geometry.location,
               description: data.description,
              })
             );
            //  console.log(data);
            //  console.log(details);
            dispatch(setDestination(null));  //set destination as null
           }} 
           fetchDetails={true}
           returnKeyType={"search"}
           //set the origin to the location we click on

           //details include geometry,location, coordinates , storing the coordinations and dispatch it in action into the data layer that is redux, and using a selector which is used to pull the data out from redux

          enablePoweredByContainer={false}
          minLength={2}
           query= {{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
           }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400} //executes a search after 400ms 
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: { 
    color: "green",
  },
});

