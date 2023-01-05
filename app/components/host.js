import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HostMessageComponent = ({message}) => {
    return (
        <View style={styles.Host}>
            <View style={styles.HostBox}>
                <Text style={styles.HostMessage}>{message}</Text>
            </View>
        </View>
    )
}

export default HostMessageComponent;

const styles = StyleSheet.create({
    Host: {
      alignItems: 'flex-end',
      marginBottom: 10
    },
    HostBox: {    
      backgroundColor: 'black',      
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 18,    
      alignContent: 'flex-end'
    },
    HostMessage: {
      color: '#fff'
    }
  })