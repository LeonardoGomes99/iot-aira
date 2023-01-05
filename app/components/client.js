import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientMessageComponent = ({message}) => {
    return(
        <View style={styles.Client}>
          <View style={styles.ClientBox}>
            <Text style={styles.ClientMessage}>{message}</Text>
          </View>
        </View>
    )
}

export default ClientMessageComponent;

const styles = StyleSheet.create({  
    Client: {
      alignItems: 'flex-start',
      marginBottom: 10
    },
    ClientBox: {        
      backgroundColor: 'red',      
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 18,         
    },
    ClientMessage: {
      color: '#fff'
    }
  })