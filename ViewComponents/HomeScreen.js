import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>With this application you can find information about the places all around in Helsinki!.</Text>
            <Text>This application uses data from Helsinki Open APi. The data is owned by Helsinki Marketing and the data is under Creative Commons BY 4.0 licence.</Text>
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