import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ButtonsComponent from './components/buttons';
import Chat from './components/chat';

const App = () => {

  const [messages, setMessages] = useState(
    [
      {id: 1, nome: 'Aira', message: 'LEOMOSMAOSMAOSJO', host: false }
    ]
  );

  const handleChange = (message) => {
    setMessages([...messages,{id: messages.length+1, nome: 'Leonardo', message: message, host: true }])
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