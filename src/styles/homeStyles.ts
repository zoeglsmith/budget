import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#222",
    marginTop: 20,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  listItem: {
    fontSize: 16,
    color: "#444",
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
});

export default homeStyles;
