import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "@/fireBaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { Link, router } from "expo-router";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        router.replace("/(tabs)");
      }
    } catch (error: any) {
      console.log("error");
      alert("sign in is failed" + error.message);
    }
  };
  const signUp = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        router.replace("/(tabs)");
      }
    } catch (error: any) {
      console.log("error");
      alert("sign in is failed" + error.message);
    }
  };
  return (
    <SafeAreaView className={"flex-1 justify-center items-center"}>
      <View className={"w-full"}>
        <Text className={"mt-4 text-3xl font-bold text-center"}>Login</Text>
        <View className={"border border-black w-full flex flex-col gap-8"}>
          <TextInput
            placeholder={"email"}
            value={email}
            onChangeText={setEmail}
            className={"border border-gray-900  rounded-3xl mx-5"}
          />
          <TextInput
            placeholder={"password"}
            value={password}
            onChangeText={setPassword}
            className={"border border-gray-900 px-10 rounded-3xl mx-5"}
          />
          <TouchableOpacity
            className={"flex flex-col items-center gap-2 mt-1"}
            onPress={signIn}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={"flex flex-col items-center gap-2 mt-1"}
            onPress={signUp}
          >
            <Text>Make Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
