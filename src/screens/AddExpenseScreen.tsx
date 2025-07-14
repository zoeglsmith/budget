import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "../styles/addExpensesStyles";

export default function AddExpenseScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Add Expense</Text>
      <Text style={styles.subtitle}>Here you will add your expenses.</Text>
    </View>
  );
}
