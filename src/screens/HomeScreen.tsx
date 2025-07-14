import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "../styles/homeStyles";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>💰 Budget App</Text>
      <Text style={styles.subtitle}>Welcome to your budget dashboard.</Text>
    </View>
  );
}
