import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "../styles/homeStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>💰 Budget App</Text>
      <Text style={styles.subtitle}>Welcome to your budget dashboard.</Text>

      <View style={{ marginTop: 20, width: "80%" }}>
        <Button
          title="Add Expense"
          onPress={() => navigation.navigate("AddExpense")}
        />
      </View>

      <View style={{ marginTop: 10, width: "80%" }}>
        <Button
          title="View Buckets"
          onPress={() => navigation.navigate("Buckets")}
        />
      </View>
    </View>
  );
}
