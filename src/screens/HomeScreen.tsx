import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/homeStyles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, Expense, Bucket } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation, route }: Props) {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [buckets, setBuckets] = useState<Bucket[]>([]);
  const [budget, setBudget] = useState<string>("1000");

  useEffect(() => {
    const params = route.params;
    if (params?.newExpense) {
      setExpenses((prev) => [...prev, params.newExpense!]);
      navigation.setParams({ newExpense: undefined });
    }
    if (params?.newBucket) {
      setBuckets((prev) => [...prev, params.newBucket!]);
      navigation.setParams({ newBucket: undefined });
    }
  }, [route.params]);

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const budgetNum = Number(budget) || 0;
  const leftOver = budgetNum - totalSpent;

  const onAddPress = () => {
    navigation.navigate("AddExpense");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.title}>💰 Budget Overview</Text>

      {/* Budget Input & Summary Section */}
      <View style={localStyles.budgetContainer}>
        <Text style={localStyles.label}>Total Budget:</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter budget"
          value={budget}
          onChangeText={setBudget}
          style={localStyles.budgetInput}
          accessibilityLabel="Set your total budget"
        />
        <View style={localStyles.summaryRow}>
          <Text style={localStyles.summaryText}>
            Spent: ${totalSpent.toFixed(2)}
          </Text>
          <Text style={localStyles.summaryText}>
            Left Over: ${leftOver.toFixed(2)}
          </Text>
        </View>
      </View>

      {/* Buckets List */}
      <Text style={styles.sectionTitle}>Saving Buckets</Text>
      <FlatList
        data={buckets}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.listItem}>No buckets yet</Text>}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name} (Goal: ${item.amount || "N/A"})
          </Text>
        )}
      />

      {/* Expenses List */}
      <Text style={styles.sectionTitle}>Expenses</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.listItem}>No expenses yet</Text>
        }
        renderItem={({ item }) => (
          <Text style={styles.listItem}>
            {item.name} - ${item.amount} [{item.category}]
          </Text>
        )}
      />

      {/* View Buckets Link */}
      <Text
        onPress={() => navigation.navigate("Buckets")}
        style={localStyles.viewBucketsButton}
      >
        View Buckets
      </Text>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={localStyles.fab}
        onPress={onAddPress}
        accessible
        accessibilityRole="button"
        accessibilityLabel="Add new expense or bucket"
      >
        <Text style={localStyles.fabIcon}>＋</Text>
      </TouchableOpacity>
    </View>
  );
}

const localStyles = StyleSheet.create({
  budgetContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    width: "90%",
    marginVertical: 12,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600",
    color: "#444",
  },
  budgetInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
    color: "#222",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  viewBucketsButton: {
    marginTop: 20,
    fontSize: 18,
    color: "#007AFF",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 40,
    backgroundColor: "#007AFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  fabIcon: {
    fontSize: 32,
    color: "white",
    lineHeight: 32,
  },
});
