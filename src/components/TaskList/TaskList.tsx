import { View, Text, StyleSheet, FlatList } from "react-native";
import TaskItem from "../TaskItem/TaskItem";
import { Ionicons } from "@expo/vector-icons";

export default function TaskList({ tarefas }) {
  if (tarefas.length === 0) {
    return (
      <View style={styles.emptyBox}>
        <Ionicons name="clipboard-outline" size={40} color="#B0B6C4" />
        <Text style={styles.emptyText}>Nenhuma tarefa cadastrada</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={tarefas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <TaskItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  emptyBox: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 10,
    fontSize: 14,
    color: "#999",
  },
});
