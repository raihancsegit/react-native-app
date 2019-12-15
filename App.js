import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('Raihan');
  const [age, setAge] = useState('26');

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
      style={styles.input}
      placeholder ='Your Name'
      onChangeText = { (val) => setName(val) }
      />

    <Text>Enter Age:</Text>
      <TextInput 
        style={styles.input}
        placeholder ='Your Age'
        onChangeText = { (val) => setAge(val) }
        keyboardType = 'numeric'
      />
      <Text>Name: {name} Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor:'pink',
    padding:20,
  },
  input: {
    borderWidth: 1,
    borderColor:'black',
    padding: 8,
    margin:10,
    width:200,
  }
});
