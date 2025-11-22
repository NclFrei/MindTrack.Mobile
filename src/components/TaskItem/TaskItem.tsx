import { View, Text, StyleSheet } from "react-native";

export default function TaskItem({ item }) {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.desc}>{item.descricao}</Text>
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
  },
  title: { fontSize: 16, fontWeight: "600" },
  desc: { color: "#666", marginTop: 4 },
});
