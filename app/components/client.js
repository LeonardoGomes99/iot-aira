import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClientMessageComponent = ({ content }) => {
  return (
    <View style={styles.Client}>
      <View style={styles.ClientBox}>

        <View style={styles.ClientMessageBox}>
          <Text style={styles.ClientMessage}>{content.message}</Text>
        </View>

        <View style={styles.ClientMessageBoxTime}>
          <Text style={styles.ClientMessageTime}>{content.timestamp}</Text>
        </View>

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
    minWidth: 100
  },
  ClientMessageBox: {
    alignItems: 'flex-start'
  },
  ClientMessage: {
    color: '#fff'
  },
  ClientMessageBoxTime: {
    alignItems: 'flex-end'
  },
  ClientMessageTime: {
    color: '#fff',
    fontSize: 9,
  }
})