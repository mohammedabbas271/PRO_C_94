import * as React from "react";
import {
    Text, 
    View, 
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView
    } 
from "react-native"
import { ImageBackground } from "react-native-web";

export default class HomeScreen extends React.Component{
    render(){
        return(
        <View style={styles.container}>
            <ScrollView>
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground 
            source={require("../assets/bg.png")}
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
            <View>
                
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("FruitAndVegetables")}
                style={styles.Monday}>
                    <Text style={styles.textSyle}>Fruits & Vegetables</Text>
                </TouchableOpacity>
                

               
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("BakeryProducts")}
                style={styles.Tuesday}>
                    <Text style={styles.textSyle}>Bakery Products</Text>
                </TouchableOpacity>
                

                
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("GrainsAndProducts")}
                style={styles.Wednesday}>
                    <Text style={styles.textSyle}>Grains & Products</Text>
                </TouchableOpacity>
               

                
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("DairyProducts")}
                style={styles.Thursday}>
                    <Text style={styles.textSyle}>Dairy Products</Text>
                </TouchableOpacity>
                

               
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("NonVeg")}
                style={styles.Friday}>
                    <Text style={styles.textSyle}>Non-Veg</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("HerbsAndSpices")}
                style={styles.Saturday}>
                    <Text style={styles.textSyle}>Herbs And Spices</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate("Preservatives")}
                style={styles.Preservatives}>
                    <Text style={styles.textSyle}>Preservatives</Text>
                </TouchableOpacity>

            </View>
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
    Monday:{
     borderRadius: 30,
     backgroundColor: "#735DA9",
     flex: 0.25,
     marginTop: 60,
     marginLeft: 50,
     marginRight: 50,
    },
    Tuesday:{
     borderRadius: 30,
     backgroundColor: "#7F62B6",
     flex: 0.25,
     marginTop: 50,
     marginLeft: 50,
     marginRight: 50,
    },
    Wednesday:{
     borderRadius: 30,
     backgroundColor: "#7174B7",
     flex: 0.25,
     marginTop: 50,
     marginLeft: 50,
     marginRight: 50
    },
    Thursday:{
     borderRadius: 30,
     backgroundColor: "#627FB6",
     flex: 0.25,
     marginTop: 50,
     marginLeft: 50,
     marginRight: 50,
    },
     Friday:{
     borderRadius: 30,
     backgroundColor: "#5193A5",
     flex: 0.25,
     marginTop: 50,
     marginLeft: 50,
     marginRight: 50,
    },
    Saturday:{
     borderRadius: 30,
     backgroundColor: "#46A79E",
     flex: 0.25,
     marginTop: 50,
     marginLeft: 50,
     marginRight: 50,
    },
    Preservatives:{
        borderRadius: 30,
        backgroundColor: "#35B998",
        flex: 0.25,
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
       },
    appIcon:{
     height: 150,
     width: 150,
     marginTop: 110,
     marginBottom: 44
    },
    appTitle: {
        fontSize: 20,
        color: "#E2AD01",
        fontFamily: "Bubblegum-Sans",
        marginTop: 200,
        textAlign: "centre"
       },
    calendar: {
     height: 30,
     width: 30,
     paddingLeft: 50,
     position: "absolute",
     resizeMode: "contain"
    },
    textSyle: {
     fontSize: 30,
     fontWeight: "bold",
     paddingLeft: 30,
     marginTop: 20,
     textAlign: "centre"
    },
    ImgBg: {
     resizeMode: "cover",
     flex: 1
    },
    appName: {
        height: 125,
        width: 500,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 70,
        alignSelf: "center"
    }
})