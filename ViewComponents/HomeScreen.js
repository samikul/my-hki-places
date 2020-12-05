import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Fetch from '../LogicalComponents/Fetch'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>home</Text  >
            <Fetch />
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});