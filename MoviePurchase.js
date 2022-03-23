import React, { useState } from "react";
import { TextInput, Text, Image, TouchableOpacity, View, Alert, StyleSheet } from "react-native";
import globoMovies from "./MoviesDB";

const MoviePurchase = ({route, navigation}) => {
    const [movieQuantity, setMovieQuantity] = useState('1');
    const {movieId} = route.params;
    const selectedMovie = globoMovies.find(Movies => Movies.movieId === movieId);

    const purchase = () => {
        var price = movieQuantity * selectedMovie.price;
        Alert.alert(`Your cost is ${price}$`);
        navigation.navigate('Home');
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.movieName}>
                {selectedMovie.movieName}
            </Text>
            <Image style = {styles.img} source={selectedMovie.image} />
            <Text style = {styles.shortDescription}>
                {selectedMovie.shortDescription}
            </Text>
            <Text style = {styles.description} numberOfLines = {15} ellipsizeMode = 'tail'>
                {selectedMovie.description}
            </Text>
            <View style = {styles.purchaseRow} >
                <Text style = {styles.labels}>
                    Quantity :
                </Text>
                <TextInput 
                style = {styles.textInput}
                onChangeText= {quantity => setMovieQuantity(quantity)}
                value = {movieQuantity}
                selectTextOnFocus = {true}
                keyboardType = 'numeric'
                />
            </View>
            <Text style = {styles.price}>
                Total Price = {movieQuantity*selectedMovie.price}$
            </Text>
            <TouchableOpacity onPress = {purchase} style = {styles.button} >
                <Text style = {styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    purchaseRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        width: '60%'
    },
    movieName: {
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    img: {
        height: 250,
        width: '100%',
        borderRadius: 30,
        paddingBottom:15
    },
    shortDescription: {
        paddingTop: 10,
        textAlignVertical: 'center'
    },
    description: {
        textAlign: 'left',
        fontWeight: '600',
        padding: 10
    },
    price: {
        paddingTop: 5,
        paddingBottom: 10,
        alignItems: 'center'
    },
    buttonText: {
        textAlign: 'center',
        padding: 5
    },
    textInput: {
        borderWidth: 0,
        height: 38,
        width:40,
        marginLeft: 5,
    },
});

export default MoviePurchase;