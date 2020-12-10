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
import { Avatar, Button, Card, Title, Paragraph, List } from 'react-native-paper';
import { set } from 'react-native-reanimated';

export default function FetchAndListAllPlaces(props) {


    const [places, setPlaces] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getPlaces()
    }, [])

    const getPlaces = () => {
        console.log("getplaces() alku")
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
        console.log('add favorite')
        setFavorites([...favorites, item.name.fi])
    }

    function addComment() {
        console.log('add comment')
    }

    function showOnMap() {
        console.log(favorites)
        console.log('show on map')
    }



    // https://blog.logrocket.com/designing-a-ui-with-custom-theming-using-react-native-paper/
    const LeftContent = props => <
        Avatar.Icon {...props} icon="map-marker" color="white" style={{ backgroundColor: 'navy' }} />

    return (
        <View style={styles.container}>
            <Button icon="blank" onPress={() => console.log('search pressed')}>search</Button>
            <FlatList
                style={{ marginLeft: "5%" }}
                keyExtractor={item => item.id}
                initialNumToRender={20}
                onEndReached={showOnMap}
                renderItem={({ item }) =>
                    <View>
                        <Card elevation={4}>
                            <Card.Title title={item.name.fi} subtitle={item.location.address.street_address} left={LeftContent} />
                            <Card.Content>
                                <Paragraph>{item.description.body}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => addToFavorities(item)} color='#CC5500' icon="heart" mode="text">Favorite</Button>
                                <Button onPress={showOnMap} icon="map-marker" color='#CC5500' mode="text">Show on map</Button>
                            </Card.Actions>
                        </Card>
                    </View>}
                data={places}
            />
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
