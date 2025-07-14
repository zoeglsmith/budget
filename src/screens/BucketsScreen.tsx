import React from "react";
import { View, Text, StatusBar } from "react-native";
import styles from "../styles/bucketStyles";

export default function BucketsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Saving Buckets</Text>
      <Text style={styles.subtitle}>Manage your saving buckets here.</Text>
    </View>
  );
}
