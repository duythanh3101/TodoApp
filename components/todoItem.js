import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({item, pressHandler}) {
  return (
        <TouchableOpacity onPress={ () => pressHandler(item.key)}>
          <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#bbb',
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
 
 
});
