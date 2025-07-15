import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Bucket } from "../../App";

import bucketsStyles from "../styles/bucketStyles";

type Props = NativeStackScreenProps<RootStackParamList, "AddBucket">;

export default function AddBucketScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const onAdd = () => {
    if (!name) {
      Alert.alert("Error", "Please enter a bucket name");
      return;
    }
    const bucket: Bucket = {
      id: Date.now().toString(),
      name,
      amount: amount ? parseFloat(amount) : undefined,
    };
    navigation.navigate("Home", { newBucket: bucket });
  };

  return (
    <View style={bucketsStyles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={bucketsStyles.title}>Add Saving Bucket</Text>

      <TextInput
        placeholder="Bucket Name"
        value={name}
        onChangeText={setName}
        style={localStyles.input}
      />
      <TextInput
        placeholder="Goal Amount (optional)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={localStyles.input}
      />

      <Button title="Add Bucket" onPress={onAdd} />
      <View style={{ marginTop: 20, width: "80%" }}>
        <Button title="Back to Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#004D40",
    borderRadius: 8,
  },
});
