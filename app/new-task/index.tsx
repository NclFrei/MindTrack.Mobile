import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { createTarefa } from "../../src/services/tarefaService";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewTask() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(1);
  const [dificuldade, setDificuldade] = useState(1);

  async function salvar() {
    try {
      await createTarefa({
        titulo,
        descricao,
        prioridade,
        dificuldade,
        metaId: null,
      });

      router.replace("/home");
    } catch (err) {
      console.log("Erro ao salvar tarefa:", err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      {/* 🔙 Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.replace("/home")}>
        <Ionicons name="arrow-back" size={24} color="#000" />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Nova Tarefa</Text>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        placeholder="Prioridade (1-5)"
        value={String(prioridade)}
        onChangeText={(v) => setPrioridade(Number(v))}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Dificuldade (1-5)"
        value={String(dificuldade)}
        onChangeText={(v) => setDificuldade(Number(v))}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F3F6FF" },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  backText: {
    fontSize: 16,
    marginLeft: 6,
    color: "#000",
    fontWeight: "500",
  },

  title: { fontSize: 24, fontWeight: "700", marginBottom: 20 },
  input: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  button: {
    backgroundColor: "#7B2FFF",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#FFF", fontWeight: "700", fontSize: 16 },
});
