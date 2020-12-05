import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FetchAndListAllPlaces from '../LogicalComponents/FetchAndListAllPlaces'

export default function PlaceListScreen() {
    return (
        <View style={styles.container}>
            <FetchAndListAllPlaces />
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