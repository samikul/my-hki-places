import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Alert,
    FlatList,
    Image,
    TextInput,
} from 'react-native'
import { Avatar, Button, Card, Title, Paragraph, List, Modal, Portal, Provider } from 'react-native-paper';
import { set } from 'react-native-reanimated';

export default function PlaceScreen({ navigation }) {


    const [places, setPlaces] = useState([])
    const [favorites, setFavorites] = useState([])

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

    function addToFavorities(item) {
        console.log('addToFavorities() -> ', item.name.fi)
        setFavorites([...favorites, /* { key: item } */item])
    }

    const LeftContent = props => <
        Avatar.Icon {...props} icon="map-marker" color="white" style={{ backgroundColor: 'navy' }} />

    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginLeft: "5%", marginRight: "5%" }}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View>
                        <Card elevation={4} style={{ marginBottom: 10 }}>
                            <Card.Title title={item.name.fi} subtitle={item.location.address.street_address} left={LeftContent} />
                            <Card.Content>
                                <Paragraph>{item.description.body}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => addToFavorities(item)} color='#CC5500' icon="heart" mode="text">Favorite</Button>
                                <Button icon="map-marker" color='#CC5500' mode="text">Show on map</Button>
                            </Card.Actions>
                        </Card>
                    </View>}
                data={places}
            />
            {/* <Button
                onPress={() => navigation.navigate('FavoriteScreen', favorites)} >favorites</Button> */}
        </View >
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
