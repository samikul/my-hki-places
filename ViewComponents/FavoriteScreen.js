import React from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

export default function FavoriteScreen({ route, navigation }) {

    const favorites = route.params

    function testFunction() {
        console.log("testFunction() ", favorites)
    }

    return (
        <View style={styles.container}>

            <Text style={{ marginTop: 200 }}>favorites</Text>
            <FlatList
                data={favorites}
                renderItem={({ item }) => <Text>moi</Text >}
                keyExtractor={((item, index) => index.toString())}
            />
            <FlatList
                style={{ marginLeft: "5%", marginRight: "5%" }}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Text>Placeholder</Text >}
                data={favorites}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});