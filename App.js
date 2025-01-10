import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = useCallback(() => {
    const ageNum = parseInt(age);
    if (!isNaN(ageNum)) {
      const lower = Math.round((220 - ageNum) * 0.65);
      const upper = Math.round((220 - ageNum) * 0.85);
      setLowerLimit(lower);
      setUpperLimit(upper);
    }
  }, [age]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Calculator</Text>
      <Text style={styles.label}>Enter your age:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Button title="Calculate" onPress={calculateHeartRateLimits} />
      {lowerLimit !== null && upperLimit !== null && (
        <View style={styles.results}>
          <Text style={styles.resultText}>Lower Limit: {lowerLimit}</Text>
          <Text style={styles.resultText}>Upper Limit: {upperLimit}</Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
  results: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
