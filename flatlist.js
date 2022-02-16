import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const DATA = [
  {
    id: "1",
    title: "Bills",
  },
  {
    id: "2",
    title: "Internet",
  },
  {
    id: "3",
    title: "Transport",
  },

  {
    id: "4",
    title: "Booking",
  },

  {
    id: "5",
    title: "Shopping",
  },

  {
    id: "6",
    title: "Insurance",
  },

  {
    id: "7",
    title: "Events",
  },

  {
    id: "8",
    title: "Education",
  },

  {
    id: "9",
    title: "Charity",
  },
 
];


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#55BCF6" : "#FFFF";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },

  item: {
    backgroundColor: '#FFFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 20,
        marginHorizontal: 20,
  },
  
  title: {
    fontSize: 15,
  },

});



export default App;