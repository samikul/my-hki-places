import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
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
    const [keyword, setKeyword] = useState('')

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


    // https://blog.logrocket.com/designing-a-ui-with-custom-theming-using-react-native-paper/
    const LeftContent = props => <
        Avatar.Icon {...props} icon="map-marker" color="white" />


    return (
        <View style={styles.container}>
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setKeyword(text)}
                value={keyword}
            />
            <Button icon="blank" onPress={() => console.log('search pressed')}>search</Button>
            <FlatList
                style={{ marginLeft: "5%" }}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View>
                        {/*                         <List.Item
                            title={item.name.fi}
                            description={item.description.body}
                            left={props => <List.Icon {...props} icon="map-marker" />}
                        /> */}
                        <Card
                            elevation={4}>
                            <Card.Title title={item.name.fi} subtitle={item.location.address.street_address} left={LeftContent} />
                            <Card.Content>
                                <Paragraph>{item.description.body}</Paragraph>
                            </Card.Content>
                            <Card.Actions>
                                <Button icon="heart" mode="text">Add to favorites</Button>
                                <Button icon="pen" mode="text">Add comment</Button>
                            </Card.Actions>
                        </Card>
                    </View>}
                data={places}
            />
            <StatusBar style="auto" />
            <Button icon="blank" mode="outlined" onPress={getPlaces}>Get places</Button>
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
