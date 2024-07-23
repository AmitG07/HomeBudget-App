import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, TextInput, View, Text } from 'react-native'; // Import Text and FlatList
import { useDispatch } from 'react-redux';
import { addBudgetItem } from '../action';

const BudgetEntryScreen = ({ navigation }) => {
  const [itemName, setItemName] = useState('');
  const [plannedAmount, setPlannedAmount] = useState('');
  const [actualAmount, setActualAmount] = useState('');

  const dispatch = useDispatch();

  const saveItem = () => {
    if (!itemName || !plannedAmount || !actualAmount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    dispatch(addBudgetItem({ itemName, plannedAmount, actualAmount }));
    setItemName('');
    setPlannedAmount('');
    setActualAmount('');
    Alert.alert('Success', 'Item saved successfully');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={itemName}
        onChangeText={setItemName}
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Planned Amount"
        value={plannedAmount}
        onChangeText={setPlannedAmount}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Actual Amount"
        value={actualAmount}
        onChangeText={setActualAmount}
        keyboardType="numeric"
        placeholderTextColor="#666"
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={saveItem} color="#0059b3" style={styles.button} />
        <View style={{ width: 10 }} />
        <Button
          title="Show List"
          onPress={() => navigation.navigate('BudgetEntryListing')}
          color="#ff9933"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 18, 
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: '#333',
  },
  button: {
    height: 50,
  },
});

export default BudgetEntryScreen;
