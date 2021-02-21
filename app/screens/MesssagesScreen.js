import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

import Constants from "expo-constants";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/akash.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/akash.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/akash.jpg"),
  },
];

function MesssagesScreen(props) {
  const [messages, setMessages] = useState(intialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    //Delete the message from the array
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 4,
              title: "T4",
              description: "D4",
              image: require("../assets/akash.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

// const styles = StyleSheet.create({

// })

export default MesssagesScreen;
