import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Link, router} from "expo-router";

const index = () => {
    return (
        <View>
            <Text>index</Text>
            <Link href="/users/1">Go to user 1</Link>
            <Pressable onPress={()=>
                router.push({
                pathname:"/users/[id]",
                params: {id: 2}
            })}>
                <Text>Go to user 2 </Text>
            </Pressable>
        </View>
    );
};

export default index;
