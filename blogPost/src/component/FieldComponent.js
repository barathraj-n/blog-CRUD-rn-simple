import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FieldComponent = ({fieldName, term, onTermChange}) => {
    
    return(
        <View style={styles.container}>
        <Text style={styles.titleStyle}>{fieldName}</Text>
        <TextInput
            style={styles.textInputStyle} 
            autoCorrect={false}
            value={term}
            onChangeText={onTermChange}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    titleStyle:{
        fontSize: 18,
    },
    textInputStyle:{
        fontSize: 17,
        marginTop: 5,
        padding: 5,
        borderWidth: 1,
    }
});

export default FieldComponent;