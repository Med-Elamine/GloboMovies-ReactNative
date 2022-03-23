import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
    const navigation = useNavigation();

    return(
        <View style = {styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Movies')} style = {styles.button}>
                <Text style = {styles.buttonText}>MOVIES</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    buttonText: {
        color: 'black'
    }
});

export default Menu;