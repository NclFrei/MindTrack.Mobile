import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AIButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.aiButton} onPress={onPress}>
      <Ionicons name="sparkles-outline" size={20} color="#fff" />
      <Text style={styles.aiButtonText}>Reorganizar com IA</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  aiButton: {
    marginTop: 20,
    backgroundColor: "#7B2FFF",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    elevation: 3,
  },
  aiButtonText: {
    color: "#fff",
    fontSize: 15,
    marginLeft: 8,
    fontWeight: "600",
  },
});
