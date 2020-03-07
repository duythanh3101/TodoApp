import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
  return (
        <TouchableOpacity onPress={ () => pressHandler(item.key)}>
          <View style={styles.item}>
              <MaterialIcons name='delete' size={18}/>
              <Text style={styles.itemText}>{item.text}</Text>
          </View>
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
    flexDirection:'row'
  },
  itemText: {
    marginLeft: 5
  }
 
 
});
