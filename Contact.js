import React, { useState } from "react";
import { Button, View, Text, TextInput, Alert, StyleSheet } from "react-native";

const Contact = ({navigation}) => {

    const [formName, setFormName] = useState('Enter Name');
    const [formEmail, setFormEmail] = useState('Enter Email Address');
    const [formPhone, setFormPhone] = useState('Enter Phone Number');
    const [formMessage, setFormMessage] = useState('Let us know about your needs');

    const submit = () => {
        if(!formName || !formEmail || !formMessage){
            Alert.alert('Please! Fill all required fields');
        }else{
            Alert.alert(`Thank you ${formName}, we will solve your problem`);
            navigation.navigate('Home');
        }
    }

    return(
        <View style={styles.menu}>
            <View style={styles.input}>
                <Text style={styles.lables}>
                        Name : 
                        <Text style={styles.required}>
                            *required
                        </Text>
                    </Text>
                    <TextInput style={styles.txtInput} 
                    onChangeText={name => setFormName(name)}
                    value={formName}
                    autoCapitalize='words'
                    selectTextOnFocus= {true}/>
            </View>
            <View style={styles.input}>
                <Text style={styles.lables}>
                        Email : 
                        <Text style={styles.required}>
                            *required
                        </Text>
                    </Text>
                    <TextInput style={styles.txtInput} 
                    onChangeText={email => setFormEmail(email)}
                    value={formEmail}
                    autoCapitalize='words'
                    selectTextOnFocus={true}/>
            </View>
            <View style={styles.input}>
                <Text style={styles.lables}>
                        Phone : 
                    </Text>
                    <TextInput style={styles.txtInput} 
                    onChangeText={phone => setFormPhone(phone)}
                    value={formPhone}
                    autoCapitalize='words'
                    selectTextOnFocus={true}/>
            </View>
            <View style={styles.input}>
                <Text style={styles.lables}>
                        Message : 
                        <Text style={styles.required}>
                            *required
                        </Text>
                    </Text>
                    <TextInput style={styles.multitxtInput} 
                    onChangeText={message => setFormMessage(message)}
                    value={formMessage}
                    multiline={true}
                    numberOfLines={3}
                    autoCapitalize='words'
                    selectTextOnFocus={true}/>
            </View>
            <Button 
            title="Contact Us"
            color='#708090'
            onPress={submit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 18
    },
    txtInput: {
        borderWidth: 1,
        width: 300,
        paddingBottom: 10,
        paddingStart: 10
    },
    multitxtInput: {
        borderWidth: 1,
        width: 300,
        marginBottom: 50,
        height: 120,
        paddingStart: 10
    },
    lables: {
        paddingBottom: 5, 
        color: 'black'
    },
    required: {
        color: 'red',
        marginLeft: 20,
        textAlign:'center'
    },
    input: {
        paddingBottom: 20
    }
});

export default Contact;