import React from 'react';
import { TextInput, View } from 'react-native';
import StyleCommon from '../../themes/common';
export default function Input(props) {
    return (
        <View style={StyleCommon.inputContainer}>
            <TextInput style={StyleCommon.inputField}  {...props} />
        </View>
    );
}