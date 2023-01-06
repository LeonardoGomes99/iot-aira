import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HostMessageComponent = ({ content }) => {
  return (
    <View style={styles.Host}>
      <View style={styles.HostBox}>

        <View style={styles.HostMessageBox}>
          <Text style={styles.HostMessage}>{content.message}</Text>
        </View>

        <View style={styles.HostMessageBoxTime}>
          <Text style={styles.HostMessageTime}>{content.timestamp}</Text>
        </View>

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
    minWidth: 100
  },
  HostMessageBox: {
    alignItems: 'flex-start'
  },
  HostMessage: {
    color: '#fff'
  },
  HostMessageBoxTime: {
    alignItems: 'flex-end'
  },
  HostMessageTime: {
    color: '#fff',
    fontSize: 9,
  }
})