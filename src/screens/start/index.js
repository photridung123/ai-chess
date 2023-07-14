import React from 'react';
import { SafeAreaView, TouchableOpacity, ImageBackground, View, Text } from 'react-native';

import Input from '../../components/common/Input';
import { StyleStart, StyleCommon } from '../../themes';

import bg from '../../../assets/images/background.png';
export default function Start({ navigation }) {
    return (
        <SafeAreaView style={StyleStart.container}>
            <ImageBackground source={bg} style={StyleStart.background}>
            <Text style={{
                marginLeft: 130,
                paddingTop: 130,
                fontSize: 40
            }}>AI Chess</Text>
            <View style={StyleStart.boxInput}>
                <Input placeholder="Nhập tên người chơi" />
                <TouchableOpacity style={{ ...StyleCommon.button, marginTop: 40, width: 250, marginLeft: 65 }} onPress={() => navigation.navigate('Board')}>
                    <Text style={StyleCommon.buttonText}>Bắt đầu</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}