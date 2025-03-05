import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useLocalSearchParams} from "expo-router";

const userPage = () => {
    const {id} = useLocalSearchParams();
    return (
        <View>
            <Text>userPage -{id} </Text>
        </View>
    );
};

export default userPage;
