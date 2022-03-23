import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator, Image, Text, FlatList } from "react-native";

const News = () => {
    const [isLoaded, setDataLoaded] = useState(true);
    const [storyData, setStoryData] = useState();

    const getNews = async() => {
        try{
            let response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
            let stories = await response.json();
            setStoryData(stories);
            setDataLoaded(false);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        getNews();
    },[]);


    const newsItem = ({item}) => {
        return(
        <View style = {styles.storyList}>
            <View style = {styles.logo}>
                <Image style = {styles.thumb} source={{uri: item.url}} />
            </View>
            <Text style = {styles.storyText}>
                {item.title}
            </Text>
            <Text style = {styles.storyText}>
                {item.url}
            </Text> 
        </View>
        );
    }

    return(
        <View style={styles.container}>
            {isLoaded ? <ActivityIndicator /> : (
                <FlatList data={storyData} renderItem={newsItem} keyExtractor={(item) => item.title}></FlatList>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20
    },
    storyList: {
        paddingBottom: 20
    },
    thumb: {
        height: 180,
        width: '95%',
        borderRadius: 30
    },
    logo: {
        paddingBottom: 10,
        alignItems: 'center'
    },
    storyText: {
        paddingLeft: 10,
    }
});


export default News;