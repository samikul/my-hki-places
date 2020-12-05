import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, FlatList, Image, TextInput } from 'react-native'

export default function FetchAndListAllPlaces(props) {

    const [places, setPlaces] = useState([])

    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        getPlaces()
    }, [])

    const getPlaces = () => {
        const url = 'http://open-api.myhelsinki.fi/v1/places/'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPlaces(data.data)
            })
            .catch((error) => {
                Alert.alert('Error', error)
            })
        return places
    }

    const listSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "80%",
                    backgroundColor: "#521818",
                    marginTop: 10,
                    marginBottom: 10
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setKeyword(text)}
                value={keyword}
            />
            <FlatList
                style={{ marginLeft: "5%" }}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.id}</Text>
                        <Text>{item.name.fi}</Text>
                    </View>}
                ItemSeparatorComponent={listSeparator}
                data={places}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
