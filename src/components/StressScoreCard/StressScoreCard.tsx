import { View, Text, StyleSheet } from "react-native";

export default function StressScoreCard({ score = 0, nivel = "Baixo" }) {
  return (
    <View style={styles.stressCard}>
      <Text style={styles.stressTitle}>Stress Score</Text>

      <View style={styles.stressCircle}>
        <View style={styles.greenDot} />
        <Text style={styles.stressValue}>{score}</Text>
        <Text style={styles.stressNivel}>{nivel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: "center",
    elevation: 3,
  },
  stressTitle: { fontSize: 15, color: "#444", marginBottom: 8 },
  stressCircle: {
    width: 150,
    height: 150,
    borderRadius: 80,
    borderWidth: 3,
    borderColor: "#E6E6E6",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  stressValue: { fontSize: 40, fontWeight: "bold", color: "#000" },
  stressNivel: { marginTop: 4, fontSize: 16, color: "green" },
  greenDot: {
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 10,
    position: "absolute",
    top: 10,
  },
});
