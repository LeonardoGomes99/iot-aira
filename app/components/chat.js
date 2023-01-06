import React, { Component } from 'react';
import HostMessageComponent from './host';
import ClientMessageComponent from './client';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Chat = ({ messages }) => {
    return (

        <View style={styles.Chatbox}>
            <ScrollView>
                {messages.map((content) => {
                    return (
                        content.host ? (<HostMessageComponent content={content} key={content.uuid} />) : (<ClientMessageComponent content={content} key={content.uuid} />
                        ))
                })}
            </ScrollView>
        </View>

    )
}

export default Chat;

const styles = StyleSheet.create({
    Chatbox: {
        height: 660,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: "thistle",
        borderRadius: 30
    }
})