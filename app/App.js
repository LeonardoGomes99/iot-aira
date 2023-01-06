import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonsComponent from './components/buttons';
import Chat from './components/chat';
import { UUID, Timestamps } from './utils/generator';

const App = () => {

  const [messages, setMessages] = useState([]);

  const handleChange = (message) => {
    setMessages([...messages, {
      id: messages.length + 1, uuid: UUID(),
      nome: 'Leo', message: message, timestamp: Timestamps(), host: true
    }])
  }

  return (
    <>
      <ScrollView>
        <Chat messages={messages} />
        <ButtonsComponent handleChange={handleChange} />
      </ScrollView>
    </>
  )
}

export default App;