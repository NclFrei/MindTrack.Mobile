import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SectionHeader() {
  return (
    <View style={styles.sectionHeader}>
      <View>
        <Text style={styles.sectionTitle}>Agenda Inteligente</Text>
        <Text style={styles.sectionSubtitle}>
          Priorizada baseada no seu estado atual
        </Text>
      </View>

      <TouchableOpacity style={styles.newTaskButton}>
        <Ionicons name="add" size={20} color="#000" />
        <Text style={styles.newTaskText}>Nova Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 30,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 22, fontWeight: "700" },
  sectionSubtitle: { color: "#666", fontSize: 13 },
  newTaskButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  newTaskText: { fontSize: 14, marginLeft: 6, fontWeight: "500" },
});
