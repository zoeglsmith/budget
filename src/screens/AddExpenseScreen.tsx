import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import styles from "../styles/addExpensesStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "AddExpense">;

export default function AddExpenseScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Add Expense</Text>
      <Text style={styles.subtitle}>Here you will add your expenses.</Text>

      <View style={{ marginTop: 20, width: "80%" }}>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}
