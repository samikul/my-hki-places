import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function FavoritiesScreen() {
    return (
        <View style={styles.container}>
            <Text>favorities</Text  >
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