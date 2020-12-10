import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import * as Location from 'expo-location'
import { Button } from 'react-native-paper';

export default function MapScreen() {

    useEffect(() => {
        getLocation()
    }, [])

    const getLocation = async () => {
        let { status } = await Location.requestPermissionsAsync()
        if (status != 'granted') {
            Alert.alert('No permission')
        }
        else {
            let location = await Location.getCurrentPositionAsync({})
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221,
            })
            setMarker({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
        }
    }

    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    })

    const [address, setAddress] = useState('')

    const [region, setRegion] = useState({
        latitude: 90.0000,
        longitude: 0.00000,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221,
    })

    const [marker, setMarker] = useState({
        latitude: 90.0000,
        longitude: 0.00000,
    })

    const getCoords = () => {
        let url = 'http://www.mapquestapi.com/geocoding/v1/address?key=rRUp0AlILajsEjUSiDFwWLAFWgZjrIpj&location=' + address
        fetch(url)
            .then(res => res.json())
            .then((responseData) => {
                setRegion({
                    latitude: responseData.results[0].locations[0].latLng.lat,
                    longitude: responseData.results[0].locations[0].latLng.lng,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                })
                setMarker({
                    latitude: responseData.results[0].locations[0].latLng.lat,
                    longitude: responseData.results[0].locations[0].latLng.lng,
                })
            })
            .catch((error) => {
                Alert.alert('Err', error)
            })
    }

    return (
        <View style={styles.container}>
            <MapView
                style={{ flex: 1 }}
                region={{
                    latitude: region.latitude,
                    longitude: region.longitude,
                    latitudeDelta: 0.0322,
                    longitudeDelta: 0.0221,
                }}>
                <Marker
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude
                    }} />
            </MapView>
            <View style={styles.text}>
                <TextInput onChangeText={(value) => setAddress(value)} placeholder="Enter address " />
                <Button onPress={getCoords} color='#CC5500' icon="magnify" mode="text">Search </Button>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 0.1,
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});
