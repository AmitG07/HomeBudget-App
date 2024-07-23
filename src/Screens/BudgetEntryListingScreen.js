import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const BudgetEntryListingScreen = () => {
  const budgetItems = useSelector(state => state.budgetItems);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.itemName}</Text>
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Planned:</Text>
        <Text style={styles.amount}>Rs. {item.plannedAmount}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Actual:</Text>
        <Text style={styles.amount}>Rs. {item.actualAmount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Entry Listing</Text>
      <FlatList
        data={budgetItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  amountLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#555',
  },
  amount: {
    fontSize: 16,
    color: '#555',
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default BudgetEntryListingScreen;
