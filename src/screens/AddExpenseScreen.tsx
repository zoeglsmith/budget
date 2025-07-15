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
import styles from "../styles/addExpensesStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Expense } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "AddExpense">;

export default function AddExpenseScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const onAdd = () => {
    if (!name || !amount || !category) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }
    const expense: Expense = {
      id: Date.now().toString(),
      name,
      amount: parseFloat(amount),
      category,
    };

    navigation.navigate("Home", { newExpense: expense });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Add Expense</Text>

      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={localStyles.input}
      />
      <TextInput
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        style={localStyles.input}
      />
      <TextInput
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
        style={localStyles.input}
      />

      <Button title="Add" onPress={onAdd} />
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
    borderColor: "#ccc",
    borderRadius: 8,
  },
});
