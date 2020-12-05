import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, FlatList, Image } from 'react-native'

export default function Fetch(props) {

    const [places, setPlaces] = useState([])

    const url = 'http://open-api.myhelsinki.fi/v1/places/'
    fetch(url)
        .then(res => res.json())
        .then(data => {
            setPlaces(data.data)
        })
        .catch((error) => {
            Alert.alert('Error', error.message)
        })
    console.log("moi")
    return null
}
