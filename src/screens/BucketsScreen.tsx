import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import styles from "../styles/bucketStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Buckets">;

export default function BucketsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>Saving Buckets</Text>
      <Text style={styles.subtitle}>Manage your saving buckets here.</Text>

      <View style={{ marginTop: 20, width: "80%" }}>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}
