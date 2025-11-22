import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { getTarefaById, updateTarefa } from "../../src/services/tarefaService";

export default function EditTask() {
  const { id } = useLocalSearchParams();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState(1);
  const [dificuldade, setDificuldade] = useState(1);
  const [loading, setLoading] = useState(true);

  // CARREGAR A TAREFA DO BACKEND
  useEffect(() => {
    async function load() {
      try {
        const tarefa = await getTarefaById(Number(id));

        setTitulo(tarefa.titulo);
        setDescricao(tarefa.descricao);
        setPrioridade(tarefa.prioridade);
        setDificuldade(tarefa.dificuldade);
      } catch (e) {
        console.log("Erro ao carregar tarefa:", e);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  async function salvar() {
    await updateTarefa(Number(id), {
      titulo,
      descricao,
      prioridade,
      dificuldade,
    });

    router.replace({
      pathname: "/home",
      params: { updated: "1" },
    });
  }

  if (loading) return <Text>Carregando tarefa...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Tarefa</Text>

      <TextInput style={styles.input} value={titulo} onChangeText={setTitulo} />

      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
      />

      <TextInput
        style={styles.input}
        value={String(prioridade)}
        onChangeText={(v) => setPrioridade(Number(v))}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={String(dificuldade)}
        onChangeText={(v) => setDificuldade(Number(v))}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar alterações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#F3F6FF" },
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
