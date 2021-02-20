import React from 'react';
import { FlatList } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require("../assets/akash.jpg")
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/akash.jpg")
    },
    {
        id: 3,
        title: "T3",
        description: "D3",
        image: require("../assets/akash.jpg")
    }
]

function MesssagesScreen(props) {
    return (
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}/>} />
    );
}

export default MesssagesScreen;