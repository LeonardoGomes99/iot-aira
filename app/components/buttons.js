import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const ButtonsComponent = ({ handleChange }) => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        handleChange(message);
    }

    return (
        <View style={styles.containerButtons}>
            <View style={styles.boxInput}>
                <TextInput onChangeText={setMessage} value={message}></TextInput>
            </View>
            <View style={styles.boxSend}>
                <TouchableOpacity onPress={sendMessage}><Text>Enviar</Text></TouchableOpacity>
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
        width: 290,
        borderColor: "thistle",
        borderRadius: 10
    },
    boxSend: {
        marginTop: 15,
        marginLeft: 15
    }
});