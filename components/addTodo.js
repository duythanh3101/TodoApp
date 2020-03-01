import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='New to do...'
                onChangeText={changeHandler}
            />
            <Button
                title='Click me'
                onPress={ () => submitHandler(text)}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
    buttonStyle:{
        marginTop:10,
    }
});