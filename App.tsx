import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import AddExpenseScreen from "./src/screens/AddExpenseScreen";
import BucketsScreen from "./src/screens/BucketsScreen";
import AddBucketScreen from "./src/screens/AddBucketScreen"; 

export type Expense = {
  id: string;
  name: string;
  amount: number;
  category: string;
};

export type Bucket = {
  id: string;
  name: string;
  amount?: number; // optional goal amount
};

export type RootStackParamList = {
  Home:
    | {
        newExpense?: Expense;
        newBucket?: Bucket;
      }
    | undefined;
  AddExpense: undefined;
  Buckets: undefined;
  AddBucket: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Budget Dashboard" }}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpenseScreen}
          options={{ title: "Add Expense" }}
        />
        <Stack.Screen
          name="Buckets"
          component={BucketsScreen}
          options={{ title: "Saving Buckets" }}
        />
        <Stack.Screen
          name="AddBucket"
          component={AddBucketScreen}
          options={{ title: "Add Bucket" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
