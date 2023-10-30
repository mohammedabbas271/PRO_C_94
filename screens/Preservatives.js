import * as React from "react"
import {
    View, 
    Text, 
    ScrollView, 
    SafeAreaView, 
    StyleSheet, 
    Image,
    Platform,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    } from "react-native"

export default class Preservatives extends React.Component{
    render() { 
        return ( 
        <View style={styles.container}> 
        <ScrollView>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require("../assets/seven.png")}
            style={styles.ImgBg}>
            <View style={{flex: 0.3, justifyContent: "center", alignItems: "center"}}>
                <Image 
                style={styles.appIcon}
                source={require("../assets/logo.png")}/>
            </View>

            <View> 
                <Image 
                style={styles.appName}
                source={require("../assets/name.png")}/>
            </View>

            <View style={{flex: 0.1, justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                <Text style={styles.schedule}>Preservatives</Text>
            </View>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/ketchup.jpg")}/>
              <Text style={styles.appleText}>Ketchup</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.create}>
              <Image
              style={styles.apple}
              source={require("../assets/honey.jpg")}/>
              <Text style={styles.appleText}>Honey</Text>
            </TouchableOpacity>

            </ImageBackground>
            </ScrollView>
            </View> 
            ) 
            }
}

const styles= StyleSheet.create({
    container: {
     flex:1,
     justifyContent: "center",
     alignItems: "center"
       },
    droidSafeArea: { 
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 
       },
    appIcon:{
     height: 150,
     width: 150,
     marginTop: 100,
     marginBottom: 100
       },
    appTitle: {
     fontSize: 40,
     color: "#E2AD01",
     fontFamily: "Bubblegum-Sans",
     marginTop: 30,
     marginBottom: 30,
        },
    schedule: {
     fontSize: 20,
     color: "#35B998",
     fontFamily: "Bubblegum-Sans",
        },
    ImgBg: {
     resizeMode: "cover",
     flex: 1
        },
    text: {
        fontSize: 50,
        fontWeight: "bold",
        marginBottom: 15,
        color: "white",
    },
    appName: {
        height: 125,
        width: 500,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 70,
        alignSelf: "center"
    },
    create: {
        borderRadius: 10,
        backgroundColor: "#473e57",
        height: 470,
        width: 470,
        left: 35,
        top: 30,
        marginTop: 20
           },
           apple: {
            height: 200,
            width: 200,
            marginTop: 30,
            marginLeft: 140
           },
           appleText: {
            color: "white",
            fontSize: 30,
            fontWeight: "bold",
            alignSelf: "center"
           }
})