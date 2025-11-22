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

export default function Home() {
  const params = useLocalSearchParams();
  const [refreshKey, setRefreshKey] = useState(0);

  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregarTarefas() {
    setLoading(true);
    try {
      const lista = await getTarefasByUser();
      setTarefas(lista);
    } catch (error) {
      console.log("Erro ao carregar tarefas:", error);
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

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <HomeHeader />

      <View style={styles.content}>
        {/* Stress score */}
        <StressScoreCard score={0} nivel="Baixo" />

        {/* Recomendação da IA */}
        <AIRecommendationCard text="Seu nível de estresse está baixo. Este é um ótimo momento para tarefas desafiadoras!" />

        {/* Botão da IA */}
        <AIButton onPress={() => console.log("IA reorganizou")} />

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
