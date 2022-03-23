import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Home = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image style={styles.globoLogo} source={require('./images/Home.png')}/>
                <Text style={styles.title}>
                    📽️ Welcome To {props.appName} 📽️
                </Text>
                <Text style={styles.subTitle}>
                    💥 Here you can find your Movie 💥
                </Text>
                <Text style={styles.sub2Title}>
                    🍿 Enjoy watching 🍿
                </Text>
            </View>
            <Image style={styles.logo} resizeMode='cover' source={require('./images/intro.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.content}>
                    {introText}
                </Text>
                <Text style={styles.content}>
                    {secondText}
                </Text>
            </View>
        </View>
    );
}

const introText = "You're in the world's most popular and authoritative source for movie, TV and celebrity content.";
const secondText = "Find ratings and reviews for the newest movie and TV shows";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        paddingTop: 120,
    },
    textContainer: {
        padding: 20,
        color: 'black'
    },
    globoLogo: {
        height: 200,
        width: 300, 
    },
    logo: {
        height: 180,
        width: '95%',
        borderRadius: 30
    },
    title: {
        fontWeight: 'bold',
        color: 'black'
    }, 
    subTitle: {
        paddingTop: 5,
        color: 'black'
    },
    sub2Title: {
        paddingTop: 5,
        paddingBottom: 20,
        color: 'black'
    },
    content: {
        textAlign: 'center',
        fontWeight: '200',
        fontSize: 12,
        color: 'black'
    }
});

export default Home;