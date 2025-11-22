import { SafeAreaView, View, StyleSheet } from "react-native";
import HomeHeader from "../../src/components/HomeHeader/HomeHeader";
import StressScoreCard from "../../src/components/StressScoreCard/StressScoreCard";
import AIRecommendationCard from "../../src/components/AIRecommendationCard/AIRecommendationCard";
import AIButton from "../../src/components/AIButton/AIButton";
import SectionHeader from "../../src/components/SectionHeader/SectionHeader";
import TaskList from "../../src/components/TaskList/TaskList";

export default function Home() {
  const tarefas = [];
  const score = 0;
  const nivel = "Baixo";

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader />

      <View style={styles.content}>
        <StressScoreCard score={score} nivel={nivel} />
        <AIRecommendationCard text="Seu nível de estresse está baixo. Este é um ótimo momento para tarefas desafiadoras!" />
        <AIButton onPress={() => console.log("IA reorganizou")} />
        <SectionHeader />
        <TaskList tarefas={tarefas} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FF" },
  content: { paddingHorizontal: 18, marginTop: 10 },
});
