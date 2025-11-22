import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { deleteTarefa } from "../../services/tarefaService";

export default function TaskItem({ item, onDelete }) {
  async function handleDelete() {
    await deleteTarefa(item.id);
    onDelete(item.id); 
  }

  return (
    <View style={styles.taskItem}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.titulo}</Text>
        <Text style={styles.desc}>{item.descricao}</Text>

        <Text style={styles.info}>
          Prioridade: {item.prioridade} • Dificuldade: {item.dificuldade}
        </Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => router.push(`/editTask?id=${item.id}`)}>
          <Ionicons name="create-outline" size={22} color="#7B2FFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete}>
          <Ionicons name="trash-outline" size={22} color="#FF4B4B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    elevation: 3,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "600" },
  desc: { color: "#666", marginTop: 4 },
  info: { color: "#7a7a7a", marginTop: 6, fontSize: 12 },
  buttons: {
    flexDirection: "row",
    gap: 15,
    marginLeft: 10,
  },
});
