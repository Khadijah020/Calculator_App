import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  
  let displayResult = '';
  if (result) {
    displayResult = result;
  } else if (input) {
    displayResult = input;
  } else {
    displayResult = '0';
  }
  


  const handleInput = (newValue) => {
    setInput((previous) => previous + newValue);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString()); 
    } 
    catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style = {styles.heading}> Basic Calculator </Text>
      <View style = {styles.resultBox}>
      <Text style={styles.result}> {displayResult} </Text>
      </View>
      <View style = {styles.buttonBox}>
      <View style={styles.row}>
        <Button label="7" onPress={() => handleInput('7')} />
        <Button label="8" onPress={() => handleInput('8')} />
        <Button label="9" onPress={() => handleInput('9')} />
        <Button style= {styles.operation} label="÷" onPress={() => handleInput('/')} />
      </View>
      <View style={styles.row}>
        <Button label="4" onPress={() => handleInput('4')} />
        <Button label="5" onPress={() => handleInput('5')} />
        <Button label="6" onPress={() => handleInput('6')} />
        <Button style= {styles.operation} label="×" onPress={() => handleInput('*')} />
      </View>
      <View style={styles.row}>
        <Button label="1" onPress={() => handleInput('1')} />
        <Button label="2" onPress={() => handleInput('2')} />
        <Button label="3" onPress={() => handleInput('3')} />
        <Button style= {styles.operation} label="-" onPress={() => handleInput('-')} />
      </View>
      <View style={styles.row}>
        <Button style= {styles.operation2} label="C" onPress={clearInput} />
        <Button style= {styles.operation2} label="0" onPress={() => handleInput('0')} />
        <Button style= {styles.operation2} label="=" onPress={calculateResult} />
        <Button style= {styles.operation} label="+" onPress={() => handleInput('+')} />
      </View>
      </View>
    </View>
  );
}

const Button = ({ label, onPress, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    justifyContent: 'center',
    backgroundColor: '#154360',
  },
  result: {
    fontSize: 40,
    color: '#333',
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  heading: {
    justifyContent: 'center',
    color: 'orange',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom:10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  resultBox:{
      backgroundColor: '#add8e6', 
      justifyContent: 'center',
      alignItems: 'flex-end',
      padding: 10,
      borderCurve:'continuos',
  },
  buttonBox:{
    backgroundColor: '#2874a6', 
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
    borderCurve:'continuos',
  }
  ,
  button: {
    backgroundColor: '#333333',
    padding: 20,
    flex: 1,
    margin: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  operation:{
    backgroundColor: 'orange',
    padding: 20,
    flex: 1,
    margin: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  operation2:{
    backgroundColor: 'grey',
    padding: 20,
    flex: 1,
    margin: 3,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});
