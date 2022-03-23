import React from "react";
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import globoMovies from "./MoviesDB";

const Movies = ({navigation}) => {
    const MovieItem = ({item}) => {
        return(
            <View style = {styles.Movies}>
                <View style = {styles.imgContainer}>
                    <Image style = {styles.img} source={item.image} />
                </View>
                <View>
                    <Text style = {styles.movieName}>
                        {item.movieName}
                    </Text>
                    <Text style = {styles.shortDescription}>
                        {item.shortDescription}
                    </Text>
                    <Text style = {styles.description} numberOfLines = {15} ellipsizeMode = 'tail'>
                        {item.description}
                    </Text>
                    <Text style = {styles.price} >
                        {item.price}$
                    </Text>
                        <Text style = {styles.movieButton}>GET MOVIE 🎬</Text>
                </View>
            </View>
        ); 
    }

    return(
        <View style = {styles.container}>
            <FlatList data = {globoMovies} renderItem = {MovieItem} keyExtractor = {(item) => item.movieId} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        paddingBottom: 15
    },
    Movies: {
        flexDirection: 'column'
    },
    img: {
        height: 250,
        width: '95%',
        borderRadius: 30
    }, 
    imgContainer: {
        paddingBottom: 10,
        alignItems: 'center'
    },
    movieName: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    shortDescription: {
       fontWeight: '600',
       textAlign: 'center',
       paddingTop: 5 ,
       color: 'black'
    },
    description: {
       fontWeight: '600',
       padding: 5,
       color: 'black'
    },
    movieButton: {
       fontWeight: 'bold',
       textAlign: 'center',
       paddingTop: 5,
       paddingBottom: 15,
       color: 'black'
    },
    price: {
        color: 'blue',
        textAlign:'center',
        fontWeight: 'bold'
    }

});

export default Movies;