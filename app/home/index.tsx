import { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import HomeHeader from "../../src/components/HomeHeader/HomeHeader";
import StressScoreCard from "../../src/components/StressScoreCard/StressScoreCard";
import AIRecommendationCard from "../../src/components/AIRecommendationCard/AIRecommendationCard";
import AIButton from "../../src/components/AIButton/AIButton";
import SectionHeader from "../../src/components/SectionHeader/SectionHeader";
import TaskList from "../../src/components/TaskList/TaskList";

import { getTarefasByUser } from "../../src/services/tarefaService";
import { getStressScoreByUserId } from "../../src/services/healthService";

export default function Home() {
  const params = useLocalSearchParams();
  const [refreshKey, setRefreshKey] = useState(0);

  const [tarefas, setTarefas] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  async function carregarTarefas() {
    setLoading(true);
    try {
      const lista = await getTarefasByUser();
      const scoreValue = await getStressScoreByUserId();

      setTarefas(lista);
      setScore(scoreValue);
    } catch (error) {
      console.log("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  // Carrega ao entrar + quando refreshKey mudar
  useEffect(() => {
    carregarTarefas();
  }, [refreshKey]);

  // CORREÇÃO DO LOOP
  useEffect(() => {
    if (params.updated) {
      setRefreshKey((prev) => prev + 1);
      router.setParams({ updated: undefined });
    }
  }, [params.updated]);

  // Remover item da lista após excluir
  function removeTask(id) {
    setTarefas((prev) => prev.filter((t) => t.id !== id));
  }

  function reorganizarTarefasAI() {
  setTarefas((prev) => {
    // cria uma cópia da lista
    const novaLista = [...prev];

    // embaralhar (algoritmo Fisher-Yates)
    for (let i = novaLista.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [novaLista[i], novaLista[j]] = [novaLista[j], novaLista[i]];
    }

    return novaLista;
  });

  console.log("Tarefas reorganizadas pela IA!");
}

  // Determinar nível do estresse
  const nivel =
    score < 34 ? "Baixo" :
    score < 67 ? "Médio" :
    "Alto";

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <HomeHeader />

      <View style={styles.content}>
        
        {/* Stress Score Card */}
        <StressScoreCard score={score} nivel={nivel} />

        {/* Recomendação da IA */}
        <AIRecommendationCard 
          text={
            nivel === "Baixo"
              ? "Seu nível de estresse está baixo. Que tal realizar tarefas desafiadoras?"
              : nivel === "Médio"
              ? "Você está moderado. Reorganize suas tarefas para manter equilíbrio."
              : "Nível alto! Priorize descanso e tarefas leves."
          } 
        />

        {/* Botão da IA */}
        <AIButton onPress={reorganizarTarefasAI} />

        {/* Header de seção */}
        <SectionHeader />

        {/* Lista de tarefas */}
        {loading ? (
          <ActivityIndicator 
            size="large" 
            color="#7B2FFF" 
            style={{ marginTop: 20 }} 
          />
        ) : (
          <TaskList tarefas={tarefas} reload={removeTask} />
        )}
      </View>

      {/* Botão flutuante de criar tarefa */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => router.push("/newTask")}
      >
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FF" },
  content: { paddingHorizontal: 18, marginTop: 10 },

  fab: {
    position: "absolute",
    bottom: 25,
    right: 25,
    width: 65,
    height: 65,
    backgroundColor: "#7B2FFF",
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});
