import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { router } from "expo-router";
import firebase from "firebase/compat";
import auth = firebase.auth;

export default function TabOneScreen() {
  getAuth().onAuthStateChanged((user) => {
    if (!user) router.replace("/");
  });
  return (
    <View>
      <TouchableOpacity onPress={() => auth().signOut()}>
        <Text className={"text-3xl font-bold text-center"}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

