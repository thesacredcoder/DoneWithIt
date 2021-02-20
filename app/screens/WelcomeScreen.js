import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
       <ImageBackground blurRadius={2} style={styles.background} source={require("../assets/background.jpg")}>
           <View style={styles.logoContainer}>
           <Image style={styles.logo} source={require("../assets/logo-red.png")} />
           <Text style={styles.tagline}>Sell What you Don't Need!</Text>
           </View>
           <View style={styles.buttonsContainer}>
           <AppButton title="Login" />
           <AppButton title="Register" color="secondary" />
           </View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonsContainer: {
        width: "100%",
        padding: 20
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
    tagline: {
        fontSize: 25,
        fontWeight: "bold",
        paddingVertical: 10
    }
})

export default WelcomeScreen;