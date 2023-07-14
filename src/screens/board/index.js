import React from 'react';
import { SafeAreaView, TouchableOpacity, ImageBackground, View, Text, Image } from 'react-native';

import { StyleBoard } from '../../themes';

import board from '../../../assets/images/board.png';
export default function Board({ navigation }) {
    return (

        <SafeAreaView style={StyleBoard.container}>
            <Image source={board} style={StyleBoard.board} />
        </SafeAreaView>
    );
}