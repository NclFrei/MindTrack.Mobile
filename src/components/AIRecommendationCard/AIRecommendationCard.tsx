import { View, Text, StyleSheet } from "react-native";

export default function AIRecommendationCard({ text }) {
  return (
    <View style={styles.aiCard}>
      <Text style={styles.aiTitle}>Recomendação da IA</Text>
      <Text style={styles.aiText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aiCard: {
    marginTop: 25,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 20,
    elevation: 2,
  },
  aiTitle: { fontWeight: "600", fontSize: 16, marginBottom: 6 },
  aiText: { color: "#333", fontSize: 14 },
});
