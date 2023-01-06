import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ButtonsComponent = ({ handleChange }) => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        handleChange(message);
        setMessage('');
    }

    return (
        <View style={styles.containerButtons}>
            <View style={styles.boxInput}>
                <TextInput onChangeText={setMessage} onSubmitEditing={sendMessage} value={message}></TextInput>
            </View>
            
            <View style={styles.boxSend}>
                <TouchableOpacity onPress={sendMessage}>
                    <Image resizeMode="cover"
                        source={require('../assets/icons/send.png')}
                        style={styles.iconSend}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ButtonsComponent;

const styles = StyleSheet.create({
    containerButtons: {
        padding: 5,
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,        
    },
    boxInput: {
        borderWidth: 1,
        height: 50,
        width: 250,
        borderColor: "thistle",
        borderRadius: 10
    },
    boxSend: {
        marginTop: 15,
        marginLeft: 15,        
    },
    iconSend: {
        height: 30,
        width: 30,
        
        marginLeft: 70
    }
});